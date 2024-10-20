'use client'

import React from "react";
import { Task } from "../models/Task";

interface Inputprops {
  input: string
  setInput: React.Dispatch<React.SetStateAction<string>>,
  activeTasks: Array<Task>,
  setActiveTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const InputField: React.FC<Inputprops> = ({ input, setInput, activeTasks, setActiveTasks }) => {

  const addTask = () => {
    const newTask: Task = {
      id: Date.now().toString(),
      name: input
    }

    setActiveTasks([...activeTasks, newTask]);
    setInput('');
  }

  return (
    <div className="w-full flex flex gap-4 justify-center items-center">
      <input 
      value={input}
      name='input'
      onChange={(e) => setInput(e.target.value)}
      className="rounded-full w-full bg-white px-4 py-2 border-4 border-light focus:bg-none"/>
      <button onClick={addTask} className="text-white rounded-full bg-light p-4 active:bg-blue">GO</button>
    </div>
  );
}

export default InputField;