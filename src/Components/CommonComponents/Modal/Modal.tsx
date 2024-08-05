import { ReactElement } from "react";

export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactElement;
}

const Modal: React.FC<IModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          margin: "auto",
          padding: "2%",
        }}
      >
        <div
          className="main-modal-container"
          style={{
            backgroundColor: "#27292d",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            borderRadius: "2px",
            border: " 2px solid transparent",
            borderImage: "linear-gradient(to right, #969696, #343434)",
            borderImageSlice: 1
          }}
        >
          <button
            style={{
              height: "30px",
              width: "30px",
              borderRadius: "30px",
              backgroundColor: "#131319",
              color: "white",
              border: "none",
              margin: "0.5rem",
              cursor: "pointer",
            }}
            onClick={onClose}
          >
            X
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
