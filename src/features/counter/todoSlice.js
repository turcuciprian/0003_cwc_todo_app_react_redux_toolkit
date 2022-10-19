import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

const initialState = {
  value: [{ value: "milk", checked: true }],
  status: 'idle',
};


export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },
    changeTodo: (state, action) => {
      state.value[action.payload].checked = !state.value[action.payload].checked;
    },
    removeTodo: (state, action) => {
      //payload is the index number I'm removing
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addTodo, removeTodo, changeTodo } = todosSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.todos.value;

export default todosSlice.reducer;
