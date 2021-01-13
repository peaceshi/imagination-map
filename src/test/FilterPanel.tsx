import React, { ReactElement, useEffect, useState } from "react";
import { useToggle } from "ahooks";
import { Drawer, Button, Space } from "antd";
import { BackgroundImage, FilterTab } from "./Components";
import { useStore } from "stook";

export const FilterPanel = (): ReactElement => {
  const [visible, { toggle }] = useToggle(false);
  const [container] = useStore<HTMLDivElement>("map-container");
  const [translateX, setTranslateX] = useState("translateX(-100%)");
  const [translateX1, setTranslateX1] = useState("translateX(0%)");

  useEffect(() => {
    const state = visible ? "translateX(0%)" : "translateX(-100%)";
    const state1 = visible ? "translateX(296px)" : "translateX(0%)";
    setTranslateX(state);
    setTranslateX1(state1);
  }, [visible]);

  const transformState = (toggleState?: boolean) => {
    toggle(toggleState);
  };
  return (
    <>
      <Drawer
        getContainer={container}
        placement="left"
        visible={visible}
        mask={false}
        style={{
          transform: translateX,
          width: "256px",
          height: "calc(100% - 40px)",
          position: "absolute",
          display: "flex",
          margin: "20px"
        }}
        bodyStyle={{
          padding: "0px",
          width: "256px",
          backgroundImage: "url('/icons/ui/bac.png')",
          backgroundSize: "cover"
        }}
        onClose={() => transformState(false)}
      >
        <Space
          direction="vertical"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 1
          }}
        >
          {/* <div style={{ position: "absolute", width: "100%", height: "10%", backgroundColor: "cadetblue" }}></div>
          <div
            style={{
              position: "absolute",
              top: "10%",
              width: "100%",
              height: "30%",
              backgroundColor: "coral"
            }}
          ></div> */}
          {/* <div
            style={{
              position: "absolute",
              top: "40%",
              width: "100%",
              height: "60%",
              backgroundColor: "bisque"
            }}
          >
            <FilterTab></FilterTab>
          </div> */}
        </Space>
        {/* <BackgroundImage></BackgroundImage> */}
      </Drawer>
      <Button
        type="primary"
        style={{
          transform: translateX1,
          marginBlock: "20px"
        }}
        onClick={() => transformState()}
      >
        Open
      </Button>
    </>
  );
};
