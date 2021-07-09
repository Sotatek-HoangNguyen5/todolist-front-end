import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DelUptButton from './DoneDelUptButton';
import TodoInfoCard from './TodoInfoCard';
import { Todo } from 'src/interfaces/todo';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {props.todo.title}
              </Typography>
            </CardContent>
          </Card>
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
