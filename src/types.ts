export type TodoItem = {
  id: number;
  text: string;
  isComplete: boolean;
};

export type TodoList = {
  [name: string]: TodoItem;
};

export type TodoFilter = "Show Completed" | "Show Uncompleted" | "Show All";
