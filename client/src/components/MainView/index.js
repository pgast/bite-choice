import React, { useContext, useState } from 'react';

import { Store } from '../../Store';
import CustomView from '../CustomView';
import RandomView from '../RandomView';
import LandingView from '../LandingView';

const mainView = ({ location, fetchSuccess }) => {
  const { state, dispatch } = useContext(Store);
  const [locationInput, setLocationInput] = useState(false);
  const validUserLocation = state.inputLocation !== '' ? true : false;

  const clearLocation = () => dispatch ({ type: 'CLEAR_LOCATION' });
  const toggleUi = ui => dispatch ({ type: 'TOGGLE_UI', payload: ui });
  const toggleCustomForm = () => dispatch({ type: 'TOGGLE_CUSTOM_FORM' });

  const toggleLocationInputView = input => {
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
    <div style={{ height: '100vh', width: '100vw' }}>
      {state.ui === 'landing' && (
        <LandingView 
          location={location} 
          validBtn={validBtn}
          toggleUi={toggleUi}
          fetchSuccess={fetchSuccess} 
          locationInput={locationInput}
          toggleLocationInputView={toggleLocationInputView}
        />
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
    </div>
  );
};

export default mainView;