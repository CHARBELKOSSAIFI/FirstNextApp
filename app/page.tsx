'use client'
import React from 'react';
import TaskManagementPage from "./features/TaskManagement/TaskManagementPage"
import { store } from './store';
import { Provider } from 'react-redux';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import  router, {useRouter} from 'next/router';

export  function Page() {
   const router = useRouter()
}
const TaskManagement: React.FC = () => {
 return (
  <Provider store={store}>
     <TaskManagementPage />
     </Provider>
 );
};

export default TaskManagement;
