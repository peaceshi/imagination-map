import { Tabs, Button } from "antd";
import React, { ReactElement, useCallback } from "react";

import { useStore } from "stook";
import { useFullscreen, useToggle } from "ahooks";
import { useFontSize } from "./hooks";

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

export const TreasureFold = (): ReactElement => {
  const [rotate, { toggle }] = useToggle("rotate(0deg)", "rotate(180deg)");
  return (
    <div
      onClick={() => toggle()}
      style={{
        position: "relative",
        flex: "0 1 5%",
        height: "100%",
        marginInline: "2.5%",
        backgroundImage: "url('./icons/ui/treasure_fold.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
        transform: rotate
      }}
    />
  );
};

export const useTranslate = (): { translateX: string; toggleTranslate: () => void } => {
  const [translateX, { toggle }] = useToggle("0%", "100%");
  return { translateX, toggleTranslate: toggle };
};
export const useFont1 = (): { font1: string; toggleFont1: () => void } => {
  const [font1, { toggle }] = useToggle("宝箱种类", "获取方式");
  return { font1, toggleFont1: toggle };
};

export const useFont2 = (): { font2: string; toggleFont2: () => void } => {
  const [font2, { toggle }] = useToggle("获取方式", "宝箱种类");
  return { font2, toggleFont2: toggle };
};

export const SwitchButton = (): ReactElement => {
  const { fontSize } = useFontSize();
  const { translateX, toggleTranslate } = useTranslate();
  const { font1, toggleFont1 } = useFont1();
  const { font2, toggleFont2 } = useFont2();
  const onClick = useCallback(() => {
    toggleTranslate();
    toggleFont1();
    toggleFont2();
  }, [toggleFont1, toggleFont2, toggleTranslate]);
  return (
    <div
      onClick={() => onClick()}
      style={{
        position: "relative",
        flex: "0 1 40%",
        height: "100%",
        alignSelf: "flex-start",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignContent: "center",
        justifyContent: "space-evenly",
        backgroundImage: "url('./icons/ui/bac_switch.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center"
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          flex: "1 1 50%",
          backgroundImage: "url('./icons/ui/bac_switch_btn.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          transform: `translateX(${translateX})`,
          placeContent: "center",
          placeItems: "center",
          color: "#FFFADE",
          fontSize: `calc(${fontSize}px*0.8)`
        }}
      >
        {font1}
      </div>
      <div
        style={{
          height: "100%",
          display: "flex",
          flex: "1 1 50%",
          transform: `translateX(-${translateX})`,
          placeContent: "center",
          placeItems: "center",
          color: "#817472",
          fontSize: `calc(${fontSize}px*0.8)`
        }}
      >
        {font2}
      </div>
    </div>
  );
};
