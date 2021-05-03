import type { WidthUnits } from "@deck.gl/core/lib/layer";

export interface MapLayerPropertiesType {
  autoHighlight: boolean;
  onTilesLoad: undefined;
  showBorder: boolean;
}
export interface DimensionsType {
  height: number;
  width: number;
  tileSize: number;
}
export interface Bbox {
  left: number;
  bottom: number;
  right: number;
  top: number;
}
export interface SubLayersPropertiesType {
  id: string;
  x: number;
  y: number;
  z: number;
  tile: {
    bbox: Bbox;
  };
  data: string;
}
export interface LayersVisibleType {
  textLayer1?: boolean;
  textLayer2?: boolean;
  textLayer3?: boolean;
}
export interface TextDataType {
  text: string;
  position: [number, number];
}
export interface TextLayerPropertiesType {
  data?: TextDataType[];
  characterSet: string[];
  fontFamily: string;
  fontWeight: string;
  sizeUnits: WidthUnits;
  pickable: boolean;
  getText: (data: TextDataType) => string;
  getPosition: (data: TextDataType) => [number, number];
  getColor: [number, number, number];
}
