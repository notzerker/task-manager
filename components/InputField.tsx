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
        className="w-full rounded-2xl border-2 border-gray-400 p-4 pr-16 transition duration-200 ease-linear focus:shadow-xl focus:outline-none"
      ></input>
      <button
        className="absolute right-2 rounded-2xl bg-black p-3 text-white "
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default InputField;
