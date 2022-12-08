import { FC, useState } from "react";
import { MoreHorizontal } from "react-feather";

import { Card } from "../Card/Card";
import { CustomInput } from "../CustomInput/CustomInput";
import { Dropdown } from "../Dropdown/Dropdown";

import { IBoard, ICard } from "../../interface/interfaces";

import "./Board.scss";

interface IProps {
  board: IBoard;
  addCard: (boardId: number, title: string) => void;
  removeBoard: (boardId: number) => void;
  removeCard: (boardId: number, cardId: number) => void;
  onDragEnd: (boardId: number, cardId: number) => void;
  onDragEnter: (boardId: number, cardId: number) => void;
  updateCard: (boardId: number, cardId: number, card: ICard) => void;
}

export const Board: FC<IProps> = ({
  board,
  addCard,
  removeBoard,
  removeCard,
  onDragEnd,
  onDragEnter,
  updateCard,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleShowCard = board?.cards?.map((item) => (
    <Card
      key={item.id}
      card={item}
      boardId={board.id}
      removeCard={removeCard}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}
      updateCard={updateCard}
    />
  ));

  return (
    <div className="board">
      <div className="board-inner" key={board?.id}>
        <div className="board-header">
          <p className="board-header-title">
            {board?.title}
            <span>{board?.cards?.length || 0}</span>
          </p>
          <div
            className="board-header-title-more"
            onClick={(e) => {
              e.stopPropagation();
              setShowDropdown(true);
            }}
          >
            <MoreHorizontal />
            {showDropdown && (
              <Dropdown
                classValue="board-dropdown"
                onClose={() => setShowDropdown(false)}
              >
                <p onClick={() => removeBoard(board?.id)}>Delete Board</p>
              </Dropdown>
            )}
          </div>
        </div>
        <div className="board-cards custom-scroll">
          {handleShowCard}
          <CustomInput
            text="+ Add Card"
            placeholder="Enter Card Title"
            displayClass="board-add-card"
            editClass="board-add-card-edit"
            onSubmit={(value: string) => addCard(board?.id, value)}
          />
        </div>
      </div>
    </div>
  );
};
