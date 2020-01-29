import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { updateTitle } from "../redux/actions";
import {
  USD_S,
  BRL_S,
  EXCHANGE_TITLE_USD,
  EXCHANGE_TITLE_BRL,
  EURO_VALUE_TEXT
} from "../constants/constants";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const mapDispatchToProps = dispatch => {
  return {
    updateTitle: title => dispatch(updateTitle(title))
  };
};

const mapStateToProps = state => {
  return { value: state.value, dollar: state.dollar };
};

const useStyles = makeStyles(theme => ({
  styleContainer: {
    paddingTop: "30px",
    flexGrow: 1
  },
  textValue: {
    padding: "15px"
  }
}));

export const ExchangeValues = props => {
  const classes = useStyles();
  useEffect(() => {
    if (props.dollar) {
      props.updateTitle(EXCHANGE_TITLE_USD);
    } else {
      props.updateTitle(EXCHANGE_TITLE_BRL);
    }
  });

  return (
    <Container className={classes.styleContainer} maxWidth={false}>
      <Grid container justify="center">
        <Paper elevation={3}>
          <Typography className={classes.textValue} variant="h3" gutterBottom>
            {EURO_VALUE_TEXT}
          </Typography>
          <Typography className={classes.textValue} variant="h3" gutterBottom>
            {props.dollar ? USD_S : BRL_S} {props.value.toFixed(2)}
          </Typography>
        </Paper>
      </Grid>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeValues);
