import React, { useState, useContext } from 'react';

import './style.css';
import { Store } from '../../Store';

const customForm = ({ toggleUi, customView, location }) => {
  const { dispatch } = useContext(Store);
  const [currentTerm, setCurrentTerm] = useState("");
  const [sortBy, setSortBy] = useState(customView.sortBy);
  const [searchTerms, setSearchTerms] = useState(customView.searchTerms);

  const submitSearchTerms = (e) => {
    e.preventDefault();
    let payload = { sortBy, searchTerms, location };
    return dispatch ({ type: 'SUBMIT_SEARCH', payload });
  };

  const addTerm = () => {
    if (currentTerm !== '' && searchTerms.length < 3) {
      let newTerms = [...searchTerms];
      newTerms.push(currentTerm);
      setSearchTerms(newTerms);
      setCurrentTerm('');
    }
  };

  const removeTerm = (inputIndex) => {
    const newSearchTerms = [...searchTerms].filter((el, inx) => inx !== inputIndex);
    setSearchTerms(newSearchTerms);
  };

  return (
    <div 
    // height="100vh" 
    // width="100%" 
    // animation="fadeIn"
    >
        <div 
          // direction="row" 
          // height="15%" 
          // align="center"
        >
          <div 
            // width="20%"
          >
            {/* <Anchor 
              size="small"
              color="dark-1"
              icon={<Previous />} 
              margin={{ top: '4px' }} 
              onClick={() => toggleUi('landing')}
            /> */}
          </div>
          <div 
            // width="60%" 
            // align="center" 
            // justify="center"
          >
            <p 
              // size="large" 
              // weight="bold" 
              // color="status-warning"
              >
              Custom Search
            </p>
          </div>
        </div>
        <div 
          // height="69%" 
          // width="260px"
          // align="center"
          // alignSelf="center"
        >
          <div 
            // justify="center" 
            // width="100%"
          >
            <form 
              // label="Sort by"
              >
              {/* <Select
                plain
                size="medium"
                value={sortBy}
                alignSelf="center"
                onChange={({ option }) => setSortBy(option)}
                options={['Best Match', 'Rating', 'Random']}
              /> */}
            </form>
          </div>
          <div 
            // justify="center" 
            // width="100%" 
            // margin={{top: '22px'}}
            >
              <form label="Search for:">
                <input 
                  type="text"
                  size="small"
                  value={currentTerm}
                  placeholder="e.g. Pizza, Tacos, Bar" 
                  onChange={(e) => setCurrentTerm(e.target.value)}
                />
              </form>
            <button 
              // alignSelf="center"
              // color="status-warning"
              onClick={(e) => addTerm(e)} 
              // primary={searchTerms.length === 3 ? true : false}
              disabled={searchTerms.length === 3 ? true : false}
              label={ searchTerms.length === 3 ? "Click on terms to delete" : "Add"} 
            />
          </div> 
          <div 
            // width="100%"
            // height="50%"
            // align="center" 
            // justify="evenly"
            // pad={{ top: 'small', bottom: 'small' }}
          >
            {searchTerms.map((el, index) => {
              return (
                <div 
                  key={index} 
                  // round="xlarge"
                  // direction="row"
                  // background="light-2" 
                  onClick={() => removeTerm(index)} 
                  // pad={{ top: 'xsmall', bottom: 'xsmall', left: 'small', right: 'small' }}
                >
                  <p 
                    // textAlign="center" 
                    // weight="bold" 
                    // margin={{ 'right': 'small' }}
                    >
                    {el}
                  </p>
                  {/* <FormClose color="status-warning"/> */}
                </div>
              )
            })}
          </div>  
        </div>
      <div
        // height="16%" 
        // align="center" 
        // justify="center"
        // background="status-warning"
        // onClick={(e) => submitSearchTerms(e)}
      >
        <h3>
          FIND ME PLACES
        </h3>
      </div>
    </div>
  );
};

export default customForm;