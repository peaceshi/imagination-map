import { useCallback, useEffect } from "react";
import { useStore } from "stook";

type Visible = { visible: boolean; isOpen: () => void; onClose: () => void };
type Reference = { container: HTMLDivElement; saveContainer: () => void };
export const useVisible = (id: string, initState?: boolean): Visible => {
  const [visible, setVisible] = useStore(id, initState ?? false);
  const isOpen = () => setVisible(true);
  const onClose = () => setVisible(false);
  return { visible, isOpen, onClose };
};

export const useReference = (id: string, initState?: HTMLDivElement): Reference => {
  const [container, setContainer] = useStore(id, initState); //@ts-expect-error: Bad types define
  const saveContainer = () => setContainer(initState);
  return { container, saveContainer };
};

export const useFontSize = (): { fontSize: number; updateFontSize: () => void } => {
  const { width } = usePanelWidth();
  const [fontSize, setFontSize] = useStore<number>("fontSize"); //global font size

  const updateFontSize = useCallback(() => {
    const fontScale = width * 0.04;
    setFontSize(fontScale);
  }, [setFontSize, width]);
  return { fontSize, updateFontSize }; // return global font size
};

export const usePanelWidth = (): { width: number; updatePanelWidth: () => void } => {
  const [container] = useStore<HTMLDivElement>("map-container");
  const [width, setWidth] = useStore<number>("PanelWidth"); //global PanelWidth

  const updatePanelWidth = useCallback(() => {
    const widthScale = (container?.clientHeight - 40) / 2.18;
    setWidth(widthScale);
  }, [container?.clientHeight, setWidth]);
  return { width, updatePanelWidth }; // return global PanelWidth
};
