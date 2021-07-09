import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useAppDispatch } from '../../store/hooks';
import { signout } from 'src/store/user/user';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const history = useHistory();
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    dispatch(signout());
    history.push('/signin');
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}></Typography>
          <Button color="inherit" onClick={handleOnClick}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
