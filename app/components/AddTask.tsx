"use client"
import React from 'react'
import { useState } from 'react'
import TaskForms from './TaskForms';


const AddTask = () => {
  const [isTaskFormOpen,OpenTaskForm] = useState(false);
  function openTask(){
    OpenTaskForm(true);
  };
  function closeTask(){
    OpenTaskForm(false);
  };


  return (
    <div className="mb-4">
      <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-xl" onClick={openTask}>
        Add Task
      </button>
      {isTaskFormOpen && (
         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg w-96 flex flex-col text-center">
           <TaskForms/>
           <button className="bg-blue-500 text-white mx-28 px-4 py-2 mt-4 rounded-xl " onClick={closeTask}>
             Close
           </button>
          </div>
         </div>
      )

      }
    </div>
  )
}

export default AddTask
