import { FC, ReactNode } from "react";
import "./Modal.scss";

interface IProps {
  onClose?: () => void;
  children: ReactNode;
}

export const Modal: FC<IProps> = ({ onClose, children }) => {
  return (
    <div className="modal" onClick={() => (onClose ? onClose() : "")}>
      <div
        className="modal-content custom-scroll"
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
