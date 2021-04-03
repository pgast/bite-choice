import React, { useContext } from 'react';

import './style.css';
import LandingHeaderInput from './LandingHeaderInput';
import { Store } from '../../Store';

const landingHeader = ({ location, fetchSuccess, locationInput }) => {
  const { state, dispatch } = useContext(Store);
  const updateLocation = (payload) => dispatch ({ type: 'UPDATE_LOCATION', payload });

  return (
    <div className="landingHeader" id={locationInput ? "landingHeader--big" : null}>
      {locationInput && (
        <LandingHeaderInput updateLocation={updateLocation} inputLocation={state.inputLocation} />
      )}
      {((fetchSuccess || fetchSuccess === '') && !locationInput) && (
        <div className="landingHeader__banner--city">
          <h1>Where to eat in</h1>
          <h1>{location}</h1>
        </div>
      )}
      {(!(fetchSuccess || fetchSuccess === '') && !locationInput) && (
        <div className="landingHeader__banner--error">
            <i class="fas fa-map-marked-alt" />
            <h1>Unable to fetch location</h1>
            <h3>Try again or enter your location</h3>
        </div>
      )}
    </div>
  )
}

export default landingHeader;