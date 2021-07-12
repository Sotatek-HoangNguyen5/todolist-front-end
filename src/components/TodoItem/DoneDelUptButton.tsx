import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

interface DoneDelUptButtonProps {
  onClickDeleteTodo: () => void;
}

export default function DoneDelUptButton(
  props: DoneDelUptButtonProps,
): React.ReactElement<DoneDelUptButtonProps> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Button variant="contained" color="primary">
        Update
      </Button> */}
      <Button
        variant="contained"
        color="secondary"
        onClick={props.onClickDeleteTodo}
      >
        Delete
      </Button>
    </div>
  );
}
