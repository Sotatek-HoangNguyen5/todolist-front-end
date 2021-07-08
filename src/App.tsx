import React, { Fragment, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from './store/hooks';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '@fontsource/roboto';
import './styles/_app.scss';
import SignUpPage, { SignUpFrom } from './pages/signUpPage/SignUpPage';
import SignInPage from './pages/signInPage';
import TodoPage from './pages/todoPage';

const App: React.FC<any> = () => {
  const [page, setPage] = useState();
  const isLogedIn = useAppSelector((state) => state.user.isLoginedIn);

  let todoPage = <Fragment></Fragment>;
  if (isLogedIn) todoPage = <TodoPage />;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signup">
          <SignUpPage />
        </Route>
        <Route exact path="/signin">
          <SignInPage />
        </Route>
        <Route exact path="/todo-list">
          {!useAppSelector((state) => state.user.isLoginedIn) && (
            <Redirect to="/signin" />
          )}
          {todoPage}
        </Route>
        <Route path="/*">
          <Redirect to="/signin" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
