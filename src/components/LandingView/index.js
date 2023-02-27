import React from 'react';

import './style.css';
import LandingHeader from './LandingHeader';
import LandingButtons from './LandingButtons';

const landingView = ({ 
  location, 
  validBtn, 
  toggleUi, 
  fetchSuccess, 
  locationInput, 
  toggleLocationInputView, 
}) => {
  return (
    <div className="landingView">
      {locationInput && (
        <div className="inputLocation__header">
          <i 
            onClick={() => toggleLocationInputView(false)}
            className="fas fa-chevron-left inputLocation__header__backBtn" 
          />
        </div>
      )}
      <LandingHeader 
        location={location} 
        fetchSuccess={fetchSuccess} 
        locationInput={locationInput}
      /> 
      <LandingButtons 
        validBtn={validBtn}
        toggleUi={toggleUi}
        locationInput={locationInput}
        toggleLocationInputView={toggleLocationInputView}
      />
    </div>
  )
}

export default landingView;