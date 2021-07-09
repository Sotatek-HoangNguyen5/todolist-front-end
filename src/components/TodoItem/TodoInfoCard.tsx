import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Todo } from 'src/interfaces/todo';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

interface TodoInfoCardProps {
  todo: Todo;
}

export default function TodoInfoCard(props: TodoInfoCardProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Descriptions
        </Typography>
        <Typography>{props.todo.description}</Typography>
        <div></div>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Images
        </Typography>
      </CardContent>
    </Card>
  );
}
