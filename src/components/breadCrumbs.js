import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { WELCOME_HOME, HOME} from '../constants/constants'
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

const mapStateToProps = state => {
  return { title: state.title };
};

const useStyles = makeStyles(theme => ({
  styleContainer: {
    paddingTop: "5px"
  }
}));

export const BreadCrumbs = props => {
  const classes = useStyles();
  return (
    <Container className={classes.styleContainer} maxWidth={false}>
      {props.title !== WELCOME_HOME ? (
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            {HOME}
          </Link>
          <Link color="inherit">{props.title}</Link>
        </Breadcrumbs>
      ) : (
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit">{HOME}</Link>
        </Breadcrumbs>
      )}
    </Container>
  );
};

export default connect(mapStateToProps)(BreadCrumbs);
