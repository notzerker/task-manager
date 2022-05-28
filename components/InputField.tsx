import React, { useState } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addHandler: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, addHandler }) => {
  return (
    <form
      className="relative mt-8 flex w-full items-center justify-center"
      onSubmit={addHandler}
    >
      <input
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
        className="w-full rounded-lg p-4 pr-16 text-black transition duration-200 ease-linear focus:shadow-xl focus:outline-none"
      ></input>
      <button
        className="absolute right-1 rounded-lg bg-black p-3"
        type="submit"
      >
        Go
      </button>
    </form>
  );
};

export default InputField;
