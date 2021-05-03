import type { DimensionsType, SubLayersPropertiesType, Bbox } from "./Interface";
import { TileLayer } from "@deck.gl/geo-layers";
import { BitmapLayer } from "@deck.gl/layers";
import { clamp } from "@math.gl/core";
import { useMemo, useState } from "react";
export const TileLayerLoader = (ROOT_URL: string, dimensions: DimensionsType): Array<unknown> => [
  dimensions &&
    new TileLayer({
      pickable: false,
      tileSize: dimensions.tileSize,
      minZoom: -6,
      maxZoom: 0,
      maxCacheSize: 10240,
      refinementStrategy: "best-available",
      extent: [0, 0, dimensions.width, dimensions.height],
      getTileData: async ({ x, y, z }) => (await import("./DataLoader")).fetchTileData({ x, y, z }, ROOT_URL),
      renderSubLayers: (properties: SubLayersPropertiesType) => {
        const { left, bottom, right, top } = properties.tile.bbox;
        const { width, height } = dimensions;
        const { id, data } = properties;
        const bbox = {
          left: clamp(left, 0, width) as number,
          bottom: clamp(bottom, 0, height) as number,
          right: clamp(right, 0, width) as number,
          top: clamp(top, 0, height) as number
        };
        return [
          new BitmapLayer({
            id: id,
            image: data,
            bounds: [bbox.left, bbox.bottom, bbox.right, bbox.top]
          })
        ];
      }
    })
];
export const useTileLayer = ({
  ROOT_URL,
  dimensions
}: {
  ROOT_URL: string;
  dimensions: DimensionsType;
}): Array<unknown> => {
  const [tileLayer, setTileLayer] = useState<unknown[]>([]);
  useMemo(() => {
    setTileLayer([
      dimensions &&
        new TileLayer({
          pickable: false,
          tileSize: dimensions.tileSize,
          minZoom: -6,
          maxZoom: 0,
          maxCacheSize: 10240,
          refinementStrategy: "best-available",
          extent: [0, 0, dimensions.width, dimensions.height],
          getTileData: async ({ x, y, z }) => (await import("./DataLoader")).fetchTileData({ x, y, z }, ROOT_URL),
          renderSubLayers: (properties: SubLayersPropertiesType) => {
            const { left, bottom, right, top } = properties.tile.bbox;
            const { width, height } = dimensions;
            const { id, data } = properties;
            const bbox = {
              left: clamp(left, 0, width) as number,
              bottom: clamp(bottom, 0, height) as number,
              right: clamp(right, 0, width) as number,
              top: clamp(top, 0, height) as number
            };
            return [
              new BitmapLayer({
                id: id,
                image: data,
                bounds: [bbox.left, bbox.bottom, bbox.right, bbox.top]
              })
            ];
          }
        })
    ]);
  }, [ROOT_URL, dimensions]);
  return tileLayer;
};
