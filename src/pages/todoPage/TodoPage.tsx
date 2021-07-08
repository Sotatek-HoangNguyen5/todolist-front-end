import React, { Fragment, useEffect } from 'react';
import ButtonAppBar from '../../components/AppBar';
import TodoItem from '../../components/TodoItem';
import { useAppSelector, useAppDispatch } from 'src/store/hooks';
import { useSelector } from 'react-redux';
import { todoActions } from 'src/store/store';

import FormPropsTextFields from '../../components/FormPropsTextFields';

enum TodoStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export interface Todo {
  id: number;
  title: string;
  description?: string;
  status?: TodoStatus;
  createAt?: Date;
}

export interface NewTodo {
  title: string;
  description?: string;
  status?: TodoStatus;
  createAt?: Date;
}

const TodoPage: React.FC = () => {
  const todos: Todo[] = useAppSelector((state) => state.todo.todos);
  const jwt = useAppSelector((state) => state.user.jwt);

  const dispatch = useAppDispatch();

  const getTodos = async () => {
    const response = await fetch('http://127.0.0.1:5000/todos', {
      method: 'GET',
      headers: new Headers({
        Authorization: 'Bearer ' + jwt,
      }),
    });

    const todos: Todo[] = await response.json();

    dispatch(todoActions.addTodo(todos));
  };

  useEffect(() => {
    getTodos();
  }, [todos]); // It won't update, not rerender all even state todos change, so useEffect won't be activated
  //unless we put todos as dependency like this

  const onAddTodo = async (newTodo: NewTodo) => {
    if (!newTodo.description) newTodo.description = 'description';

    const response = await fetch('http://127.0.0.1:5000/todos/', {
      method: 'POST',
      headers: new Headers({
        Authorization: 'Bearer ' + jwt,
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(newTodo),
    });

    if (response.ok) {
      console.log(response.ok);
      dispatch(todoActions.addTodo(todos));
    }
  };

  const onDeleteTodo = async (todoId: number) => {
    const response = await fetch(`http://127.0.0.1:5000/todos/${todoId}`, {
      method: 'DELETE',
      headers: new Headers({
        Authorization: 'Bearer ' + jwt,
        'Content-Type': 'application/json',
      }),
    });

    if (response.ok) {
      console.log(response.ok);
      dispatch(todoActions.deleteTodo(todos));
    }
  };

  return (
    <Fragment>
      <ButtonAppBar />
      <FormPropsTextFields onAddTodo={onAddTodo} />
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
      ))}
    </Fragment>
  );
};

export default TodoPage;
