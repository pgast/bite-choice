import React, { useContext } from 'react';
import { Box, Heading, TextInput, ThemeContext, Text } from 'grommet';

import { Map } from 'grommet-icons';
import { Store } from '../Store';

const landing = ({ location, fetchSuccess, locationInput }) => {
  const { state, dispatch } = useContext(Store);
  const updateLocation = (payload) => dispatch ({ type: 'UPDATE_LOCATION', payload });

  return (
    <Box 
      width="100vw"
      align="center" 
      justify="center" 
      animation="fadeIn"
      height={locationInput ? "85%" : "100%"}
    >
    {locationInput && (
      <Box 
        pad="large"
        width="100%"
        height="100%"
        justify="center"
      >       
        <ThemeContext.Extend value={{
          global: { focus: { border: { color: 'status-warning' } } },
          textInput: { extend: { 
            color: 'status-warning',
            textAlign: 'center',
            truncate: false
          } }
        }}>
          <TextInput
              plain
              size="large"
              focusIndicator
              placeholder="Type your new location" 
              onChange={(e) => updateLocation(e.target.value)}
              value={state.inputLocation.charAt(0).toUpperCase() + state.inputLocation.substring(1)}
          />
        </ThemeContext.Extend>
        <Heading 
          level="3"
          size="small"
          margin="none"
          color="dark-1" 
          alignSelf="center"
          textAlign="center"
        >
          and choose your search option
        </Heading>
      </Box>
    )}
    {((fetchSuccess || fetchSuccess === '') && !locationInput) && (
      <Box 
        pad="medium"
        width="100%"
        height="100%"
        justify="center"
        >
          <Heading 
            size="small"
            margin="none"
            color="dark-1" 
            alignSelf="center"
          >
            Where to eat in
          </Heading>
          <Heading 
            size="large"
            margin="none"
            truncate={false} 
            textAlign="center"
            color="status-warning" 
          >
            {location}
          </Heading>
      </Box>
    )}
    {(!(fetchSuccess || fetchSuccess === '') && !locationInput) && (
      <Box 
        pad="medium"
        width="100%"
        height="100%"
        align="center"
        justify="center"
        >
          <Map size="large" color="status-warning"/>
          <Heading 
            size="small"
            color="dark-1" 
            alignSelf="center"
            margin={{ 'top': 'large' }}
          >
            Unable to fetch location
          </Heading>
          <Text color="dark-1" textAlign="center" weight="bold">
            Try again or enter your location
          </Text>
      </Box>
    )}
    </Box>
  )
}

export default landing;