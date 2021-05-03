/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable unicorn/no-null */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// import { RenderMetrics } from "./testRenderInfo";
import { MapController } from "@deck.gl/core";
import { TileLayer } from "@deck.gl/geo-layers";
import { BitmapLayer } from "@deck.gl/layers";
import { load } from "@loaders.gl/core";
import { ImageLoader } from "@loaders.gl/images";
import { COORDINATE_SYSTEM, DeckGL, LineLayer, OrthographicView, PathLayer } from "deck.gl";
import { clamp } from "math.gl";
import React, { useCallback, useEffect, useState } from "react";

const mapCenter = {
  deltaX: 6144,
  deltaY: 6144
};
const INITIAL_VIEW_STATE = {
  target: [mapCenter.deltaX, mapCenter.deltaY, 0],
  zoom: -4,
  maxZoom: 0,
  minZoom: -4
};
const ROOT_URL = "/tiles";
const dziSource = `${ROOT_URL}/map.image.dzi`;
//// @ts-expect-error: Bad types define
// function getTooltip({ tile, bitmap }) {
//   if (tile && bitmap) {
//     return `\
//     tile: x: ${tile.x}, y: ${tile.y}, z: ${tile.z}
//     (${bitmap.pixel[0]},${bitmap.pixel[1]}) in ${bitmap.size.width}x${bitmap.size.height}`;
//   }
//   return;
// }
const controller = {
  type: MapController,
  doubleClickZoom: false,
  inertia: true
};

const fetchMeta = async (dziSource: string) => {
  const response = await fetch(dziSource);
  const xmlText = await response.text();
  const dziXML = new DOMParser().parseFromString(xmlText, "text/xml"); //@ts-expect-error: Bad types define
  const height = Number(dziXML.querySelectorAll("Size")[0].attributes.Height.value); //@ts-expect-error: Bad types define
  const width = Number(dziXML.querySelectorAll("Size")[0].attributes.Width.value); //@ts-expect-error: Bad types define
  const tileSize = Number(dziXML.querySelectorAll("Image")[0].attributes.TileSize.value);
  return { height, width, tileSize };
};
export function App({ autoHighlight = false, onTilesLoad = null, showBorder = false }) {
  const [viewState, setViewState] = useState(INITIAL_VIEW_STATE);
  const [dimensions, setDimensions] = useState();
  const [metrics, setMetrics] = useState();

  useEffect(() => {
    void (async () => {
      const dziXMLData = await fetchMeta(dziSource);
      setDimensions({
        //@ts-expect-error: Bad types define
        height: dziXMLData.height,
        width: dziXMLData.width,
        tileSize: dziXMLData.tileSize
      });
    })();
  }, []);

  // useEffect(() => {
  //   const timer = setInterval(() => {}, 2000);
  //   return () => clearInterval(timer);
  // }, []);
  const onMetrics = useCallback((metrics) => {
    setMetrics(metrics);
  }, []);
  const onViewStateChange = useCallback(({ viewState, interactionState }) => {
    if (interactionState.isZooming) {
      // console.log("zoomed:", viewState.zoom);
      viewState.transitionDuration = 300;
    }
    setViewState(viewState);
  }, []);
  const tileLayer = [
    dimensions &&
      new TileLayer({
        pickable: false, //@ts-expect-error: Bad types define
        tileSize: dimensions.tileSize,
        minZoom: -3,
        maxZoom: 0,
        maxCacheSize: 10240,
        refinementStrategy: "best-available",
        coordinateSystem: COORDINATE_SYSTEM.CARTESIAN, //@ts-expect-error: Bad types define
        extent: [0, 0, dimensions.width, dimensions.height],
        getTileData: async ({ x, y, z }) => {
          return await load(`${ROOT_URL}/map.image_files/${13 + z}/${x}_${y}.png`, ImageLoader);
        },
        //@ts-expect-error: Bad types define
        onViewportLoad: onTilesLoad,
        //@ts-expect-error: Bad types define
        renderSubLayers: (properties) => {
          const {
            bbox: { left, bottom, right, top }
          } = properties.tile; //@ts-expect-error: Bad types define
          const { width, height } = dimensions;

          return [
            new BitmapLayer(properties, {
              //@ts-expect-error: Bad types define
              data: null,
              image: properties.data,
              bounds: [clamp(left, 0, width), clamp(bottom, 0, height), clamp(right, 0, width), clamp(top, 0, height)]
            }),
            showBorder &&
              new PathLayer({
                id: `${properties.id}-border`,
                visible: false,
                data: [
                  [
                    [left, top],
                    [left, bottom],
                    [bottom, bottom],
                    [bottom, top],
                    [left, top],
                    [right, top],
                    [right, top],
                    [right, bottom]
                  ]
                ], //@ts-expect-error: Bad types define
                getPath: (d) => d,
                getColor: [255, 255, 255],
                widthMinPixels: 1
              })
          ];
        }
      }),
    dimensions &&
      new LineLayer({
        id: "coordinateCenterLineLayers",
        visible: false,
        data: [
          {
            sourcePosition: [0, 0], //@ts-expect-error: Bad types define
            targetPosition: [0, dimensions.height],
            name: "latitudeCenter",
            color: [0, 255, 255]
          },
          {
            sourcePosition: [0, 0], //@ts-expect-error: Bad types define
            targetPosition: [dimensions.width, 0],
            name: "latitudeCenter",
            color: [0, 255, 255]
          },
          {
            sourcePosition: [0, mapCenter.deltaY], //@ts-expect-error: Bad types define
            targetPosition: [dimensions.width, mapCenter.deltaY],
            name: "longitudeCenter",
            color: [0, 255, 255]
          },
          {
            sourcePosition: [mapCenter.deltaX, 0], //@ts-expect-error: Bad types define
            targetPosition: [mapCenter.deltaX, dimensions.height],
            name: "latitudeCenter",
            color: [0, 255, 255]
          }
        ],
        getWidth: 1,
        pickable: true, //@ts-expect-error: Bad types define
        getColor: (d) => d.color,
        autoHighlight: true,
        highlightColor: [0, 255, 255]
      })
  ];

  return (
    <>
      <DeckGL
        views={[new OrthographicView({ id: "ortho", controller: true })]} //@ts-expect-error: Bad types define
        layers={[tileLayer]}
        viewState={viewState}
        controller={true} //@ts-expect-error: Bad types define
        // getTooltip={getTooltip}
        // style={{ backgroundColor: "#000000" }}
        // _onMetrics={onMetrics}
        onViewStateChange={onViewStateChange}
      />
      {/* <RenderMetrics metrics={metrics} /> */}
    </>
  );
}
