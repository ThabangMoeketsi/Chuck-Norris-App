import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

// material-ui
import {
  Grid,
  LinearProgress
} from "@material-ui/core";

// components
import MenuCard from "../components/MenuCard/MenuCard";


// graphql
const ALL_CATEGORIES = gql`
  {
    categories {
      name
    }
  }
`;


const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // graphql
  const { loading, error, data } = useQuery(ALL_CATEGORIES);

  if (loading) return <LinearProgress color="primary" />;
  if (error) return <p>Whoops ... something is wrong!</p>

  const handleClick = async (e, category) => {
    e.preventDefault();

    try {
      await dispatch({type: 'SET_CATEGORY', category});
      history.push("/joke");
    } catch (e) {
      alert(e.message);
    }
  };


  return (
    <Grid container spacing={3}>
      {data.categories.map((category) => (
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            key={category.name}
            onClick={(e) => handleClick(e, category)}
          >
            <MenuCard
              name={category.name}
              imageUrl={`https://source.unsplash.com/featured/?${category.name}`}
            />
          </Grid>
      ))}
    </Grid>
  );
};


export default Home;
