import { FC, ReactNode, useEffect, useRef } from "react";

import "./Dropdown.scss";

interface IProps {
  onClose?: () => void;
  classValue?: string;
  children: ReactNode;
}

export const Dropdown: FC<IProps> = ({ classValue, onClose, children }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClick = (event: MouseEvent) => {
    if (
      dropdownRef &&
      !dropdownRef.current?.contains(event.target as Element) &&
      onClose
    )
      onClose();
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <div
      ref={dropdownRef}
      className={`dropdown custom-scroll ${classValue ? classValue : ""}`}
    >
      {children}
    </div>
  );
};
