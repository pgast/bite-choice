import React from 'react';
import ResultList from './ResultList';
import ResultHeader from './ResultHeader';

import './style.css';

const resultView = ({ 
  data, 
  toggleUi, 
  isCustom, 
  location, 
  randomSorting, 
  customSearchData, 
  toggleCustomForm,
}) => {

  return (
    <div 
    // height="100vh"
    >
      <ResultHeader 
        toggleUi={toggleUi} 
        isCustom={isCustom} 
        location={location} 
        customSearchData={customSearchData}
        toggleCustomForm={toggleCustomForm}
      />
      <ResultList 
        data={data} 
        toggleUi={toggleUi} 
        isCustom={isCustom} 
        randomSorting={randomSorting}
        customSearchTerms={customSearchData}
      />
      <div 
        // height="8%" 
        // justify="center"
        >
          <div style={{
              opacity: 0.2,
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
              alignItems: 'center',
            }}
          >
            <a 
              style={{ 'textDecoration': 'none' }} 
              href="http://www.github.com/pgast" 
            >
              &lt;/&gt; pgast
            </a>
          </div>
      </div>
    </div>
  );
};

export default resultView;