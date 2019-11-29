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

  return (
    <React.Fragment>
      {state.ui === 'landing' && (
        <React.Fragment>
          <Box height="60vh">
            {locationInput && 
              <Box height="15%" background="light-1" justify="center">
                <Anchor 
                  onClick={() => toggleLocationInputView(false)}
                  margin={{ top: "4px" }}
                  icon={<Previous />}
                  color="dark-1"
                  size="small" 
                />
              </Box>
            }
            <Landing 
              locationInput={locationInput}
              fetchSuccess={fetchSuccess} 
              location={location} 
            /> 
          </Box>
          <Box height="40vh" animation="slideUp">
            <Box
              onClick={(fetchSuccess || validUserLocation) ? () => toggleUi('random') : null}
              height={locationInput ? "65%" : "50%"}
              background={{ 
                "opacity": fetchSuccess || validUserLocation ? "strong" : "medium", 
                "color": "status-warning"
              }}
              justify="center"
              align="center"
            >
              <Heading 
                color={fetchSuccess || validUserLocation  ? "" : "dark-6"}
                textAlign="center" 
                size="small" 
                level="3"
                >
                FIND ME PLACES
              </Heading>
            </Box>
            <Box
              onClick={(fetchSuccess || validUserLocation) ? () => toggleUi('custom') : null}
              background={{
                "opacity": fetchSuccess || validUserLocation ? "strong" : "medium",
                "color": "accent-4"
              }}
              justify="center"
              align="center"
              height="35%"
            >
              <Heading 
                color={fetchSuccess || validUserLocation ? "" : "dark-6"}
                textAlign="center" 
                size="small" 
                level="3"
              >
                CUSTOM SEARCH
              </Heading>
            </Box>
            {!locationInput  &&
              <Box 
                onClick={() => toggleLocationInputView(true)}
                background="dark-1" 
                justify="center" 
                height="15%" 
              >
                <Heading 
                  alignSelf="center"
                  textAlign="center"
                  size="xsmall" 
                  margin="none" 
                  level="6" 
                >
                  WRONG LOCATION? FIX IT HERE
                </Heading>
              </Box>
            }
          </Box>
        </React.Fragment>
      )}
      {state.ui === 'custom' && 
        <CustomView 
          location={locationInput ? state.inputLocation : location}
          toggleCustomForm={toggleCustomForm}
          customView={state.customView}
          toggleUi={toggleUi}
          data={state.data}
        />
      } 
      {state.ui === 'random' && 
        <RandomView 
          location={locationInput ? state.inputLocation : location}
          locationInput={locationInput}
          toggleUi={toggleUi} 
          data={state.data}
        />
      }
    </React.Fragment>
  );
};

export default mainView;