import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NewTodo } from 'src/pages/Dashboard/Dashboard';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface FormPropsTextFieldsProps {
  onAddTodo: (todo: NewTodo) => void;
}

export default function FormPropsTextFields(props: FormPropsTextFieldsProps) {
  const classes = useStyles();

  const [text, setText] = useState('');

  const onEnteredText = (event: React.SyntheticEvent<EventTarget>) => {
    setText((event.target as HTMLTextAreaElement).value);
  };

  const onSubmitHandle = (event: React.SyntheticEvent<EventTarget>) => {
    event.preventDefault();
    props.onAddTodo({ title: text });
    setText('');
  };

  return (
    <form className={classes.form} noValidate onSubmit={onSubmitHandle}>
      <Grid container spacing={5}>
        <Grid item xs={6} sm={9}>
          <TextField
            autoComplete="fname"
            name="firstName"
            variant="outlined"
            fullWidth
            id="firstName"
            label="Add Todo"
            value={text}
            onChange={onEnteredText}
          />
        </Grid>
      </Grid>
    </form>
  );
}
