import { MouseEventHandler, ReactNode } from "react";

export interface ModalProps {
  children: ReactNode;
  onCloseModal: MouseEventHandler<HTMLButtonElement>;
  isModalOpen: boolean;
}
