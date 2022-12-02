export interface ILabel {
  color: string;
  text: string;
}

export interface ITask {
  id: number;
  completed: boolean;
  text: string;
}

export interface IComment {
  id: number;
  body: string;
  username: string;
  userId: number;
  parentId: number | null;
  createdAt: string;
}
export interface ICard {
  id: number;
  title: string;
  labels: ILabel[];
  date: string;
  start: string;
  tasks: ITask[];
  comment: IComment[];
  desc?: string;
}

export interface IBoard {
  id: number;
  title: string;
  cards: ICard[];
}

export interface IProject {
  id: number;
  name: string;
}
