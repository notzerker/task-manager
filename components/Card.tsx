import React, { useEffect, useRef, useState } from "react";
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
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState(todo.todo);

  const removeHandler = (id: number) => {
    setTodos(todos?.filter((todo) => todo.id !== id));
  };

  const editHanlder = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, todo: editText };
        }
        return todo;
      })
    );
    setEdit(false);
  };

  const doneHandler = (id: number) => {
    if (edit) {
      setEdit(false);
    }
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      })
    );
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  console.log(edit);

  return (
    <div
      className={`${
        todo.isDone ? "bg-emerald-400" : "bg-white"
      } flex w-full select-none flex-row items-center justify-between rounded-2xl border-2 border-gray-400 p-4 text-black transition duration-100 ease-linear`}
    >
      {edit ? (
        <form className="mr-4 w-full" onSubmit={(e) => editHanlder(e, todo.id)}>
          <input
            ref={inputRef}
            placeholder={editText}
            className="w-full"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            type="input"
          ></input>
        </form>
      ) : (
        <p>{todo.todo}</p>
      )}
      <div className="flex flex-row space-x-3">
        {!todo.isDone && (
          <AiFillEdit
            className="cursor-pointer"
            onClick={() => setEdit(!edit)}
          />
        )}
        <MdDelete
          className="cursor-pointer"
          onClick={() => removeHandler(todo.id)}
        />
        <div className="cursor-pointer" onClick={() => doneHandler(todo.id)}>
          {todo.isDone ? <BsCheckCircleFill /> : <BsCheckCircle />}
        </div>
      </div>
    </div>
  );
};

export default Card;
