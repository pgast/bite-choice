import React, { useContext } from 'react';
import { Box, Heading, TextInput, ThemeContext, Text } from 'grommet';
import { Map } from 'grommet-icons';

import { Store } from '../Store';

const landing = ({ location, fetchSuccess, locationInput }) => {
  const { state, dispatch } = useContext(Store);
  const updateLocation = (payload) => dispatch ({ type: 'UPDATE_LOCATION', payload });

  return (
    <Box 
      height={locationInput ? "85%" : "100%"}
      animation="fadeIn"
      justify="center" 
      align="center" 
      width="100vw"
    >
    {locationInput && (
      <Box 
        justify="center"
        height="100%"
        width="100%"
        pad="large"
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
            value={state.inputLocation.charAt(0).toUpperCase() + state.inputLocation.substring(1)}
            onChange={(e) => updateLocation(e.target.value)}
            placeholder="Type your new location" 
            focusIndicator
            size="large"
            plain
          />
        </ThemeContext.Extend>
        <Heading 
          textAlign="center"
          alignSelf="center"
          color="dark-1" 
          margin="none"
          level="3"
          size="small"
        >
          and choose your search option
        </Heading>
      </Box>
    )}
    {((fetchSuccess || fetchSuccess === '') && !locationInput) && (
      <Box 
        justify="center"
        height="100%"
        width="100%"
        pad="medium"
        >
          <Heading 
            alignSelf="center"
            color="dark-1" 
            margin="none"
            size="small"
          >
            Where to eat in
          </Heading>
          <Heading 
            color="status-warning" 
            textAlign="center"
            truncate={false} 
            margin="none"
            size="large"
          >
            {location}
          </Heading>
      </Box>
    )}
    {(!(fetchSuccess || fetchSuccess === '') && !locationInput) && (
      <Box 
        justify="center"
        align="center"
        height="100%"
        width="100%"
        pad="medium"
        >
          <Map size="large" color="status-warning"/>
          <Heading 
            margin={{ 'top': 'large' }}
            alignSelf="center"
            color="dark-1" 
            size="small"
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