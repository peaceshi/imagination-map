import React, { ReactElement, useEffect, useState } from "react";
import { useVisible } from "./hooks";
import { Drawer } from "antd";
import { useStore } from "stook";

export const DetailsPanel = (): ReactElement => {
  const [translateX, setTranslateX] = useState("translateX(120%)");
  const [container] = useStore<HTMLDivElement>("map-container");
  const { visible, onClose } = useVisible("panelVisible", false);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    //@ts-expect-error: Bad types define
    window.addEventListener("resize", setWidth);
    const width = (container?.clientHeight - 40) / 2.18;
    const state = visible ? "translateX(0%)" : "translateX(120%)";
    setWidth(width);
    setTranslateX(state);
  }, [container?.clientHeight, visible]);

  return (
    <Drawer
      className="right-drawer"
      placement="right"
      getContainer={container}
      visible={visible}
      mask={false}
      closable={false}
      onClose={onClose}
      style={{
        transform: translateX,
        width: `${width}px`,
        height: "calc(100% - 40px)",
        margin: "20px",
        backgroundColor: "transparent",
        backgroundImage: `url(./icons/ui/bac.png)`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
      bodyStyle={{
        padding: "0px",
        margin: "3%",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "transparent"
      }}
    ></Drawer>
  );
};
