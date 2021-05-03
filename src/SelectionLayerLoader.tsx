import { GeoJsonEditMode, ViewMode } from "@nebula.gl/edit-modes";
import { SelectionLayer } from "@nebula.gl/layers";
import { SELECTION_TYPE } from "nebula.gl";
import { useMemo, useState } from "react";

type selectedFeatureIndexes = number[];

interface SelectionLayerProperties {
  mode: typeof ViewMode;
  setSelectedFeatureIndexes(argument0: selectedFeatureIndexes): void;
}

export const SelectionLayerLoader = ({ mode, setSelectedFeatureIndexes }: SelectionLayerProperties): SelectionLayer =>
  new SelectionLayer({
    id: "selection",
    // @ts-expect-error: Bad types define
    selectionType: mode === GeoJsonEditMode ? SELECTION_TYPE.RECTANGLE : SELECTION_TYPE.NONE,
    // @ts-expect-error: Bad types define
    onSelect: ({ pickingInfos }) => {
      // @ts-expect-error: Bad types define
      setSelectedFeatureIndexes(pickingInfos.map((pi) => pi.index));
    },
    layerIds: ["geojson-layer"],
    _subLayerProps: {
      getTentativeFillColor: () => [255, 0, 255, 100],
      getTentativeLineColor: () => [0, 0, 255, 100],
      getTentativeLineDashArray: () => [0, 0],
      lineWidthMinPixels: 3
    }
  });

export const useSelectionLayer = ({ mode, setSelectedFeatureIndexes }: SelectionLayerProperties): SelectionLayer => {
  const [selectionLayer, setSelectionLayer] = useState<SelectionLayer>();
  useMemo(() => {
    setSelectionLayer(
      new SelectionLayer({
        id: "selection",
        // @ts-expect-error: Bad types define
        selectionType: mode === GeoJsonEditMode ? SELECTION_TYPE.RECTANGLE : SELECTION_TYPE.NONE,
        // @ts-expect-error: Bad types define
        onSelect: ({ pickingInfos }) => {
          // @ts-expect-error: Bad types define
          setSelectedFeatureIndexes(pickingInfos.map((pi) => pi.index));
        },
        layerIds: ["geojson-layer"],
        _subLayerProps: {
          getTentativeFillColor: () => [255, 0, 255, 100],
          getTentativeLineColor: () => [0, 0, 255, 100],
          getTentativeLineDashArray: () => [0, 0],
          lineWidthMinPixels: 3
        }
      })
    );
  }, [mode, setSelectedFeatureIndexes]);
  // @ts-expect-error: Bad types define
  return selectionLayer;
};
