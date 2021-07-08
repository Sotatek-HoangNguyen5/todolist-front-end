import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Todo } from 'src/pages/todoPage/TodoPage';

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
  const bull = <span className={classes.bullet}>•</span>;

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