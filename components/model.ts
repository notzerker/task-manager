export interface ToDo {
  id: number;
  todo: string;
  isDone: boolean;
}

// type Actions =
//   | { type: "add"; payload: string }
//   | { type: "remove"; payload: number }
//   | { type: "done"; payload: boolean };

// const ToDoReducer = (state: ToDo[], action: Actions) => {

// };

// import React, { useReducer } from "react";

// const model = () => {
//   const [state, dispatch] = useReducer(ToDoReducer, []);
//   return <div>model</div>;
// };

// export default model;
