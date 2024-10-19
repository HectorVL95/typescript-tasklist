'use client'

import { useState } from "react";
import InputField from "./components/InputField";
import TasksField from "./components/TasksField";
import { Task } from "./models/Task";


export default function Home () {
  const [input, setInput] = useState<string>('')
  const [activeTasks, setActiveTasks] = useState<Array<Task>>([])
  const [completedTasks, setCompletedTasks] = useState<Array<Task>>([])

  return (
    <div className="flex flex-col justify-center items-center gap-8 p-8 max-w-3xl">
      <h1 className="text-white text-7xl text-center">Typescript Taskify</h1>
      <InputField input={input} setInput={setInput} activeTasks={activeTasks} setActiveTasks={setActiveTasks}/>
      <TasksField activeTasks={activeTasks} setActiveTasks={setActiveTasks} completedTasks={completedTasks} setCompletedTasks={setCompletedTasks}/>
    </div>
  );
}
