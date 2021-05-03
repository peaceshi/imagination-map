import { load } from "@loaders.gl/core";
import { ImageLoader } from "@loaders.gl/images";
import { useEffect, useState } from "react";
import type { DimensionsType } from "./Interface";

const fetchDziMeta = async (dziSource: string): Promise<{ height: number; width: number; tileSize: number }> => {
  const response = await fetch(dziSource);
  const xmlText = await response.text();
  const dziXML = new DOMParser().parseFromString(xmlText, "text/xml");
  const height = Number(dziXML.querySelectorAll("Size")[0].getAttribute("Height".valueOf())) * 2;
  const width = Number(dziXML.querySelectorAll("Size")[0].getAttribute("Width".valueOf())) * 2;
  const tileSize = Number(dziXML.querySelectorAll("Image")[0].getAttribute("TileSize".valueOf()));
  return { height, width, tileSize };
};
export const fetchTileData = async (
  { x, y, z }: { x: number; y: number; z: number },
  ROOT_URL: string
): Promise<[]> => {
  return (await load(`${ROOT_URL}/map.image_files/${14 + z}/${x}_${y}.png`, ImageLoader, {
    worker: true,
    reuseWorkers: true
  })) as Promise<[]>;
};

export const useDimensions = (dziSource: string): DimensionsType => {
  const [dimensions, setDimensions] = useState<DimensionsType>(() => {
    return {
      height: 0,
      width: 0,
      tileSize: 0
    };
  });
  useEffect(() => {
    void (async () => {
      const dziXMLData = await fetchDziMeta(dziSource);
      setDimensions(dziXMLData);
    })();
  }, [dziSource]);
  return dimensions;
};
