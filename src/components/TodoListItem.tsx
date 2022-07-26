import * as React from "react";
import { useRecoilState } from "recoil";
import { TodoItem, TodoList } from "../types";
import { todoListState } from "../atoms";

type Props = {
  name: string;
  item: TodoItem;
};

export const TodoListItem = ({ name, item }: Props) => {
  const [itemName, setItemName] = React.useState<string>(name);
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const editItemName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const oldName = itemName;
    const item = todoList[oldName];
    const newName = event.target.value;
    const newTodoList: TodoList = { newName: item };
    Object.entries(todoList).forEach(([name, ite]) => {
      if (name !== oldName) {
        newTodoList[name] = ite;
      }
    });
    setTodoList(newTodoList);
    setItemName(newName);
  };

  const editItemText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    item.text = value;
    const newTodoList = {
      ...todoList,
      [itemName]: item,
    };

    setTodoList(newTodoList);
  };

  const toggleItemCompletion = () => {
    const newItem = { ...item, isComplete: !item.isComplete };
    const newTodoList = {
      ...todoList,
      [itemName]: newItem,
    };

    setTodoList(newTodoList);
  };

  const deleteItem = () => {
    const newTodoList: TodoList = {};
    Object.entries(todoList).forEach(([n, it]) => {
      if (n !== name) {
        newTodoList[n] = it;
      }
    });
    setTodoList(newTodoList);
  };

  return (
    <div>
      <input type="name" value={itemName} onChange={editItemName} />
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};
