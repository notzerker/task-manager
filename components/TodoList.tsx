import React from "react";
import Card from "./Card";
import { ToDo } from "./model";

interface Props {
  todos: ToDo[];
  setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div className="mt-8 flex w-full flex-col space-y-4">
      {todos.map((todo) => {
        return <Card todo={todo} todos={todos} setTodos={setTodos} />;
      })}
    </div>
  );
};

export default TodoList;
