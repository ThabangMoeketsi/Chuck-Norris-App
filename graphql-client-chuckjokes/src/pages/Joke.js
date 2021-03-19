import React from "react";
import { useQuery, gql  } from '@apollo/client';
import { connect } from 'react-redux';

// material-ui
import {
  Grid,
  LinearProgress
} from "@material-ui/core";

// components
import JokeCard from "../components/JokeCard/JokeCard";


const Joke = ({ category }) => {

  // graphql query
  const GET_JOKE = gql`
    {
      joke(category: "${category.name}") {
        icon_url
        value
        categories
      }
    }
  `;

  const { loading, error, data, refetch } = useQuery(GET_JOKE);

  if (loading) return <LinearProgress color="secondary" />;
  if (error) return <p>Whoops ... something is wrong!</p>
  
  const getNewJoke = async () => {
    refetch();
  };


  return (
    <Grid
      container
      spacing={3}
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <JokeCard
          data={data.joke}
          newJoke={getNewJoke}
        />
      </Grid>
    </Grid>
  );
};


const mapStateToProps = (state) => ({
  category: state.category
});

export default connect(mapStateToProps)(Joke);
