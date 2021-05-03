import type { AnyGeoJson, EditAction, ViewMode } from "@nebula.gl/edit-modes";
import { EditableGeoJsonLayer } from "@nebula.gl/layers";
import { useMemo, useState } from "react";

interface EditableLayerProperties {
  geojson: AnyGeoJson;
  mode: typeof ViewMode;
  selectedFeatureIndexes: number[];
  setGeojson(argument0: AnyGeoJson): void;
}

export const EditableLayerLoader = ({
  geojson,
  mode,
  selectedFeatureIndexes,
  setGeojson
}: EditableLayerProperties): EditableGeoJsonLayer =>
  new EditableGeoJsonLayer({
    id: "geojson-layer", // @ts-expect-error: Bad types define
    data: geojson,
    mode: mode,
    selectedFeatureIndexes,
    onEdit: ({ updatedData }: EditAction<AnyGeoJson>) => {
      setGeojson(updatedData);
    }
  });

export const useEditableLayerProperties = ({
  geojson,
  mode,
  selectedFeatureIndexes,
  setGeojson
}: EditableLayerProperties): EditableLayerProperties => {
  const [editableLayerProperties, setEditableLayerProperties] = useState<EditableLayerProperties>(() => {
    return { geojson, mode, selectedFeatureIndexes, setGeojson };
  });
  useMemo(() => {
    setEditableLayerProperties({
      geojson,
      mode,
      selectedFeatureIndexes,
      setGeojson
    });
  }, [geojson, mode, selectedFeatureIndexes, setGeojson]);
  return editableLayerProperties;
};

export const useEditableLayer = ({
  geojson,
  mode,
  selectedFeatureIndexes,
  setGeojson
}: EditableLayerProperties): EditableGeoJsonLayer => {
  const editableLayerProperties = useEditableLayerProperties({
    geojson,
    mode,
    selectedFeatureIndexes,
    setGeojson
  });
  const [editableLayer, setEditableLayer] = useState<EditableGeoJsonLayer>();

  useMemo(() => {
    setEditableLayer(
      new EditableGeoJsonLayer({
        id: "geojson-layer", // @ts-expect-error: Bad types define
        data: editableLayerProperties.geojson,
        mode: editableLayerProperties.mode,
        selectedFeatureIndexes,
        onEdit: ({ updatedData }: EditAction<AnyGeoJson>) => {
          editableLayerProperties.setGeojson(updatedData);
        }
      })
    );
  }, [editableLayerProperties, selectedFeatureIndexes]);
  // @ts-expect-error: Bad types define
  return editableLayer;
};
