'use client'

import React from "react";
import { useState } from "react";
import { Task } from "../models/Task";
import { MdCheckBox, MdDelete, MdEdit, MdSave} from "react-icons/md";

interface Taskprops {
  activeTasks: Array<Task>,
  setActiveTasks: React.Dispatch<React.SetStateAction<Task[]>>,
  completedTasks: Array<Task>,
  setCompletedTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TasksField: React.FC<Taskprops> = ({ activeTasks, setActiveTasks, completedTasks, setCompletedTasks }) => {

  const [edit, setEdit] = useState<string | null >(null);
  const [editInput, setEditInput] = useState<string>('');

  const handleEditClick = (taskId: string, curentTaskName: string) => {
    setEdit(taskId)
    setEditInput(curentTaskName)
  }

  const editTask = (e: React.FormEvent, id: string) => {
    e.preventDefault();
    const updatedTasks = activeTasks.map(task => task.id === id ? {...task, name: editInput} : task);
    setActiveTasks(updatedTasks);
    setEdit(null);
  }

  const deleteTask = (id: string) => {
   const updatedTasks = activeTasks.filter(task => task.id !== id);
   setActiveTasks(updatedTasks);
   setEdit(null);
  }

  const completeTask = (id: string) => {
    const desiredTask = activeTasks.find(task => task.id === id);

    if(desiredTask) {
      setCompletedTasks([...completedTasks, desiredTask]);
    }

    const updatedActivetask = activeTasks.filter(task => task.id !== id);
    setActiveTasks(updatedActivetask);
  }

  const deleteCompletedTask = (id: string) => {
    const deleteTask = completedTasks.filter(task => task.id !== id);
    setCompletedTasks(deleteTask);
  }

  return (
  <section className="flex gap-4 w-full h-full">
    <div className="bg-active w-1/2 pl-4 py-4 h-fit">
      <h3 className="text-white">Active Tasks</h3>
      {
        activeTasks.map(({name, id}) => 
        <div key={id} className="flex gap-4 ">
          {edit === id ? 
          <>
            <input value={editInput} onChange={(e) => setEditInput(e.target.value)}/>
            <MdSave onClick={(e) => editTask(e, id)}/>
          </> 
          : 
          <>
            <p>{name}</p>
            <div className="flex gap-4">
              <MdDelete onClick={() => deleteTask(id)}/>
              <MdEdit onClick={() => handleEditClick(id, name)}/>
              <MdCheckBox onClick={() => completeTask(id)}/>
            </div>
          </>}
        </div>)
      }
    </div>
    <div className="bg-completed w-1/2 p-4 h-fit">
      <h3 className="text-white">Completed Tasks</h3>
      {
        completedTasks.map(({name, id}) => 
          <div key={id} className="flex gap-4 ">
            <p>{name}</p>
            <div className="flex gap-4">
              <MdDelete onClick={() => deleteCompletedTask(id)}/>
            </div>
          </div>)
      }
    </div>
    <div>
      
    </div>
  </section>
  );
}

export default TasksField;