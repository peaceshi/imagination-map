import type Layer from "@deck.gl/core/lib/layer";
import type LayerProps from "@deck.gl/core/lib/layer";
import type CompositeLayer from "@deck.gl/core/lib/composite-layer";
import type CompositeLayerProps from "@deck.gl/core/lib/composite-layer";

type LayerType = Layer<unknown> | CompositeLayer<unknown>;
type LayerPropertiesType = LayerProps<unknown> | CompositeLayerProps<unknown>;
export const singleLayerConstructor = (T: new (argument: LayerPropertiesType) => LayerType, P: any): LayerType => {
  return new T(P);
};

export const multiLayersConstructor = (layerName: any, properties: Array<any>): Array<LayerType> => {
  const layers = [];
  for (const item of properties) {
    layers.push(singleLayerConstructor(layerName, item));
  }
  return layers;
};
