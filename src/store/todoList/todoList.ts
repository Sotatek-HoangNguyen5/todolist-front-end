import { NewTodo } from 'src/pages/Dashboard/Dashboard';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoListState } from 'src/interfaces/todoList';
import { Todo } from 'src/interfaces/todo';
import { RootState } from '../store';

const initialState: TodoListState = {
  todos: [],
};

export const fetchAllTodos = createAsyncThunk(
  'todoList/fetchAllTodos',
  async (thunkAIP): Promise<Todo[]> => {
    const jwt = localStorage.getItem('jwt');

    const response = await fetch(`${process.env.REACT_APP_BASE_URL}todos`, {
      method: 'GET',
      headers: new Headers({
        Authorization: 'Bearer ' + jwt,
      }),
    });

    return await response.json();
  },
);

export const addTodo = createAsyncThunk(
  'todoList/addTodo',
  async (newTodo: NewTodo, thunkAIP): Promise<Todo[]> => {
    const jwt = localStorage.getItem('jwt');

    await fetch(`${process.env.REACT_APP_BASE_URL}todos/`, {
      method: 'POST',
      headers: new Headers({
        Authorization: 'Bearer ' + jwt,
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(newTodo),
    });

    const response = await fetch(`${process.env.REACT_APP_BASE_URL}todos`, {
      method: 'GET',
      headers: new Headers({
        Authorization: 'Bearer ' + jwt,
      }),
    });

    return await response.json();
  },
);

export const deleteTodoById = createAsyncThunk(
  'todoList/deleteTodoById',
  async (todoId: number, thunkAIP): Promise<number> => {
    const jwt = localStorage.getItem('jwt');

    await fetch(`${process.env.REACT_APP_BASE_URL}todos/${todoId}`, {
      method: 'DELETE',
      headers: new Headers({
        Authorization: 'Bearer ' + jwt,
        'Content-Type': 'application/json',
      }),
    });

    return todoId;
  },
);

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: initialState,
  reducers: {
    test(state) {
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchAllTodos.fulfilled,
      (state, action: PayloadAction<Todo[]>) => {
        state.todos = action.payload;
      },
    );

    builder.addCase(
      addTodo.fulfilled,
      (state, action: PayloadAction<Todo[]>) => {
        state.todos = action.payload;
      },
    );

    builder.addCase(
      deleteTodoById.fulfilled,
      (state, action: PayloadAction<number>) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      },
    );
  },
});

export const selectTodos = (state: RootState): Todo[] => state.todoList.todos;
export default todoListSlice.reducer;
