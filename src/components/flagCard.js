import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getRealData, getDollarData } from "../redux/actions";
import { makeStyles } from "@material-ui/core/styles";
import { DOLLAR } from '../constants/constants'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const mapDispatchToProps = dispatch => {
  return {
    getDollarData: () => dispatch(getDollarData()),
    getRealData: () => dispatch(getRealData())
  };
};

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

const FlagCard = props => {
  const classes = useStyles();

  const callTypeFunction = () => {
    if (props.type === DOLLAR) {
      return props.getDollarData();
    } else {
      return props.getRealData();
    }
  };

  return (
    <Card className={classes.card}>
      <CardActionArea
        component={Link}
        to="/exchange-values"
        onClick={() => callTypeFunction()}
      >
        <CardMedia
          component="img"
          alt={props.title}
          className={classes.media}
          image={props.imageUrl}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default connect(null, mapDispatchToProps)(FlagCard);
