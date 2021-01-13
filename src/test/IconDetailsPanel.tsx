import React, { ReactElement, useEffect, useState } from "react";
import { useVisible } from "./hooks";
import { Drawer } from "antd";
import { useStore } from "stook";

export const DetailsPanel = (): ReactElement => {
  const [translateX, setTranslateX] = useState("translateX(100%)");
  const [container] = useStore<HTMLDivElement>("map-container");
  const { visible, onClose } = useVisible("panelVisible", false);

  useEffect(() => {
    const state = visible ? "translateX(0%)" : "translateX(100%)";
    setTranslateX(state);
  }, [visible]);

  return (
    <Drawer
      mask={false}
      maskStyle={{ pointerEvents: "none" }}
      maskClosable={true}
      title="Basic Drawer"
      placement="right"
      closable={true}
      onClose={onClose}
      visible={visible}
      getContainer={container}
      style={{
        transform: translateX,
        width: "256px",
        height: "calc(100% - 80px)",
        marginTop: "40px",
        marginRight: "40px"
      }}
      bodyStyle={{ padding: "0px", width: "256px" }}
    ></Drawer>
  );
};
