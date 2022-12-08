import { FC } from "react";
import { X } from "react-feather";

import { ILabel } from "../../interface/interfaces";

interface IProps {
  item: ILabel;
  removeLabel?: (label: ILabel) => void;
}

export const Chip: FC<IProps> = ({ item, removeLabel }) => {
  return (
    <label style={{ backgroundColor: item.color, color: "#fff" }}>
      {item.text}
      {removeLabel && <X onClick={() => removeLabel(item)} />}
    </label>
  );
};
