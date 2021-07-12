import React, { Fragment, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import ButtonAppBar from '../../components/AppBar/AppBar';
import TodoItem from '../../components/TodoItem';
import { useAppSelector, useAppDispatch } from 'src/store/hooks';
import AddTodoTextField from '../../components/AddTodoTextField';
import { TodoStatus } from 'src/interfaces/todo';
import { Todo } from 'src/interfaces/todo';
import {
  fetchAllTodos,
  addTodo,
  deleteTodoById,
} from 'src/store/todoList/todoList';
import { routeConstants } from 'src/constants';
import { useState } from 'react';

export interface NewTodo {
  title: string;
  description?: string;
  status?: TodoStatus;
  createAt?: Date;
}

const Dashboard: React.FC = () => {
  const [init, setInit] = useState(false);
  const todos: Todo[] = useAppSelector((state) => state.todoList.todos);

  const dispatch = useAppDispatch();

  const getTodos = async () => {
    await dispatch(fetchAllTodos());
    setInit(true);
  };
  if (init === false) getTodos();

  // useEffect(() => {
  //   getTodos();
  // }, [todos]);
  // It won't update, not rerender all even state todos change,
  //so useEffect won't be activated
  //unless we put todos as dependency like this

  const onAddTodo = async (newTodo: NewTodo) => {
    if (!newTodo.description) newTodo.description = 'description';

    await dispatch(addTodo(newTodo));
  };

  const onDeleteTodo = async (todoId: number) => {
    await dispatch(deleteTodoById(todoId));
  };

  return (
    <Fragment>
      {!localStorage.getItem('jwt') && <Redirect to={routeConstants.SIGNIN} />}
      <ButtonAppBar />
      <AddTodoTextField onAddTodo={onAddTodo} />
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
      ))}
    </Fragment>
  );
};

export default Dashboard;
