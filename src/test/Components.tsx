import { Tabs, Button } from "antd";
import React, { ReactElement } from "react";

import { useStore } from "stook";
import { useFullscreen } from "ahooks";

const { TabPane } = Tabs;

export const FilterTab = (): ReactElement => {
  const [fontSize] = useStore<number>("fontSize");
  return (
    <Tabs defaultActiveKey="1">
      <TabPane
        tab={
          <span>
            <div style={{ fontSize: `${fontSize}px` }}>特性</div>
          </span>
        }
        key="1"
      ></TabPane>
      <TabPane
        tab={
          <>
            <span>
              <div style={{ fontSize: `${fontSize}px` }}>特性</div>
            </span>
          </>
        }
        key="2"
      ></TabPane>
      <TabPane
        tab={
          <span>
            <div style={{ fontSize: `${fontSize}px` }}>特性</div>
          </span>
        }
        key="3"
      ></TabPane>
      <TabPane
        tab={
          <span>
            <div style={{ fontSize: `${fontSize}px` }}>特性</div>
          </span>
        }
        key="4"
      ></TabPane>
      <TabPane
        tab={
          <span>
            <div style={{ fontSize: `${fontSize}px` }}>特性</div>
          </span>
        }
        key="5"
      ></TabPane>
      <TabPane
        tab={
          <span>
            <div style={{ fontSize: `${fontSize}px` }}>特性</div>
          </span>
        }
        key="6"
      ></TabPane>
      <TabPane
        tab={
          <span>
            <div style={{ fontSize: `${fontSize}px` }}>特性</div>
          </span>
        }
        key="7"
      ></TabPane>
    </Tabs>
  );
};

export const ScreenFull = (): ReactElement => {
  const [container] = useStore<HTMLDivElement>("map-container");
  const [isFullscreen, { toggleFull }] = useFullscreen(container);
  return (
    <Button onClick={toggleFull} style={{ position: "absolute", left: "50%" }}>
      {isFullscreen ? "Exit fullscreen" : "Fullscreen"}
    </Button>
  );
};
