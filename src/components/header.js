import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const mapStateToProps = state => {
  return { title: state.title };
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  rootLinks: {
    "& > * + *": {
      marginLeft: theme.spacing(2)
    }
  },
  styleLink: {
    color: "white"
  }
}));

export const Header = props => {
  const classes = useStyles();

  return (
    <div data-testid='headerid' className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.rootLinks}>{props.title}</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default connect(mapStateToProps)(Header);
