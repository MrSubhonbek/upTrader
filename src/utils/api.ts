import { IBoard } from "../interface/interfaces";

export class BoardAPI {
  async fetchBoardList(LocalStorageKeyName: string): Promise<IBoard[]> {
    let BoardList: IBoard[] = [];

    if (localStorage.getItem(LocalStorageKeyName)) {
      const localStorageData: IBoard[] = JSON.parse(
        localStorage.getItem(LocalStorageKeyName) ?? ""
      );
      BoardList = [...localStorageData];
    }

    return BoardList;
  }
}

export async function fetchBoardList(
  LocalStorageKeyName: string
): Promise<IBoard[]> {
  const api = new BoardAPI();
  return api.fetchBoardList(LocalStorageKeyName);
}

export function updateLocalStorageBoards(
  boards: IBoard[],
  LocalStorageKeyName: string
) {
  localStorage.setItem(LocalStorageKeyName, JSON.stringify(boards));
}
