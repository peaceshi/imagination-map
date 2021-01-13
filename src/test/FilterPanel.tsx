import React, { ReactElement, useEffect, useMemo, useRef, useState } from "react";
import { useSelections, useToggle } from "ahooks";
import { Checkbox, Col, Row, Switch, Image, Drawer, Menu, Button, Space } from "antd";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined
} from "@ant-design/icons";
import { BackgroundImage, FilterTab } from "./Components";

// import Drawer from "rc-drawer";

const { SubMenu } = Menu;
export const FilterPanel = (): ReactElement => {
  const [hideOdd, setHideOdd] = useState(false);
  const [visible, { toggle }] = useToggle(false);
  const [container, setContainer] = useState<HTMLDivElement>();
  const [translateX, setTranslateX] = useState("translateX(-100%)");
  const [translateX1, setTranslateX1] = useState("translateX(0%)");
  const list = useMemo(() => {
    if (hideOdd) {
      return [2, 4, 6, 8];
    }
    return [1, 2, 3, 4, 5, 6, 7, 8];
  }, [hideOdd]);
  const setReference = (container: HTMLDivElement) => {
    setContainer(container);
  };
  useEffect(() => {
    const state = visible ? "translateX(0%)" : "translateX(-100%)";
    const state1 = visible ? "translateX(296px)" : "translateX(0%)";
    setTranslateX(state);
    setTranslateX1(state1);
  }, [visible]);
  const transformState = (toggleState?: boolean) => {
    toggle(toggleState);
  };
  //   const { selected, allSelected, isSelected, toggle, toggleAll, partiallySelected } = useSelections(list, [1]);
  return (
    <>
      <div ref={setReference} id="container" style={{ position: "absolute" }}>
        <Drawer
          getContainer={container}
          placement="left"
          visible={visible}
          mask={true}
          style={{
            transform: translateX,
            width: "256px",
            height: "calc(100% - 40px)",
            position: "absolute",
            display: "flex",
            margin: "20px"
          }}
          bodyStyle={{ padding: "0px", width: "256px" }}
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
            <div style={{ position: "absolute", width: "100%", height: "10%", backgroundColor: "cadetblue" }}></div>
            <div
              style={{
                position: "absolute",
                top: "10%",
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
          <BackgroundImage></BackgroundImage>
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
      </div>
    </>
  );
};
