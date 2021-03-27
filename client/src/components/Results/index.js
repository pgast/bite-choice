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
    <div className="resultView">
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
      <div className="resultView__watermark">
        <a href="http://www.github.com/pgast">
          &lt;/&gt; pgast
        </a>
      </div>
    </div>
  );
};

export default resultView;