import React, { useState } from "react";
import { BsCheckCircle, BsCheckCircleFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { ToDo } from "./model";

interface Props {
  todo: ToDo;
  todos: ToDo[];
  setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const Card = ({ todo, todos, setTodos }: Props) => {
  const [done, setDone] = useState(todo.isDone);

  const removeHandler = (id: number) => {
    setTodos(todos?.filter((todo) => todo.id !== id));
  };

  return (
    <div
      className={`${
        done ? "bg-emerald-500" : "bg-white"
      } flex w-full select-none flex-row items-center justify-between rounded-lg p-4 text-black`}
    >
      <p>{todo.todo}</p>
      <div className="flex flex-row space-x-3">
        <AiFillEdit className="cursor-pointer" />
        <MdDelete
          className="cursor-pointer"
          onClick={() => removeHandler(todo.id)}
        />
        <div className="cursor-pointer" onClick={() => setDone(!done)}>
          {done ? <BsCheckCircleFill /> : <BsCheckCircle />}
        </div>
      </div>
    </div>
  );
};

export default Card;
