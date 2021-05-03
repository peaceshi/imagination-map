import React, { ReactElement, useEffect, useState, useRef } from "react";

const MapLayers = React.lazy(() => import("./MapLayers"));

// from ahooks
const useInterval = (
  function_: () => void,
  delay: number | null | undefined,
  options?: {
    immediate?: boolean;
  }
): void => {
  const immediate = options?.immediate;

  const functionReference = useRef<() => void>();
  functionReference.current = function_;

  useEffect(() => {
    if (delay === undefined || delay === null) return;
    if (immediate) {
      functionReference.current?.();
    }
    const timer = setInterval(() => {
      functionReference.current?.();
    }, delay);
    return () => {
      clearInterval(timer);
    };
  }, [delay, immediate]);
};
const Spin = () => {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);
  return (
    <div className="Spin">
      <p>Waiting for loading...</p>
      <p>
        Map has been loading for <code>{count}</code> seconds.
      </p>
    </div>
  );
};

const MapLoader = (): ReactElement => {
  return (
    <React.Suspense
      fallback={
        <div>
          <Spin />
        </div>
      }
    >
      <MapLayers autoHighlight={false} onTilesLoad={undefined} showBorder={false} />
    </React.Suspense>
  );
};

export default MapLoader;
