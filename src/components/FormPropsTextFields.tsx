import { Redirect, useHistory } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { NewTodo } from 'src/pages/todoPage/TodoPage';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

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
        <Grid item xs={6} sm={6}>
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
