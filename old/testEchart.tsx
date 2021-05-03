import React, { useState, useEffect } from "react";
import ReactECharts from "echarts-for-react";
import cloneDeep from "lodash.clonedeep";
//@ts-expect-error: Bad types define
const Page: React.FC = (properties: { metrics: unknown }) => {
  const metrics = properties.metrics;
  const DEFAULT_OPTION = {
    visualMap: {
      show: false,
      min: 0,
      max: 60,
      color: [
        "#177CB0",
        "#057748",
        "#0C8918",
        "#0AA344",
        "#0EB83A",
        "#00E500",
        "#9ED900",
        "#AFDD22",
        "#C9DD22",
        "#FAFF72",
        "#FFF143",
        "#F0C239",
        "#FFA400",
        "#FF8936",
        "#FF7500",
        "#FF4C00",
        "#FF2121",
        "#FF2D51",
        "#F00056",
        "#F20C00",
        "#BE002F"
      ]
    },
    xAxis: {
      type: "category",
      boundaryGap: true,
      data: (function () {
        let now = new Date();
        const res = [];
        let length_ = 50;
        while (length_--) {
          res.unshift(now.toLocaleTimeString().replace(/^\D*/, "")); //@ts-expect-error: Bad types define
          now = new Date(now - 2000);
        }
        return res;
      })()
    },

    yAxis: {
      type: "value",
      scale: true,
      name: "FPS",
      max: 60,
      min: 0,
      boundaryGap: [0, 1]
    },
    series: {
      name: "FPS",
      type: "line",
      data: (function () {
        const res = [];
        let length_ = 0;
        while (length_ < 50) {
          res.push(null);
          length_++;
        }
        return res;
      })()
    }
  };
  const [option, setOption] = useState(DEFAULT_OPTION);

  function fetchNewData() {
    const axisData = new Date().toLocaleTimeString().replace(/^\D*/, "");
    const newOption = cloneDeep(option); // immutable
    const data = newOption.series.data;
    data.shift(); //@ts-expect-error: Bad types define
    data.push(Math.round(metrics?.fps));
    newOption.xAxis.data.shift();
    newOption.xAxis.data.push(axisData);
    setOption(newOption);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      fetchNewData();
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <ReactECharts
      option={option}
      style={{
        position: "absolute",
        top: 100,
        left: 0,
        height: 300,
        width: 200,
        backgroundColor: "#0000005a"
      }}
      theme="light"
      lazyUpdate={true}
    />
  );
};

export default Page;
