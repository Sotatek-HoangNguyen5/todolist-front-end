import React, { Fragment, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import ButtonAppBar from '../../components/AppBar/AppBar';
import TodoItem from '../../components/TodoItem';
import { useAppSelector, useAppDispatch } from 'src/store/hooks';
import FormPropsTextFields from '../../components/TodoItem/FormPropsTextFields';
import { TodoStatus } from 'src/interfaces/todo';
import { Todo } from 'src/interfaces/todo';
import { selectTodos } from 'src/store/todoList/todoList';
import store from 'src/store/store';
import { addTodo, deleteTodo } from 'src/store/todoList/todoList';
import { routeConstants } from 'src/constants';

export interface NewTodo {
  title: string;
  description?: string;
  status?: TodoStatus;
  createAt?: Date;
}

const Dashboard: React.FC = () => {
  const todos: Todo[] = useAppSelector((state) => state.todoList.todos);
  const jwt = localStorage.getItem('jwt');

  const dispatch = useAppDispatch();

  const getTodos = async () => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}todos`, {
      method: 'GET',
      headers: new Headers({
        Authorization: 'Bearer ' + jwt,
      }),
    });

    const todos: Todo[] = await response.json();

    dispatch(addTodo(todos));
  };

  useEffect(() => {
    getTodos();
  }, [todos]);
  // It won't update, not rerender all even state todos change,
  //so useEffect won't be activated
  //unless we put todos as dependency like this

  const onAddTodo = async (newTodo: NewTodo) => {
    if (!newTodo.description) newTodo.description = 'description';

    const response = await fetch(`${process.env.REACT_APP_BASE_URL}todos/`, {
      method: 'POST',
      headers: new Headers({
        Authorization: 'Bearer ' + jwt,
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(newTodo),
    });

    if (response.ok) {
      dispatch(addTodo(todos));
    }
  };

  const onDeleteTodo = async (todoId: number) => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}todos/${todoId}`,
      {
        method: 'DELETE',
        headers: new Headers({
          Authorization: 'Bearer ' + jwt,
          'Content-Type': 'application/json',
        }),
      },
    );

    if (response.ok) {
      dispatch(deleteTodo(todos));
    }
  };

  return (
    <Fragment>
      {!localStorage.getItem('jwt') && <Redirect to={routeConstants.SIGNIN} />}
      <ButtonAppBar />
      <FormPropsTextFields onAddTodo={onAddTodo} />
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
      ))}
    </Fragment>
  );
};

export default Dashboard;
