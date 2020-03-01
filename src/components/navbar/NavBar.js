import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
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
  



function NavBar () {
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <AppBar color="primary" position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <i class="far fa-images"></i>
          </IconButton>
          <Typography variant="h5" className={classes.title}>
           AllFreePics
          </Typography>
         
        </Toolbar>
        </AppBar>
    </div>
    )
}

export default NavBar;