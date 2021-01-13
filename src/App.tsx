import React, { ReactElement } from "react";
import { Layout, Spin } from "antd";
import { DetailsPanel } from "./test/IconDetailsPanel";
import { MapLayers } from "./test/testLayers";
import { useVisible, useReference } from "./test/hooks";
// import { Example } from "./test/testDraw";
// import { MapLayers } from "./test/testJsx";
import "antd/dist/antd.css";
import "./App.css";
import { FilterPanel } from "./test/FilterPanel";
import { ScreenFull } from "./test/Components";
const { Content } = Layout;

export const App = (): ReactElement => {
  // Return the App component.
  const { visible } = useVisible("loadingState", true);

  return (
    <Layout className="map-layout-main">
      <Spin spinning={visible} size="large" tip="Loading..." style={{ position: "inherit" }}>
        <Content
          id="main"
          className="map-layout-background"
          style={{ position: "relative", height: "calc(100vh - 40px)", margin: "20px", background: "rgb(0, 0, 0)" }}
        >
          <div id="map-container">
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
