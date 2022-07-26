import { selector } from "recoil";
import { interestingName, todoListFilterState, todoListState } from "./atoms";
import { TodoList } from "./types";

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);
    console.log(list);

    let result: TodoList = {};
    switch (filter) {
      case "Show Completed":
        Object.entries(todoListState).forEach(([name, item]) => {
          if (item.isComplete) {
            result[name] = item;
          }
        });
        return result;
      case "Show Uncompleted":
        Object.entries(todoListState).forEach(([name, item]) => {
          if (!item.isComplete) {
            result[name] = item;
          }
        });
        return result;
      case "Show All":
        result = list;
        break;
    }
    return result;
  },
});

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = Object.keys(todoListState).length;
    const totalCompletedNum = Object.values(todoList).filter(
      (item) => item.isComplete
    ).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});

export const todoItemComparator = selector({
  key: "comparator",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const iName = get(interestingName);
    const result = todoList[iName];
    if (result) {
      alert(`Found your item: ${result}`);
      return result;
    } else {
      return null;
    }
  },
});
