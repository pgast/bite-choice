import React from 'react';
import { Alert } from 'grommet-icons';
import { Box, Heading, Text } from 'grommet';

const errorScreen = ({ error }) => {
  return (
    <Box 
      background="status-error" 
      justify="center" 
      align="center"
      height="100%" 
      width="100%"
      pad="large" 
    >
      <Alert size="xlarge" />
      <Heading color="light-1">
        Oops..
      </Heading>
      <Text textAlign="center" weight="bold">
        {error === "Error" ?
        "There was an error fetching the information. This might be due to:"
        :
        "Unable to fetch data due to problems with the server. Please try again later."
        }
      </Text>
      {error === "Error" && (
        <ul>
          <li><Text>Typos in your search terms</Text></li>
          <li><Text>Your internet connection</Text></li>
          <li><Text>No businesses available</Text></li>
          <li><Text>Wrong location input</Text></li>
        </ul>
      )}
    </Box>
  );
};

export default errorScreen;