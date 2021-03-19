import React from "react";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  card: {
      position: 'relative',
      transition: '0.4s',
      '&:hover': {
        WebkitFilter: "drop-shadow(0px 5px 10px #666)",
        filter: 'drop-shadow(0px 5px 10px #666)',
      }
  },
  media: {
     height: 200
  },
  overlay: {
     position: 'absolute',
     top: '0',
     width: '100%',
     height: '100%',
     textAlign: 'center',
     backgroundColor: 'rgba(52, 52, 52, 0.8)',
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'center'
  },
  text: {
    color: 'whitesmoke',
    fontSize: 'xxx-large',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    [theme.breakpoints.down("sm")]: {
      fontSize: 'xx-large',
    },
  },
}));


const MenuCard = ({ name, imageUrl}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={imageUrl}
          className={classes.media}
          alt={`${name} photo`}
          title={`${name} photo`}
        />
        <CardContent className={classes.overlay}>
          <Typography
            gutterBottom
            variant="h4"
            component="h1"
            className={classes.text}
          >
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MenuCard;
