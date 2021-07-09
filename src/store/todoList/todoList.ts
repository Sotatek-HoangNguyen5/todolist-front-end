import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoListState } from 'src/interfaces/todoList';
import { Todo } from 'src/interfaces/todo';
import { RootState } from '../store';

const initialState: TodoListState = {
  todos: [],
  todoNum: 0,
};

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Todo[]>) {
      state.todos = action.payload;
      state.todoNum += 1;
    },
    deleteTodo(state, action) {
      state.todos = action.payload;
      state.todoNum -= 1;
    },
    updateTodo(state, action) {
      state.todos = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoListSlice.actions;
export const selectTodos = (state: RootState): Todo[] => state.todoList.todos;
export default todoListSlice.reducer;
