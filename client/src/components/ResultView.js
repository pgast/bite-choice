import React from 'react';
import { Box } from 'grommet';

import ResultHeader from './ResultHeader';
import ResultList from './ResultList';


const resultView = ({ 
  toggleCustomForm,
  customSearchData, 
  randomSorting, 
  location, 
  isCustom, 
  toggleUi, 
  data 
}) => {

  return (
    <Box height="100vh">
      <ResultHeader 
        toggleCustomForm={toggleCustomForm}
        customSearchData={customSearchData}
        location={location} 
        isCustom={isCustom} 
        toggleUi={toggleUi} 
      />
      <ResultList 
        customSearchTerms={customSearchData}
        randomSorting={randomSorting}
        isCustom={isCustom} 
        toggleUi={toggleUi} 
        data={data} 
      />
    </Box>
  );
};

export default resultView;