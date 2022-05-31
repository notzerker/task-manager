import React from "react";
import Card from "./Card";
import { ToDo } from "./model";

interface Props {
  todos: ToDo[];
  setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
  complete: ToDo[];
  setComplete: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const TodoList = ({ todos, setTodos, complete, setComplete }: Props) => {
  return (
    <div className="mt-8 flex h-fit w-full flex-row space-x-4">
      <div className="flex w-1/2 flex-col space-y-4 rounded-xl bg-white/40 p-4">
        <h1 className="text-large">Incomplete Tasks</h1>
        <hr className="border-black" />
        {todos.map((todo) => {
          return (
            <Card
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              complete={complete}
              setComplete={setComplete}
            />
          );
        })}
      </div>
      <div className="flex h-fit w-1/2 flex-col space-y-4 rounded-xl bg-white/40 p-4">
        <h1 className="text-large">Complete Tasks</h1>
        <hr className="border-black" />
        {complete.map((comp) => {
          return (
            <Card
              todo={comp}
              todos={todos}
              setTodos={setTodos}
              complete={complete}
              setComplete={setComplete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
