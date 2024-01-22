import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [
    // Initial tasks
    {
      id: 1,
      name: 'Dummy Task 1',
      priority: 'High',
      deadline: '2023-01-01',
      description: 'This is a dummy task.',
    },
    {
      id: 2,
      name: 'Dummy Task 2',
      priority: 'Medium',
      deadline: '2023-02-01',
      description: 'Another dummy task.',
    }
  ],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    removeTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    }
  },
});

export const { addTask , removeTask} = taskSlice.actions;

export default taskSlice.reducer;