/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { COORDINATE_SYSTEM } from "deck.gl";
import type { RGBAColor } from "@deck.gl/core/utils/color";
import React from "react";
import { label, mapping, mapping2 } from "./data";

interface BaseLineData {
  sourcePosition: [number, number];
  targetPosition: [number, number];
  name?: string;
  color?: RGBAColor;
}
// interface BitmapLayerData {
//   image: string;
//   bounds: [[number, number], [number, number], [number, number], [number, number]];
//   coordinateSystem: number;
//   coordinateOrigin: [0, 0];
//   desaturate: 0;
//   transparentColor: [0, 0, 0, 0];
//   tintColor: [255, 255, 255];
// }
interface TextData {
  text: string;
  position: [number, number];
  color?: RGBAColor;
}
interface PointList {
  x_pos: number;
  y_pos: number;
}

export const ICON_MAPPING = {
  a: { x: 473, y: 569, width: 98, height: 143 },
  b: { x: 912, y: 1, width: 100, height: 142 },
  n: { x: 100, y: 201, width: 47, height: 48 }
};
export const coordinateData: Array<BaseLineData> = [
  { sourcePosition: [0, -90], targetPosition: [0, 90], name: "latitudeCenter", color: [0, 255, 255] },
  { sourcePosition: [-180, 0], targetPosition: [180, 0], name: "longitudeCenter", color: [0, 0, 0] }
];
export const TEXT_DATA = [
  {
    text: "\u{8499}\u{5FB7}\u{57CE}", //蒙德城
    position: [75, 100, 0],
    color: [255, 255, 0]
  }
];
export const TEXT_DATA2 = [
  {
    text: "\u{5760}\u{661F}\u{5C71}\u{8C37}", //坠星山谷
    position: [580, 130, 0],
    color: [255, 255, 0]
  },
  {
    text: "\u{82CD}\u{98CE}\u{9AD8}\u{5730}", //苍风高地
    position: [-210, -290, 0],
    color: [255, 255, 0]
  },
  {
    text: "\u{660E}\u{51A0}\u{5C71}\u{5730}", //明冠山地
    position: [-450, 300, 0],
    color: [255, 255, 0]
  },
  {
    text: "\u{98CE}\u{5578}\u{5C71}\u{5761}", //风啸山坡
    position: [605, -765, 0],
    color: [255, 255, 0]
  }
];
export const baseMapProperties = [
  {
    id: "baseMapLayer01",
    image: "layers/51cf05526d3392bb8af7b0a8e55c8bb4_2330082124659889173.webp",
    bounds: [
      [-749, -1299],
      [-749, 2797],
      [3347, 2797],
      [3347, -1299]
    ],
    coordinateSystem: COORDINATE_SYSTEM.METER_OFFSETS,
    coordinateOrigin: [0, 0],
    desaturate: 0,
    transparentColor: [0, 0, 0, 0],
    tintColor: [255, 255, 255]
  },
  {
    id: "baseMapLayer02",
    image: "layers/ab70261eb2bc15fd18d5af4e3d1f65c4_8595026742728073190.webp",
    bounds: [
      [-749, -5394],
      [-749, -1299],
      [3347, -1299],
      [3347, -5394]
    ],
    coordinateSystem: COORDINATE_SYSTEM.METER_OFFSETS,
    coordinateOrigin: [0, 0],
    desaturate: 0,
    transparentColor: [0, 0, 0, 0],
    tintColor: [255, 255, 255]
  },
  {
    id: "baseMapLayer03",
    image: "layers/419f239d774a765cbf42fd37c5e292f6_6899586273298013559.webp",
    bounds: [
      [-4845, -1299],
      [-4845, 2797],
      [-749, 2797],
      [-749, -1299]
    ],
    coordinateSystem: COORDINATE_SYSTEM.METER_OFFSETS,
    coordinateOrigin: [0, 0],
    desaturate: 0,
    transparentColor: [0, 0, 0, 0],
    tintColor: [255, 255, 255]
  },
  {
    id: "baseMapLayer04",
    image: "layers/274ea72af8e42aee9daae34479998e60_1798619833213420606.webp",
    bounds: [
      [-4845, -5394],
      [-4845, -1299],
      [-749, -1299],
      [-749, -5394]
    ],
    coordinateSystem: COORDINATE_SYSTEM.METER_OFFSETS,
    coordinateOrigin: [0, 0],
    desaturate: 0,
    transparentColor: [0, 0, 0, 0],
    tintColor: [255, 255, 255]
  }
];
export const baseIconProperties = [
  {
    id: "icon-layer2",
    data: "data/2.label.json",
    pickable: true,
    // iconAtlas and iconMapping are required
    // getIcon: return a string
    iconAtlas: "data/icon_3.png",
    iconMapping: ICON_MAPPING,
    getIcon: (): string => "2",

    sizeScale: 8,
    getPosition: (d: PointList): Array<number> => [d.x_pos, -d.y_pos],
    getSize: (): number => 5,
    getColor: (): Array<number> => [140, 140, 0],
    coordinateSystem: COORDINATE_SYSTEM.METER_OFFSETS,
    coordinateOrigin: [0, 0]
  },
  {
    id: "icon-layer3",
    data: "data/3.label.json",
    pickable: true,
    // iconAtlas and iconMapping are required
    // getIcon: return a string
    iconAtlas: "data/icon_3.png",
    iconMapping: ICON_MAPPING,
    getIcon: (): string => "3",

    sizeScale: 8,
    getPosition: (d: PointList): Array<number> => [d.x_pos, -d.y_pos],
    getSize: (): number => 5,
    getColor: (): Array<number> => [140, 140, 0],
    coordinateSystem: COORDINATE_SYSTEM.METER_OFFSETS,
    coordinateOrigin: [0, 0]
  },
  {
    id: "icon-layerN",
    data: "data/n.label.json",
    pickable: true,
    // iconAtlas and iconMapping are required
    // getIcon: return a string
    iconAtlas: "data/icon_1.png",
    iconMapping: ICON_MAPPING,
    getIcon: (): string => "n",

    sizeScale: 8,
    getPosition: (d: PointList): Array<number> => [d.x_pos, -d.y_pos],
    getSize: (): number => 5,
    getColor: (): Array<number> => [140, 140, 0],
    coordinateSystem: COORDINATE_SYSTEM.METER_OFFSETS,
    coordinateOrigin: [0, 0]
  }
];
export const coordinateProperties = [
  {
    id: "coordinateCenterLineLayers",
    data: coordinateData,
    getWidth: 1,
    pickable: true,
    getColor: (data: BaseLineData): RGBAColor => data.color as RGBAColor,
    autoHighlight: true,
    highlightColor: [0, 255, 255]
  }
];
export const textProperties = [
  {
    id: "viewportTextLayer1",
    data: TEXT_DATA,
    characterSet: ["\u8499", "\u5FB7", "\u57CE", "\u6500"],
    sizeUnits: "meters",
    fontFamily: "汉仪文黑",
    fontWeight: "bold",
    pickable: false,
    getSize: 58,
    getText: (d: TextData): string => d.text,
    getPosition: (d: TextData): number[] => d.position,
    getColor: [236, 236, 236],
    coordinateSystem: COORDINATE_SYSTEM.METER_OFFSETS,
    coordinateOrigin: [0, 0, 0],
    visible: false
  },
  {
    id: "viewportTextLayer2",
    data: TEXT_DATA2,
    characterSet: [
      "\u{9AD8}",
      "\u{5730}",
      "\u{57CE}",
      "\u{6500}",
      "\u{5760}",
      "\u{661F}",
      "\u{5C71}",
      "\u{8C37}",
      "\u{82CD}",
      "\u{98CE}",
      "\u{660E}",
      "\u{51A0}",
      "\u{5578}",
      "\u{5761}"
    ],
    sizeUnits: "meters",
    fontFamily: "汉仪文黑",
    fontWeight: "bold",
    pickable: true,
    getSize: 96,
    getText: (d: TextData): string => d.text,
    getPosition: (d: TextData): number[] => d.position,
    getColor: [236, 236, 236],
    coordinateSystem: COORDINATE_SYSTEM.METER_OFFSETS,
    coordinateOrigin: [0, 0, 0],
    visible: true
  }
];
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

export const dataIconProperties = [
  {
    id: "icon-layer-0",
    data: "data/point_list.json",
    pickable: true,
    // iconAtlas and iconMapping are required
    // getIcon: return a string
    iconAtlas: "data/000.png",
    iconMapping: mapping2,
    getIcon: (d: { name: string }) => {
      for (const item of label) {
        if (d.name === item.name) {
          const icon = item.icon;
          // console.log(d.name, item.name, item.icon);
          return icon;
        }
      }
    },

    sizeScale: 8,
    getPosition: (d: PointList): Array<number> => [d.x_pos, -d.y_pos],
    getSize: (): number => 5,
    getColor: (): Array<number> => [140, 140, 0],
    coordinateSystem: COORDINATE_SYSTEM.METER_OFFSETS,
    coordinateOrigin: [0, 0],
    visible: true
  }
];
export const animate = {
  fadeIn: {
    transitions: {
      getColor: {
        duration: 900,
        enter: (value: RGBAColor): RGBAColor => [value[0], value[1], value[2], 0] // fade in
      }
    }
  },
  fadeOut: {
    visible: false
  }
};
