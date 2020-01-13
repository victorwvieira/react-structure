import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { updateTitle } from "../redux/actions";
import { WELCOME_HOME, USD_S, BRL_S, REAL, DOLLAR, BRL_FLAG, USA_FLAG } from "../constants/constants"
import Grid from "@material-ui/core/Grid";
import FlagCard from "../components/flagCard";

const mapDispatchToProps = dispatch => {
  return {
    updateTitle: title => dispatch(updateTitle(title))
  };
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 30
  }
}));

const Home = props => {
  const classes = useStyles();

  useEffect(() => {
    props.updateTitle(WELCOME_HOME);
  });

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={3}>
        <FlagCard
          type={REAL}
          title={BRL_S}
          imageUrl={BRL_FLAG}
        />
      </Grid>
      <Grid item xs={3}>
        <FlagCard
          type={DOLLAR}
          title={USD_S}
          imageUrl={USA_FLAG}
        />
      </Grid>
    </Grid>
  );
};

export default connect(null, mapDispatchToProps)(Home);
