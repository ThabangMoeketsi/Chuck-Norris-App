import React from 'react';

// material-ui
import {
  Typography
} from "@material-ui/core";


const Error = () => {
  return (
    <div className="error">
      <Typography
        gutterBottom
        variant="h4"
        component="h1"
      >
        Page does not exist!
      </Typography>
    </div>
  );
};

export default Error;
