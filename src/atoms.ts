import { atom } from "recoil";
import { TodoFilter, TodoList } from "./types";

export const todoListState = atom<TodoList>({
  key: "todoListState",
  default: {},
});

export const todoListFilterState = atom<TodoFilter>({
  key: "todoListFilterState",
  default: "Show All",
});

export const interestingName = atom<string>({
  key: "interestingName",
  default: "kevin",
});
