import { TextLayer } from "@deck.gl/layers";
import { Text_Data_1, Text_Data_2, Text_Data_3, UTF16CharacterSets } from "./TextData";
import type { LayersVisibleType, TextLayerPropertiesType, TextDataType } from "./Interface";
import { useMemo, useState } from "react";

const TextLayerProperties: TextLayerPropertiesType = {
  characterSet: UTF16CharacterSets,
  fontFamily: "system-ui",
  fontWeight: "bold",
  sizeUnits: "meters",
  pickable: false,
  getText: (d: TextDataType) => d.text,
  getPosition: (d: TextDataType) => d.position,
  getColor: [236, 236, 236]
};
export const TextLayerLoader = (layersVisible?: LayersVisibleType): Array<unknown> => [
  new TextLayer(TextLayerProperties, {
    id: `text-layer-1`,
    data: Text_Data_1,
    getSize: 350,
    visible: layersVisible?.textLayer1
  }),
  new TextLayer(TextLayerProperties, {
    id: `text-layer-2`,
    data: Text_Data_2,
    getSize: 120,
    visible: layersVisible?.textLayer2
  }),
  new TextLayer(TextLayerProperties, {
    id: `text-layer-3`,
    data: Text_Data_3,
    getSize: 72,
    visible: layersVisible?.textLayer3
  })
];

export const useTextLayer = (layersVisible?: LayersVisibleType): Array<unknown> => {
  const [textLayer, setTextLayer] = useState<unknown[]>([]);
  useMemo(() => {
    setTextLayer([
      new TextLayer(TextLayerProperties, {
        id: `text-layer-1`,
        data: Text_Data_1,
        getSize: 350,
        visible: layersVisible?.textLayer1
      }),
      new TextLayer(TextLayerProperties, {
        id: `text-layer-2`,
        data: Text_Data_2,
        getSize: 120,
        visible: layersVisible?.textLayer2
      }),
      new TextLayer(TextLayerProperties, {
        id: `text-layer-3`,
        data: Text_Data_3,
        getSize: 72,
        visible: layersVisible?.textLayer3
      })
    ]);
  }, [layersVisible?.textLayer1, layersVisible?.textLayer2, layersVisible?.textLayer3]);
  return textLayer;
};
