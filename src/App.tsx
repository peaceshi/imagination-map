import React, { ReactElement, useCallback } from "react";
import { Layout, Spin } from "antd";
import { DetailsPanel } from "./test/IconDetailsPanel";
import { MapLayers } from "./test/testLayers";
import { useVisible } from "./test/hooks";
import "antd/dist/antd.css";
import "./App.css";
import { FilterPanel } from "./test/FilterPanel";
import { ScreenFull } from "./test/Components";
import { useStore } from "stook";
const { Content } = Layout;

export const App = (): ReactElement => {
  // Return the App component.
  const { visible } = useVisible("loadingState", true);
  const [container, setContainer] = useStore<HTMLDivElement>("map-container");
  const setReference = useCallback(
    (container: HTMLDivElement) => {
      setContainer(container);
    },
    [setContainer]
  );

  return (
    <Layout className="layout-main">
      <Spin spinning={visible} size="large" tip="Loading..." style={{ position: "inherit" }}>
        <Content
          id="main"
          className="map-layout-background"
          style={{
            position: "relative",
            height: "calc(100vh - 40px)",
            margin: "20px",
            background: "rgb(0, 0, 0)",
            minWidth: "300px",
            minHeight: "550px"
          }}
        >
          <div id="map-container" ref={setReference}>
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
