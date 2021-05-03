import {
  DrawLineStringMode,
  DrawPointMode,
  DrawPolygonMode,
  GeoJsonEditMode,
  ModifyMode,
  ViewMode
} from "@nebula.gl/edit-modes";
import React, { ReactElement } from "react";

const EditorLayout = ({
  mode,
  setMode
}: {
  mode: typeof ViewMode;
  setMode(argument0: unknown): void;
}): ReactElement => {
  return (
    <div style={{ position: "absolute", top: 0, right: 0, color: "white" }}>
      <button onClick={() => setMode(() => ViewMode)} style={{ background: mode === ViewMode ? "#3090e0" : undefined }}>
        View
      </button>
      <button
        onClick={() => setMode(() => ModifyMode)}
        style={{ background: mode === ModifyMode ? "#3090e0" : undefined }}
      >
        Modify
      </button>
      <button
        onClick={() => setMode(() => DrawPointMode)}
        style={{ background: mode === DrawPointMode ? "#3090e0" : undefined }}
      >
        Point
      </button>
      <button
        onClick={() => setMode(() => DrawLineStringMode)}
        style={{ background: mode === DrawLineStringMode ? "#3090e0" : undefined }}
      >
        Line
      </button>
      <button
        onClick={() => setMode(() => DrawPolygonMode)}
        style={{ background: mode === DrawPolygonMode ? "#3090e0" : undefined }}
      >
        Polygon
      </button>
      <button
        onClick={() => setMode(() => GeoJsonEditMode)}
        style={{ background: mode === GeoJsonEditMode ? "#3090e0" : undefined }}
      >
        Select
      </button>
    </div>
  );
};
export default EditorLayout;
