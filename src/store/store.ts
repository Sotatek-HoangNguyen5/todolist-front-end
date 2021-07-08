import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { Todo } from 'src/pages/todoPage/TodoPage';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoginedIn: false,
    jwt: '',
  },
  reducers: {
    signined(state, action) {
      state.isLoginedIn = true;
      state.jwt = action.payload;
    },
    signout(state) {
      state.isLoginedIn = false;
      state.jwt = '';
    },
  },
});

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
    todoNum: 0,
  },
  reducers: {
    addTodo(state, action) {
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

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    todo: todoSlice.reducer,
  },
});

export const userActions = userSlice.actions;
export const todoActions = todoSlice.actions;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
//Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
