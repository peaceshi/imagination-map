import React, { ReactElement, useEffect, useState } from "react";
import { useToggle } from "ahooks";
import { Drawer, Button, Space, Image } from "antd";
import { BackgroundImage, FilterTab } from "./Components";
import { useStore } from "stook";

export const FilterPanel = (): ReactElement => {
  const [visible, { toggle }] = useToggle(false);
  const [container] = useStore<HTMLDivElement>("map-container");
  const [translateX, setTranslateX] = useState("translateX(-100%)");
  const [translateX1, setTranslateX1] = useState("translateX(0%)");

  useEffect(() => {
    const state = visible ? "translateX(0%)" : "translateX(-100%)";
    const state1 = visible ? "translateX(22vw)" : "translateX(0%)";
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
          minWidth: "256px",
          minHeight: "512px",
          maxWidth: "512px",
          maxHeight: "calc(100vh - 80px)",
          width: "20vw",
          height: "calc(20vw * 2.18)",
          position: "absolute",
          display: "flex",
          margin: "20px"
        }}
        bodyStyle={{
          padding: "0px",
          minWidth: "256px",
          width: "20vw",
          height: "100%",
          position: "absolute",
          backgroundImage: "url('/icons/ui/bac.png')",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat"
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
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "13%",
              backgroundColor: "cadetblue",
              display: "flex"
            }}
          >
            <div
              style={{
                margin: "2%",
                width: "20%",
                height: "calc(100% - 4vh)",
                position: "absolute",
                backgroundImage: "url('/icons/ui/bac.png')",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat"
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: "13%",
              width: "100%",
              height: "30%",
              backgroundColor: "coral"
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "40%",
              width: "100%",
              height: "60%",
              backgroundColor: "bisque"
            }}
          >
            <FilterTab></FilterTab>
          </div>
        </Space>
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
