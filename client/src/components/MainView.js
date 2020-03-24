import React, { useContext, useState } from 'react';
import { Heading, Box, Anchor } from 'grommet';
import { Previous } from 'grommet-icons';
import { Store } from '../Store';
import Landing from './Landing';

import loadable from '@loadable/component';
const CustomView = loadable(() => import('./CustomView'));
const RandomView = loadable(() => import('./RandomView')); 

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
    <>
      {state.ui === 'landing' && (
        <>
          <Box height="60vh">
            {locationInput && (
              <Box height="15%" background="light-1" justify="center">
                <Anchor 
                  size="small" 
                  color="dark-1"
                  icon={<Previous />}
                  margin={{ top: '4px' }}
                  onClick={() => toggleLocationInputView(false)}
                />
              </Box>
            )}
            <Landing 
              location={location} 
              fetchSuccess={fetchSuccess} 
              locationInput={locationInput}
            /> 
          </Box>
          <Box height="40vh" animation="slideUp">
            <Box
              align="center"
              justify="center"
              height={locationInput ? "65%" : "50%"}
              background={{ 
                'opacity': validBtn() ? 'strong' : 'medium', 
                'color': 'status-warning'
              }}
              onClick={validBtn() ? () => toggleUi('random') : null}
            >
              <Heading 
                level="3"
                size="small" 
                textAlign="center" 
                color={validBtn()  ? "" : "dark-6"}
                >
                FIND ME PLACES
              </Heading>
            </Box>
            <Box
              height="35%"
              align="center"
              justify="center"
              background={{
                'opacity': validBtn() ? 'strong' : 'medium',
                'color': 'accent-4'
              }}
              onClick={validBtn() ? () => toggleUi('custom') : null}
            >
              <Heading 
                level="3"
                size="small" 
                textAlign="center" 
                color={validBtn() ? "" : "dark-6"}
              >
                CUSTOM SEARCH
              </Heading>
            </Box>
            {!locationInput && (
              <Box 
                height="20%" 
                justify="center" 
                background="dark-1" 
                onClick={() => toggleLocationInputView(true)}
              >
                <Heading 
                  level="5" 
                  size="xsmall" 
                  margin="none" 
                  textAlign="center"
                  alignSelf="center"
                >
                  WRONG LOCATION? FIX IT HERE
                </Heading>
              </Box>
            )}
          </Box>
        </>
      )}
      {state.ui === 'custom' && (
        <CustomView 
          data={state.data}
          toggleUi={toggleUi}
          customView={state.customView}
          toggleCustomForm={toggleCustomForm}
          location={locationInput ? state.inputLocation : location}
        />
      )} 
      {state.ui === 'random' && (
        <RandomView 
          data={state.data}
          locationInput={locationInput}
          toggleUi={() => toggleUi('landing')} 
          location={locationInput ? state.inputLocation : location}
        />
      )}
    </>
  );
};

export default mainView;