import { OrthographicController, OrthographicView, PostProcessEffect } from "@deck.gl/core";
import { DeckGL } from "@deck.gl/react";
import { vignette } from "@luma.gl/shadertools";
import { AnyGeoJson, ViewMode } from "@nebula.gl/edit-modes";
import React, { ReactElement, useCallback, useState } from "react";
import { useDimensions } from "./DataLoader";
import type { LayersVisibleType, MapLayerPropertiesType } from "./Interface";
import { useEditableLayer, useSelectionLayer, useTextLayer, useTileLayer } from "./LayersLoader";
const EditorLayout = React.lazy(() => import("./EditorLayout"));

const postProcessEffect = new PostProcessEffect(vignette, {
  radius: 0.1,
  amount: 0.6
});

const mapCenter = {
  deltaX: 12288,
  deltaY: 12288
};
const initialViewState = {
  target: [mapCenter.deltaX, mapCenter.deltaY, 0],
  zoom: -5,
  maxZoom: 0.5,
  minZoom: -5
};
//// @ts-expect-error: Bad types define
// function getTooltip({ tile, bitmap }) {
//   if (tile && bitmap) {
//     return `\
//       tile: x: ${tile.x}, y: ${tile.y}, z: ${tile.z}
//       (${bitmap.pixel[0]},${bitmap.pixel[1]}) in ${bitmap.size.width}x${bitmap.size.height}
//       (${tile.bbox.left},${tile.bbox.top})
//       (${tile.bbox.right},${tile.bbox.bottom})
//       `;
//   }
//   return;
// }
const controller = {
  type: OrthographicController,
  doubleClickZoom: false,
  inertia: true
};

const ROOT_URL = `./tiles`;
const dziSource = `${ROOT_URL}/map.image.dzi`;

const MapLayers = (properties: MapLayerPropertiesType): ReactElement => {
  const [layersVisible, setLayersVisible] = useState<LayersVisibleType>();

  // const dimensions = useDimensions(dziSource);
  const dimensions = useDimensions(dziSource);
  const tileLayer = useTileLayer({ ROOT_URL, dimensions });
  const textLayer = useTextLayer(layersVisible);

  const [mode, setMode] = useState(() => ViewMode);
  const [selectedFeatureIndexes, setSelectedFeatureIndexes] = useState([0]);

  const [geojson, setGeojson] = useState<AnyGeoJson>({
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [13927.384615384617, 9039.999999999998]
        }
      }
    ]
  });
  const editableLayer = useEditableLayer({
    geojson,
    mode,
    selectedFeatureIndexes,
    setGeojson
  });
  const selectionLayer = useSelectionLayer({ mode, setSelectedFeatureIndexes });
  // const [metrics, setMetrics] = useState();
  // const { autoHighlight, onTilesLoad, showBorder } = properties;
  // const onMetrics = useCallback((metrics) => {
  //   setMetrics(metrics);
  // }, []);

  const onViewStateChange = useCallback(({ viewState, interactionState }) => {
    if (interactionState.isZooming) {
      viewState.transitionDuration = 300;
    }
    if (viewState.zoom < -3) {
      setLayersVisible({ textLayer1: true });
    }
    if (viewState.zoom > -3) {
      setLayersVisible({ textLayer2: true });
    }
    if (viewState.zoom > -2) {
      setLayersVisible({ textLayer3: true });
    }
  }, []);

  const getCursor = () => {
    if (editableLayer !== undefined) {
      return editableLayer.getCursor.bind(editableLayer);
    }
  };
  return (
    <>
      <DeckGL
        views={[new OrthographicView({ id: "orthographic-2d", controller: true })]}
        //@ts-expect-error: Bad types define
        layers={[...tileLayer, textLayer, editableLayer, selectionLayer]}
        initialViewState={initialViewState}
        controller={controller}
        ////@ts-expect-error: Bad types define
        // getTooltip={getTooltip}
        style={{ backgroundColor: "#000000" }}
        effects={[postProcessEffect]}
        // _onMetrics={onMetrics}
        onViewStateChange={onViewStateChange}
        //@ts-expect-error: Bad types define
        getCursor={getCursor}
      />
      {/* <RenderMetrics metrics={metrics} /> */}
      <React.Suspense fallback={true}>
        <EditorLayout mode={mode} setMode={setMode} />
      </React.Suspense>
    </>
  );
};
export default MapLayers;
