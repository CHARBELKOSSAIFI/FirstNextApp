'use client'
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { createAsyncThunk } from '@reduxjs/toolkit';
import React, { useState, useEffect } from 'react';
import { AddTaskThunk, markTaskThunk } from './TaskManagementSlice';
import router from 'next/router';
import { useRouter } from 'next/router';




const TaskManagementPage: React.FC = () => {
  const [newTaskText, setNewTaskText] = useState('');
  const tasks = useAppSelector(state => state.taskManagement.value);
  const dispatch = useAppDispatch();
  //useselector usedispach mahal l state wl set state bas hon redux
  // Fetch tasks from an API or local storage

  //const router = useRouter()
  // useEffect(() => {
  //   if(router.isReady){

  //  }

  // }, [router.isReady]);

  const handleButtonClick = () => {
    router.push('/tasklistpage');

  };

  const addTask =async (taskText:any) => {
    const newTask = { id: tasks.length + 1, text: taskText, completed: false };
    await dispatch(AddTaskThunk(newTask))
  };

  const markTaskComplete =async (taskId:any) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
        await dispatch(markTaskThunk(updatedTasks))
  };

  const handleAddTask = async() => {
    if (newTaskText.trim() !== '') {
     await addTask(newTaskText);
      setNewTaskText('');
    };

  };



  return (
    <div>


      <h1>Task Management</h1>
      <input
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
        placeholder="Enter a new task"
        className="placeholder-gray-900 focus:text-gray-900"
        //we click the enter key,its like we clicked on the AddTask button
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAddTask();
          }
        }}
        />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg ml-5"
     onClick={handleAddTask}> Add Task
      </button>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            onClick={() => markTaskComplete(task.id)}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            {task.text}
          </li>
        ))}
      </ul>

<div className='ml-2'>
<button
      type="button"
      onClick={handleButtonClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg"
      >
      TaskListPage
    </button>
    </div>

    {/* i dont route this button because i have an issue in the Prev one   */}
<div className='ml-2 mt-4'>
    <button
      type="button"
      onClick={handleButtonClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg"
      >
        TaskDetailsP
    </button>
    </div>

    </div>
  );
};

export default TaskManagementPage;

