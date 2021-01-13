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
