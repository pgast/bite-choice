import React, { useContext, useEffect } from 'react';

import ResultView from './ResultView';
import { Store } from '../Store';

const randomView = ({ location, toggleUi, data }) => {
  const { dispatch } = useContext(Store);
  useEffect(() => fetchRandomData(), []);
  const fetchRandomData = () => dispatch ({ type: 'FETCH_RANDOM_DATA', payload: location });

  return (
    <ResultView 
      location={location} 
      toggleUi={toggleUi}
      isCustom={false} 
      randomSorting
      data={data} 
    />
  );
};

export default randomView;