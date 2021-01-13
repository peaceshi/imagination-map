import React, { ReactElement } from "react";
import { useReference, useVisible } from "./hooks";
import { Drawer } from "antd";

export const DetailsPanel = (): ReactElement => {
  const { container } = useReference("map-container");
  const { visible, onClose } = useVisible("panelVisable", false);
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
    ></Drawer>
  );
};
