import React from 'react';

import CustomForm from '../CustomForm';
const ResultView = React.lazy(() => import('../Results'));

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

export default customView;