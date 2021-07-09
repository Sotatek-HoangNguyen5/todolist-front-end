export enum TodoStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export interface Todo {
  id: number;
  title: string;
  description?: string;
  status?: TodoStatus;
  createAt?: Date;
}
