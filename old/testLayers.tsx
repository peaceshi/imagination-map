/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState, useCallback, ReactElement } from "react";
import DeckGL from "@deck.gl/react";
import { MapController, Viewport } from "deck.gl";
import { TextLayer, BitmapLayer, IconLayer, LineLayer } from "@deck.gl/layers";
import { multiLayersConstructor, singleLayerConstructor } from "./LayerConstructors";
import {
  baseMapProperties,
  baseIconProperties,
  coordinateProperties,
  textProperties,
  dataIconProperties
} from "./Properties";
import { useStore, mutate } from "stook";
import produce from "immer";
import { useVisible } from "./hooks";
// import { DrawLineStringMode, DrawPolygonMode } from "@nebula.gl/edit-modes";
// import { EditableGeoJsonLayer } from "@nebula.gl/layers";
// import Draggable from "react-draggable"; // The default

const baseMapLayers = multiLayersConstructor(BitmapLayer, baseMapProperties);
const baseIconLayers = multiLayersConstructor(IconLayer, baseIconProperties);
const coordinateLayers = multiLayersConstructor(LineLayer, coordinateProperties);
let viewportTextLayer = singleLayerConstructor(TextLayer, textProperties[0]);
let viewportTextLayer2 = singleLayerConstructor(TextLayer, textProperties[1]);
const iconLayer = singleLayerConstructor(IconLayer, dataIconProperties[0]);

const baseLayer = [
  ...baseMapLayers,
  ...coordinateLayers,
  iconLayer,
  ...baseIconLayers,
  viewportTextLayer,
  viewportTextLayer2
];
//layer props cannot be changed after creation
//create a new instance of the layer to update a prop

export const viewport = new Viewport({
  id: "mainMapView",
  longitude: 0,
  latitude: 0,
  zoom: 13.5,
  maxZoom: 20,
  minZoom: 12.5,
  pitch: 0,
  bearing: 0
});
const controller = {
  type: MapController,
  doubleClickZoom: false,
  inertia: true
};
export const MapLayers = (): ReactElement => {
  const [viewState, setViewState] = useState(viewport);
  const [layers, setLayers] = useState(baseLayer);
  // const [buttonState] = useStore("buttonState");
  const [textVisibility, setTextVisibility] = useState(textProperties);
  const [buttonState, setButtonState] = useStore("buttonState", false);
  const { isOpen, onClose } = useVisible("panelVisible");
  const buttonOnClick = useCallback(() => {
    console.log("buttonState:", !buttonState);
    setButtonState(!buttonState);
    const nextState = produce(textVisibility, (draftState) => {
      if (buttonState) {
        draftState[0].visible = false;
        draftState[1].visible = false;
      } else {
        draftState[0].visible = true;
        draftState[1].visible = true;
      }
    });
    setTextVisibility(nextState);
    viewportTextLayer = singleLayerConstructor(TextLayer, textVisibility[0]);
    viewportTextLayer2 = singleLayerConstructor(TextLayer, textVisibility[1]);
    setLayers([
      ...baseMapLayers,
      ...coordinateLayers,
      iconLayer,
      ...baseIconLayers,
      viewportTextLayer,
      viewportTextLayer2
    ]);
  }, [buttonState, setButtonState, textVisibility]);
  const onClick = useCallback(
    (info) => {
      if (info?.layer?.id == "icon-layer-0") {
        // console.log(info?.layer?.id);
        isOpen();
      } else {
        onClose();
      }
      // console.log(info);
    },
    [isOpen, onClose]
  );
  const [hoverInfo, setHoverInfo] = useState();
  const onLoad = useCallback(() => {
    console.log("onLoad"); ////@ts-expect-error: Bad types define
    setLayers(layers);
    // mutate("loadingState", false);
  }, [layers]);
  const onBeforeRender = useCallback(() => {
    // console.log("onBeforeRender:", buttonState);
  }, []);
  const onHover = useCallback((hoverInfo, event) => {
    // console.log("Hovered:", hoverInfo, [event.offSetX, event.offSetY]);
    setHoverInfo(hoverInfo);
  }, []);
  const onViewStateChange = useCallback(
    ({ viewState, interactionState }) => {
      if (interactionState.isZooming) {
        // console.log("zoomed:", viewState.zoom);
        viewState.minZoom = 12.5;
        viewState.maxZoom = 18;
        viewState.transitionDuration = 300;
      }
      if (viewState.zoom > 15.3) {
        // console.log("zoom >= 15:", viewState.zoom);
        const nextState = produce(textVisibility, (draftState) => {
          draftState[0].visible = true;
          draftState[1].visible = false;
        });
        setTextVisibility(nextState);
      } else if (viewState.zoom < 14.7) {
        // console.log("zoom<= 15:", viewState.zoom);
        const nextState = produce(textVisibility, (draftState) => {
          draftState[0].visible = false;
          draftState[1].visible = true;
        });
        setTextVisibility(nextState);
      }
      // console.log(baseVisibilityState[0].visible);
      viewportTextLayer = singleLayerConstructor(TextLayer, textVisibility[0]);
      viewportTextLayer2 = singleLayerConstructor(TextLayer, textVisibility[1]);
      setLayers([
        ...baseMapLayers,
        ...coordinateLayers,
        iconLayer,
        ...baseIconLayers,
        viewportTextLayer,
        viewportTextLayer2
      ]);
      setViewState(viewState);
    },
    [textVisibility]
  );
  // const [features, setFeatures] = React.useState({
  //   type: "FeatureCollection",
  //   features: []
  // });
  // const [mode, setMode] = React.useState(() => DrawPolygonMode);
  // const [selectedFeatureIndexes] = React.useState([]);

  // const layer = new EditableGeoJsonLayer({
  //   // id: "geojson-layer",
  //   data: features,
  //   mode,
  //   selectedFeatureIndexes,

  //   onEdit: ({ updatedData }) => {
  //     setFeatures(updatedData);
  //   },
  //   onHover: (info) => setHoverInfo(info)
  // });

  return (
    <DeckGL
      viewState={viewState}
      onViewStateChange={onViewStateChange}
      controller={controller}
      layers={layers}
      onLoad={onLoad}
      onBeforeRender={onBeforeRender}
      onClick={onClick}
      // onAfterRender={() => mutate("loadingState", false)}
      // getCursor={layer.getCursor.bind(layer)}
      // onHover={onHover}
      // layerFilter={layerFilter}
      // getTooltip={({ object, x, y }) => object && `${object.x_pos}\n${object.y_pos}` && console.log(x, y)}
      // getTooltip={({ object, x, y }) =>
      //   object && {
      //     html: `<Button onClick={onClick}></Button>`,
      //     style: {
      //       backgroundColor: "#f00",
      //       fontSize: "0.8em"
      //     }
      //   }
      // }
    >
      {/* <div style={{ position: "absolute", top: 0, right: 0, color: "white" }}>
          <button
            onClick={() => setMode(() => DrawLineStringMode)}
            style={{ background: mode === DrawLineStringMode ? "#3090e0" : null }}
          >
            Line
          </button>
          <button
            onClick={() => setMode(() => DrawPolygonMode)}
            style={{ background: mode === DrawPolygonMode ? "#3090e0" : null }}
          >
            Polygon
          </button>
        </div>
        <div style={{ position: "absolute", zIndex: 1, pointerEvents: "none" }}>{[hoverInfo].toString()}</div> */}
      {/* <Button onClick={buttonOnClick}>show/hide</Button> */}
    </DeckGL>
  );
};
