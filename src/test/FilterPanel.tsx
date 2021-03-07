import React, { ReactElement, useEffect, useState } from "react";
import { useToggle } from "ahooks";
import { Drawer, Button } from "antd";

import { SwitchButton, TreasureFold } from "./Components";
import { useStore } from "stook";
import { useFontSize, usePanelWidth } from "./hooks";

export const FilterPanel = (): ReactElement => {
  const [visible, { toggle }] = useToggle(false);
  const [container] = useStore<HTMLDivElement>("map-container");
  const [translateX, setTranslateX] = useState("translateX(-100%)");
  const [translateX1, setTranslateX1] = useState("translateX(0%)");
  const { width } = usePanelWidth();
  const { fontSize } = useFontSize();
  useEffect(() => {
    //@ts-expect-error: Bad types define
    window.addEventListener("resize", setTranslateX1);
    const deltaX = width + 40;
    const state = visible ? "translateX(0%)" : "translateX(-150%)";
    const state1 = visible ? `translateX(${deltaX}px)` : `translateX(0%)`;
    setTranslateX(state);
    setTranslateX1(state1);
  }, [visible, width]);
  const transformState = (toggleState?: boolean) => {
    toggle(toggleState);
  };
  return (
    <>
      <Drawer
        className="left-drawer"
        placement="left"
        getContainer={container}
        visible={visible}
        mask={false}
        closable={false}
        onClose={() => transformState(false)}
        style={{
          transform: translateX,
          width: `${width}px`,
          height: "calc(100% - 40px)",
          position: "absolute",
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
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            marginBlock: "3%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "flex-start",
            alignItems: "center",
            flex: "0 1 8.5%"
          }}
        >
          <div
            style={{
              height: "100%",
              position: "relative",
              flex: "0 1 29%",
              marginInlineStart: "3%",
              backgroundImage: "url('./icons/ui/asas.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center"
            }}
          />
          <div
            style={{
              height: "100%",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              flexWrap: "nowrap",
              justifyContent: "space-between",
              alignItems: "center",
              flex: "1 1 auto"
            }}
          >
            <div
              style={{
                height: "30%",
                width: "100%",
                position: "relative",
                flex: "0 1 auto",
                alignSelf: "flex-start",
                color: "#D7D2B8",
                fontSize: `${fontSize}px`
              }}
            >
              注册/登录
            </div>
            <div
              style={{
                height: "30%",
                width: "100%",
                position: "relative",
                flex: "0 1 auto",
                alignSelf: "flex-end",
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <div
                style={{
                  height: "100%",
                  flex: "1 1 auto",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "nowrap",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <div
                  style={{
                    height: "100%",
                    flex: "0 1 20%",
                    alignSelf: "flex-start",
                    backgroundImage: "url('./icons/ui/icon_cloud.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain"
                  }}
                />
                <div
                  style={{
                    height: "100%",
                    flex: "1 1 auto",
                    alignSelf: "center",
                    marginBottom: "3%",
                    color: "#D7D2B8",
                    fontSize: `${fontSize}px`
                  }}
                >
                  数据云同步
                </div>
              </div>
              <div
                style={{
                  height: "100%",
                  flex: "1 1 auto",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "nowrap",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <div
                  style={{
                    height: "100%",
                    flex: "0 1 20%",
                    alignSelf: "flex-start",
                    backgroundImage: "url('./icons/ui/icon_fankui.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain"
                  }}
                />
                <div
                  style={{
                    height: "100%",
                    flex: "1 1 auto",
                    alignSelf: "center",
                    marginBottom: "3%",
                    color: "#D7D2B8",
                    fontSize: `${fontSize}px`
                  }}
                >
                  反馈信息
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            flex: "0 1 22%",
            width: "100%",
            backgroundImage: "url('./icons/ui/filter_fold.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center"
          }}
        >
          <div
            style={{
              position: "relative",
              width: "94%",
              marginInline: "3%",
              marginTop: "6%",
              display: "flex",
              flex: "0 1 15%",
              flexDirection: "row",
              flexWrap: "nowrap",
              justifyContent: "flex-start",
              alignItems: "center"
            }}
          >
            <div
              style={{
                position: "relative",
                flex: "0 1 10%",
                height: "100%",
                alignSelf: "flex-start",
                backgroundImage: "url('./icons/ui/Treasure_icon.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center"
              }}
            />
            <div
              style={{
                position: "relative",
                flex: "0 1 40%",
                height: "100%",
                alignSelf: "flex-start",
                color: "#817472",
                fontSize: `${fontSize}px`
              }}
            >
              项目筛选
            </div>
            <SwitchButton></SwitchButton>
            <TreasureFold></TreasureFold>
          </div>
          <div
            style={{
              position: "relative",
              flex: "1 1 auto",
              width: "94%",
              marginInline: "3%",
              marginBottom: "3.5%",
              backgroundImage: "url('./icons/ui/bac_filter.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center"
            }}
          />
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: "1 1 auto",
            width: "100%",
            backgroundImage: "url('./icons/ui/filter_bac.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%"
          }}
        >
          {/* <FilterTab></FilterTab> */}
          <div
            style={{
              position: "relative",
              flex: "5 1 auto",
              width: "94%",
              margin: "3%",
              backgroundImage: "url('./icons/ui/bac_filter_1.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%"
            }}
          />
        </div>
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
