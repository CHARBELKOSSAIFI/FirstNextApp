import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import TaskManagementSlice from "../features/TaskManagement/TaskManagementSlice";



export const store = configureStore({
  reducer: {
    taskManagement: TaskManagementSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
