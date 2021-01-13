import { Image, Tabs, Button } from "antd";
import React, { ReactElement, useCallback } from "react";
import { AppleOutlined } from "@ant-design/icons";

import screenfull from "screenfull";

const { TabPane } = Tabs;

export const BackgroundImage = (): ReactElement => {
  return <Image style={{}} src="icons/ui/bac.png" />;
};
export const FilterTab = (): ReactElement => {
  return (
    <Tabs size="small" defaultActiveKey="1" centered>
      <TabPane
        tab={
          <span>
            <AppleOutlined />
            <div>特性</div>
          </span>
        }
        key="1"
      ></TabPane>
      <TabPane
        tab={
          <>
            <span>
              <AppleOutlined />
              <div>特性</div>
            </span>
          </>
        }
        key="2"
      ></TabPane>
      <TabPane
        tab={
          <span>
            <AppleOutlined />
            <div>特性</div>
          </span>
        }
        key="3"
      ></TabPane>
      <TabPane
        tab={
          <span>
            <AppleOutlined />
            <div>特性</div>
          </span>
        }
        key="4"
      ></TabPane>
      <TabPane
        tab={
          <span>
            <AppleOutlined />
            <div>特性</div>
          </span>
        }
        key="5"
      ></TabPane>
      <TabPane
        tab={
          <span>
            <AppleOutlined />
            <div>特性</div>
          </span>
        }
        key="6"
      ></TabPane>
      <TabPane
        tab={
          <span>
            <AppleOutlined />
            <div>特性</div>
          </span>
        }
        key="7"
      ></TabPane>
    </Tabs>
  );
};
export const ScreenFull = (): ReactElement => {
  const element = document.querySelector("#main");
  const onClick = useCallback(() => {
    if (screenfull.isEnabled) {
      screenfull.on("change", () => {
        console.log("Am I fullscreen?", screenfull.isEnabled ? () => "Yes" : "No");
      });
      void screenfull.toggle(element ?? undefined);
    }
  }, [element]);

  return (
    <Button onClick={onClick} style={{ position: "absolute", left: "50%" }}>
      fullscreen
    </Button>
  );
};
