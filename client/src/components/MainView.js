import React, { useContext, useState } from 'react';
import { Heading, Box, Anchor } from 'grommet';
import { Previous } from 'grommet-icons';

import CustomView from './CustomView';
import RandomView from './RandomView';
import { Store } from '../Store';
import Landing from './Landing';

const mainView = ({ location, fetchSuccess }) => {
  const [locationInput, setLocationInput] = useState(false);
  const { state, dispatch } = useContext(Store);
  const validUserLocation = state.inputLocation !== '' ? true : false;

  const toggleCustomForm = () => dispatch({ type: 'TOGGLE_CUSTOM_FORM' });
  const toggleUi = (ui) => dispatch ({ type: 'TOGGLE_UI', payload: ui });
  const clearLocation = () => dispatch ({ type: 'CLEAR_LOCATION' });

  const toggleLocationInputView = (input) => {
    clearLocation();
    setLocationInput(input);
  }

  const validBtn = () => {
    let eventA = locationInput && validUserLocation ? true : false;
    let eventB = !locationInput && fetchSuccess ? true : false;
    if(eventA || eventB) return true;
    return false;
  }

  return (
    <React.Fragment>
      {state.ui === 'landing' && (
        <React.Fragment>
          <Box height="60vh">
            {locationInput && (
              <Box height="15%" background="light-1" justify="center">
                <Anchor 
                  onClick={() => toggleLocationInputView(false)}
                  margin={{ top: '4px' }}
                  icon={<Previous />}
                  color="dark-1"
                  size="small" 
                />
              </Box>
            )}
            <Landing 
              locationInput={locationInput}
              fetchSuccess={fetchSuccess} 
              location={location} 
            /> 
          </Box>
          <Box height="40vh" animation="slideUp">
            <Box
              onClick={validBtn() ? () => toggleUi('random') : null}
              height={locationInput ? "65%" : "50%"}
              background={{ 
                'opacity': validBtn() ? 'strong' : 'medium', 
                'color': 'status-warning'
              }}
              justify="center"
              align="center"
            >
              <Heading 
                color={validBtn()  ? "" : "dark-6"}
                textAlign="center" 
                size="small" 
                level="3"
                >
                FIND ME PLACES
              </Heading>
            </Box>
            <Box
              onClick={validBtn() ? () => toggleUi('custom') : null}
              background={{
                'opacity': validBtn() ? 'strong' : 'medium',
                'color': 'accent-4'
              }}
              justify="center"
              align="center"
              height="35%"
            >
              <Heading 
                color={validBtn() ? "" : "dark-6"}
                textAlign="center" 
                size="small" 
                level="3"
              >
                CUSTOM SEARCH
              </Heading>
            </Box>
            {!locationInput && (
              <Box 
                onClick={() => toggleLocationInputView(true)}
                background="dark-1" 
                justify="center" 
                height="20%" 
              >
                <Heading 
                  alignSelf="center"
                  textAlign="center"
                  size="xsmall" 
                  margin="none" 
                  level="5" 
                >
                  WRONG LOCATION? FIX IT HERE
                </Heading>
              </Box>
            )}
          </Box>
        </React.Fragment>
      )}
      {state.ui === 'custom' && (
        <CustomView 
          location={locationInput ? state.inputLocation : location}
          toggleCustomForm={toggleCustomForm}
          customView={state.customView}
          toggleUi={toggleUi}
          data={state.data}
        />
      )} 
      {state.ui === 'random' && (
        <RandomView 
          location={locationInput ? state.inputLocation : location}
          locationInput={locationInput}
          toggleUi={toggleUi} 
          data={state.data}
        />
      )}
    </React.Fragment>
  );
};

export default mainView;