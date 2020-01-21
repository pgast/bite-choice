import React from 'react';

import ResultView from './ResultView';
import CustomForm from './CustomForm';

const customView = ({ 
  toggleCustomForm,
  customView, 
  location, 
  toggleUi, 
  data
}) => {
  return (
    <div>
      {customView.resultsMode ? 
        <ResultView 
          randomSorting={customView.sortBy === 'random' ? true : false}
          toggleCustomForm={toggleCustomForm}
          customSearchData={customView}
          toggleUi={toggleUi}
          location={location}
          isCustom={true}
          data={data}
        /> 
        : 
        <CustomForm 
          customView={customView} 
          location={location}
          toggleUi={toggleUi} 
        />}
    </div>
  );
};

export default customView;