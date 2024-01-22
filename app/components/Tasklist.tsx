import React from 'react'
import { useSelector } from 'react-redux';
import { removeTask } from '../taskSlice';
import { useDispatch } from 'react-redux';


const Tasklist = () => {
  const tasks = useSelector((state:any) => state.tasks);
  const dispatch = useDispatch();

  const handleRemove = (taskId:any) => {
    dispatch(removeTask(taskId));
  };
  return (
    <table className="w-full">
      <thead>
        <tr className="bg-blue-500 text-white">
          <th className="py-2">Task</th>
          <th className="py-2">Priority</th>
          <th className="py-2">Deadline</th>
          <th className="py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task: any) => (
          <tr key={task.id} className="border-b">
            <td className="py-2 text-black">{task.name}</td>
            <td className="py-2 text-black">{task.priority}</td>
            <td className="py-2 text-black">{task.deadline}</td>
            <td className="py-2">
              <button className="bg-red-500 text-white px-2 py-1 rounded-xl" onClick={() => handleRemove(task.id)}>
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Tasklist
