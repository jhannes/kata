import { type ReactNode, useEffect, useRef } from "react";

interface Props {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Dialog({ visible, onClose, children }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    dialogRef.current?.addEventListener("close", (e) => {
      onClose();
    });
  }, []);
  useEffect(() => {
    if (visible) dialogRef.current?.showModal();
    else dialogRef.current?.close();
  }, [visible]);

  return <dialog ref={dialogRef}>{children}</dialog>;
}
