"use client"
import React from 'react'
import { useForm, } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addTask } from '../taskSlice'; 

const TaskForms = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data:any) => {
    dispatch(addTask({ ...data, id: Date.now() }));
    reset();
  };
  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 ">
          <label className="block text-sm font-medium  text-gray-600">Task Name</label>
          <input
            type="text"
            className="border p-2 w-full"
            placeholder="Add a new task"
            {...register('name', { required: 'Task name is required' })}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Priority</label>
          <input
            type="text"
            className="border p-2 w-full"
            placeholder="High/Medium/Low"
            {...register('priority', { required: 'Priority is required' })}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Deadline</label>
          <input
            type="text"
            className="border p-2 w-full"
            placeholder="YYYY-MM-DD"
            {...register('deadline', { required: 'Deadline is required' })}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Description</label>
          <input
            type="text"
            className="border p-2 w-full"
            placeholder="Task description"
            {...register('description')}
          />
        </div>

        <button className="bg-blue-500 text-white px-5 py-2 rounded-xl" type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForms

