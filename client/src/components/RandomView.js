import React, { useContext, useEffect } from 'react';
import ResultView from './ResultView';
import { Store } from '../Store';

const randomView = ({ location, toggleUi, data }) => {
  const { dispatch } = useContext(Store);
  useEffect(() => fetchRandomData(), []);
  const fetchRandomData = () => dispatch ({ type: 'FETCH_RANDOM_DATA', payload: location });
  return (
    <ResultView 
      data={data} 
      randomSorting
      isCustom={false} 
      toggleUi={toggleUi}
      location={location} 
    />
  );
};

export default randomView;