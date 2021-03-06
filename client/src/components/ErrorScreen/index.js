import React from 'react';

import './style.css';

const errorScreen = ({ error }) => {
  return (
    <div 
      // pad="large" 
      // width="100%"
      // height="100%" 
      // align="center"
      // justify="center" 
      // background="status-error" 
    >
      {/* <Alert size="xlarge" /> */}
      <h1>
        Oops..
      </h1>
      <p 
        // textAlign="center" 
        // weight="bold"
      >
        {error === "Error" ?
        "There was an error fetching the information. This might be due to:"
        :
        "Unable to fetch data due to problems with the server. Please try again later."
        }
      </p>
      {error === "Error" && (
        <ul>
          <li>Typos in your search terms</li>
          <li>Your internet connection</li>
          <li>No businesses available</li>
          <li>Wrong location input</li>
        </ul>
      )}
    </div>
  );
};

export default errorScreen;