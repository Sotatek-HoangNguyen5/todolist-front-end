import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DelUptButton from './DoneDelUptButton';
import TodoInfoCard from './TodoInfoCard';
import { Todo } from 'src/pages/todoPage/TodoPage';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

interface TodoItemProps {
  key?: number;
  todo: Todo;
  onDeleteTodo: (todoId: number) => void;
}

export default function TodoItem(props: TodoItemProps) {
  const classes = useStyles();

  const onClickDeleteTodo = () => {
    props.onDeleteTodo(props.todo.id);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper} style={{ textAlign: 'left' }}>
            {props.todo.title}
          </Paper>
        </Grid>
        <Grid item xs>
          <TodoInfoCard todo={props.todo} />
        </Grid>
        <Grid item xs>
          <DelUptButton onClickDeleteTodo={onClickDeleteTodo} />
        </Grid>
      </Grid>
    </div>
  );
}
