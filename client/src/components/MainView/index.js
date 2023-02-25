import React, { useContext, useState } from 'react';

import { Store } from '../../Store';
import LandingView from '../LandingView';
const CustomView = React.lazy(() => import('../CustomView'));
const RandomView = React.lazy(() => import('../RandomView'));

function validBtn(eventA, eventB) {
  if (eventA || eventB) return true
  return false
}

const mainView = ({ location, fetchSuccess }) => {
  const { state, dispatch } = useContext(Store);
  const [locationInput, setLocationInput] = useState(false);
  const validUserLocation = state.inputLocation !== '' ? true : false;

  const clearLocation = () => dispatch ({ type: 'CLEAR_LOCATION' });
  const toggleUi = ui => dispatch ({ type: 'TOGGLE_UI', payload: ui });
  const toggleCustomForm = () => dispatch({ type: 'TOGGLE_CUSTOM_FORM' });

  let eventA = locationInput && validUserLocation ? true : false;
  let eventB = !locationInput && fetchSuccess ? true : false;

  const toggleLocationInputView = input => {
    clearLocation();
    setLocationInput(input);
  }

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      {state.ui === 'landing' && (
        <LandingView 
          location={location} 
          validBtn={() => validBtn(eventA, eventB)}
          toggleUi={toggleUi}
          fetchSuccess={fetchSuccess} 
          locationInput={locationInput}
          toggleLocationInputView={toggleLocationInputView}
        />
      )}
      <React.Suspense fallback={<></>}>
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
      </React.Suspense>
    </div>
  );
};

export default mainView;