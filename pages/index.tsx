import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { BsReverseLayoutSidebarReverse } from "react-icons/bs";
import InputField from "../components/InputField";
import { ToDo } from "../components/model";
import TodoList from "../components/TodoList";
import { IoIosClose } from "react-icons/io";

const Home: NextPage = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [complete, setComplete] = useState<ToDo[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const addHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <>
      <Head>
        <title>Task Manager</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="relative flex min-h-screen flex-row items-start bg-gradient-to-br from-[#c0efe3] via-[#fdd8d3] to-[#aec0f5]">
        <div
          className={`${
            open ? "translate-x-0 delay-200" : "-translate-x-full "
          } fixed z-50 h-full w-64 bg-[#aec0f5] transition-all  duration-300 ease-in`}
        >
          <div
            className="absolute top-12 right-4 w-fit cursor-pointer rounded-lg bg-gray-100 p-2"
            onClick={() => setOpen(!open)}
          >
            <IoIosClose className="text-xl" />
          </div>
        </div>
        <div
          className={`${
            open ? "-translate-x-full" : "translate-x-0 delay-200"
          } absolute left-0 top-12 z-50 cursor-pointer rounded-r-lg bg-gray-100 p-2 transition-all  duration-300 ease-in`}
          onClick={() => setOpen(!open)}
        >
          <BsReverseLayoutSidebarReverse className="text-xl" />
        </div>
        <div
          className={`${
            open
              ? "w-[calc(100%_-_16rem)]  translate-x-64 delay-200"
              : "h-fit w-full translate-x-0"
          } relative my-16 flex h-fit flex-col items-start overflow-scroll px-24 transition-all duration-300 ease-in`}
        >
          <h1 className="z-10 text-3xl font-medium">Task Manager</h1>
          <InputField todo={todo} setTodo={setTodo} addHandler={addHandler} />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            complete={complete}
            setComplete={setComplete}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
