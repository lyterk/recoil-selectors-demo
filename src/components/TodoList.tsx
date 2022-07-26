import * as React from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListState, todoItemComparator } from "../selectors";
import { TodoItemCreator } from "./TodoItemCreator";
import { TodoListItem } from "./TodoListItem";
import { TodoListStats } from "./TodoListStats";
import { TodoListFilters } from "./TodoListFilters";

export const TodoList = () => {
  // changed from todoListState to filteredTodoListState
  const todoList = useRecoilValue(filteredTodoListState);
  const myItem = useRecoilValue(todoItemComparator);

  return (
    <>
      <div style={{ display: "none" }}>{myItem}</div>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {Object.entries(todoList).map(([todoName, todoItem]) => {
        const name = todoName ?? "";
        return <TodoListItem key={todoItem.id} name={name} item={todoItem} />;
      })}
    </>
  );
};
