import React from 'react';
import ResultView from './ResultView';
import CustomForm from './CustomForm';

const customView = ({ 
  data,
  location, 
  toggleUi, 
  customView, 
  toggleCustomForm,
}) => {
  return (
    <>
      {customView.resultsMode ? 
        <ResultView 
          isCustom
          data={data}
          toggleUi={toggleUi}
          location={location}
          customSearchData={customView}
          toggleCustomForm={toggleCustomForm}
          randomSorting={customView.sortBy === 'random' ? true : false}
        /> 
        : 
        <CustomForm 
          location={location}
          toggleUi={toggleUi} 
          customView={customView} 
        />}
    </>
  );
};

export default React.memo(customView);