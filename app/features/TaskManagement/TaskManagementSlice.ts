import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
 export interface ITask  {
  id : number;
  text : string;
  completed : boolean;
}
  export type ITasks= ITask[];

export interface Iaction {
  payload :ITask;
}


export const AddTaskThunk =  createAsyncThunk('tasks/add',(newTask)=> newTask)
export const markTaskThunk = createAsyncThunk('tasks/mark',(newTasks)=>newTasks)

export const TasksSlice = createSlice({
  name: 'tasks',
  initialState : {
    value:[
      { id: 1, text: 'Task 1', completed: false },
      { id: 2, text: 'Task 2', completed: true },
      { id: 3, text: 'Task 3', completed: false },
    ],
  },
  reducers: {
  },

  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(AddTaskThunk.fulfilled, (state, action: any) => {
      // Add user to the state array
      state.value.push(action.payload)
    }),
    builder.addCase(markTaskThunk.fulfilled, (state, action: any) => {
      // same user to the state array
      state.value = action.payload
    })

  }
});

export default TasksSlice.reducer;
