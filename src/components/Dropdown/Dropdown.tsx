import { MutableRefObject, useEffect, useRef } from "react";

import "./Dropdown.scss";

export const Dropdown = (props: any) => {
  const dropdownRef: any = useRef();

  const handleClick = (event: MouseEvent) => {
    if (
      dropdownRef &&
      !dropdownRef.current?.contains(event.target) &&
      props.onClose
    )
      props.onClose();
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
      className={`dropdown custom-scroll ${props.class ? props.class : ""}`}
    >
      {props.children}
    </div>
  );
};
