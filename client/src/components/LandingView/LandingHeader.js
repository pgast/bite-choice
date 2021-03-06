import React, { useContext } from 'react';

import './style.css';
import { Store } from '../../Store';

const landingHeader = ({ location, fetchSuccess, locationInput }) => {
  const { state, dispatch } = useContext(Store);
  const updateLocation = (payload) => dispatch ({ type: 'UPDATE_LOCATION', payload });

  return (
    <div className="landingHeader" id={locationInput ? "landingHeader--big" : null}>
      {locationInput && (
        <div className="landingHeader__banner--inputLocation"> 
            <input
              type="text"
              placeholder="Type your new location" 
              onChange={(e) => updateLocation(e.target.value)}
              className="landingHeader__banner--inputLocation__textInput"
              value={state.inputLocation.charAt(0).toUpperCase() + state.inputLocation.substring(1)}
            />
          <h3>and choose your search option</h3>
        </div>
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