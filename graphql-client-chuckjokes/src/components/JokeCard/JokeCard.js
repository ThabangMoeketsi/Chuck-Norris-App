import React from 'react';
import cx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardMedia,
  CardContent
} from '@material-ui/core';

import AllInclusiveOutlinedIcon from '@material-ui/icons/AllInclusiveOutlined';

import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import TextInfoContent from '@mui-treasury/components/content/textInfo';


const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 350,
    margin: 'auto',
  },
  content: {
    padding: 24,
  },
  avatar: {
    width: 65,
    height: 65,
    border: '2px solid #fff',
    margin: '-48px 32px 0 auto',
    '& > img': {
      margin: 0,
    },
  },
}));


const JokeCard = ({ data, newJoke }) => {
  const cardStyles = useStyles();
  const mediaStyles = useSlopeCardMediaStyles();
  const shadowStyles = useSoftRiseShadowStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();


  return (
    <Card className={cx(cardStyles.root, shadowStyles.root)}>
      <CardMedia
        classes={mediaStyles}
        image={
          `https://source.unsplash.com/featured/?${data.categories}`
        }
      />
      <Avatar className={cardStyles.avatar} src={data.icon_url} />
      <CardContent className={cardStyles.content}>
        <TextInfoContent
          classes={textCardContentStyles}
          heading={
            `${data.categories} jokes`
          }
          body={data.value}
        />
      </CardContent>
      <Box px={2} pb={2} mt={-1} display="flex" flexDirection="row" justifyContent="space-between">
        <Button
          variant="outlined"
          color="primary"
          onClick={(e) => {
            e.preventDefault();
            var re = new RegExp(/^.*\//);
            var baseURL = re.exec(window.location.href);
            window.location.href=baseURL;
            }}
          >
          HOME
        </Button>
        <Button
          variant="outlined"
          color="primary"
          endIcon={<AllInclusiveOutlinedIcon />}
          onClick={newJoke}
          >
          Next Joke
        </Button>
      </Box>
    </Card>
  );
};

export default JokeCard;
