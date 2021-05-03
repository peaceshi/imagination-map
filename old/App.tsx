import React, { ReactElement, useCallback, useEffect, useState } from "react";
import { Layout, Spin } from "antd";
import { DetailsPanel } from "./test/IconDetailsPanel";
import { MapLayers } from "./test/testLayers";
import { useFontSize, usePanelWidth, useVisible } from "./test/hooks";
import "./App.css";
import { FilterPanel } from "./test/FilterPanel";
import { ScreenFull } from "./test/Components";
import { useStore } from "stook";
import { useThrottleFn, useTimeout } from "ahooks";
const { Content } = Layout;

export const App = (): ReactElement => {
  // Return the App component.
  const [state, setState] = useState(true);
  const { updatePanelWidth } = usePanelWidth();
  const { updateFontSize } = useFontSize();
  const [, setContainer] = useStore<HTMLDivElement>("map-container");
  const setReference = useCallback(
    (container: HTMLDivElement) => {
      setContainer(container);
    },
    [setContainer]
  );
  const { run } = useThrottleFn(
    () => {
      window.addEventListener("resize", updatePanelWidth);
      updatePanelWidth();
      window.addEventListener("resize", updateFontSize);
      updateFontSize();
    },
    { wait: 1000 }
  );
  useEffect(run);
  useTimeout(() => {
    setState(false);
  }, 3000);

  return (
    <Layout className="layout-main">
      <Spin spinning={state} size="large" tip="Loading..." style={{ position: "inherit" }}>
        <Content
          id="main"
          className="map-layout-background"
          style={{
            position: "relative",
            height: "calc(100vh - 40px)",
            margin: "20px",
            background: "rgb(0, 0, 0)",
            minWidth: "100px"
          }}
        >
          <div
            id="map-container"
            ref={setReference}
            style={{
              position: "relative",
              height: "100%",
              background: "rgb(0, 0, 0)",
              minWidth: "100px"
            }}
          >
            <MapLayers></MapLayers>
            <DetailsPanel></DetailsPanel>
            <FilterPanel></FilterPanel>
            <ScreenFull></ScreenFull>
          </div>
        </Content>
      </Spin>
    </Layout>
  );
};
