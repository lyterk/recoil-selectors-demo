import * as React from "react";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../atoms";
import { TodoList } from "../types";
import { getId } from "../utils";

export const TodoItemCreator = () => {
  const [nameInputValue, setNameInputValue] = useState("");
  const [textInputValue, setTextInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList(
      (todos): TodoList => ({
        ...todos,
        [nameInputValue]: {
          id: getId(),
          text: textInputValue,
          isComplete: false,
        },
      })
    );
    setNameInputValue("");
    setTextInputValue("");
  };

  const nameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setNameInputValue(value);
  };

  const textChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setTextInputValue(value);
  };

  return (
    <div>
      <input type="text" value={nameInputValue} onChange={nameChange} />
      <input type="text" value={textInputValue} onChange={textChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};
