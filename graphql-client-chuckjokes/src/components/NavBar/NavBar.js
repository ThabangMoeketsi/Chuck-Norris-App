import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import {
  Container,
  Link,
  Toolbar,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  toolbar: {
    minHeight: 128,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: theme.spacing(5),
    },
  },
  toolbarTitle: {
    letterSpacing: 1.25,
    fontWeight: "bold",
  },
}));


const NavBar = () => {
  const classes = useStyles();


  return (
    <Container>
      <Toolbar className={classes.toolbar}>
        <Link
          underline='none'
          component={RouterLink}
          to='/'
        >
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="left"
            className={classes.toolbarTitle}
          >
            Chuck Norris Random Jokes Generator
          </Typography>
        </Link>
      </Toolbar>
    </Container>
  );
};

export default NavBar;
