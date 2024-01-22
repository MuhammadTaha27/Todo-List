"use client"
import Image from "next/image";
import { Provider } from 'react-redux';
import store from './store'; 
import AddTask from "./components/AddTask";
import Tasklist from "./components/Tasklist";

export default function Home() {
  return (
    <main className="bg-blue-800 min-h-screen flex items-center justify-center text-white">
      <Provider store={store}>
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full mx-4">
          <h1 className="text-4xl font-bold mb-8 text-blue-400 text-center">To Do List App</h1>
          <div className="mb-9 ml-32">
            <AddTask />
          </div>
          <div>
            <Tasklist />
          </div>
        </div>
      </Provider>
    </main>
  );
}
