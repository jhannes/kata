import { type ReactNode, useEffect, useRef } from "react";

export function Dialog({
  visible,
  children,
}: {
  visible: boolean;
  children: ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  useEffect(() => {
    if (visible) {
      dialogRef.current!.showModal();
    } else {
      dialogRef.current!.close();
    }
  }, [visible]);
  return <dialog ref={dialogRef}>{children}</dialog>;
}
