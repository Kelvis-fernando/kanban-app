import { X } from "phosphor-react";
import { ModalProps } from "../types/Modal";
import "../styles/modal.css";

const Modal = ({ children, onCloseModal, isModalOpen }: ModalProps) => {
  return (
    <div>
      {isModalOpen ? (
        <div className={`modal-container`}>
          <div className="modal-content">
            <button className="close-button" onClick={onCloseModal}>
              <X size={20} />
            </button>
            {children}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
