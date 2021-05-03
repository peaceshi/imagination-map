/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from "react";
import Page from "./testEchart";

const kB = 1024;
const MB = 1024 * 1024;
const GB = 1024 * 1024 * 1024;

export function RenderMetrics(properties: { metrics: any }) {
  const [metrics, setMetrics] = useState(properties.metrics);

  useEffect(() => {
    const timer = setInterval(() => {
      setMetrics(properties.metrics);
    }, 1000);

    return () => clearInterval(timer);
  });
  if (!metrics) {
    0;
    // console.error("error");
    return null;
  }
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          zIndex: 999,
          backgroundColor: "#0000005a",
          color: "#D7D2B8"
        }}
      >
        <div>FPS: {Math.round(metrics?.fps)}</div>
        <div>GPU Frame Time: {metrics?.gpuTimePerFrame.toFixed(2)}ms</div>
        <div>CPU Frame Time: {metrics?.cpuTimePerFrame.toFixed(2)}ms</div>
        <div>GPU Memory: {formatMemory(metrics?.gpuMemory)}</div>
      </div>
      {/*@ts-expect-error: Bad types define */}
      <Page metrics={metrics} />
    </>
  );
}

function formatMemory(mem: number) {
  let unit;
  let value;

  if (mem < kB) {
    value = mem;
    unit = " bytes";
  } else if (mem < MB) {
    value = mem / kB;
    unit = "kB";
  } else if (mem < GB) {
    value = mem / MB;
    unit = "MB";
  } else {
    value = mem / GB;
    unit = "GB";
  }

  return `${value.toFixed(2)}${unit}`;
}
