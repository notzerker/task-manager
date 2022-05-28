import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import InputField from "../components/InputField";
import { ToDo } from "../components/model";

const Home: NextPage = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<ToDo[]>([]);

  const addHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos);

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
      <div className="flex h-screen w-full flex-col items-center bg-emerald-500">
        <h1 className="z-10 mt-16 text-3xl font-bold">Task Manager</h1>
        <InputField todo={todo} setTodo={setTodo} addHandler={addHandler} />
      </div>
    </>
  );
};

export default Home;
