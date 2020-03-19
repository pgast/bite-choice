import React, { useState, useContext } from 'react';
import { Previous, FormClose } from 'grommet-icons';
import { 
  Box, 
  Text, 
  Button, 
  Select, 
  Anchor, 
  Heading, 
  TextInput, 
  FormField, 
  ThemeContext, 
} from 'grommet';

import { Store } from '../Store';

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
    <Box height="100vh" width="100%" animation="fadeIn">
        <Box direction="row" height="15%" align="center">
          <Box width="20%">
            <Anchor 
              size="small"
              color="dark-1"
              icon={<Previous />} 
              margin={{ top: '4px' }} 
              onClick={() => toggleUi('landing')}
            />
          </Box>
          <Box width="60%" align="center" justify="center">
            <Text size="large" weight="bold" color="status-warning">
              Custom Search
            </Text>
          </Box>
        </Box>
        <Box 
          height="69%" 
          width="260px"
          align="center"
          alignSelf="center"
        >
          <Box justify="center" width="100%">
            <ThemeContext.Extend value={{
              formField: { 
                label: { margin: { 'horizontal': 'none', 'vertical': 'small' } },
                border: { color: '#ffffff' } 
              },
              select: { 
                icons: { color: 'status-warning' }, 
                background: 'light-2'
              }
            }}>
              <FormField label="Sort by">
                <Select
                  plain
                  size="medium"
                  value={sortBy}
                  alignSelf="center"
                  onChange={({ option }) => setSortBy(option)}
                  options={['Best Match', 'Rating', 'Random']}
                />
              </FormField>
            </ThemeContext.Extend>
          </Box>
          <Box justify="center" width="100%" margin={{top: '22px'}}>
            <ThemeContext.Extend value={{
              formField: { label: { margin: { 'horizontal': 'none', 'vertical': 'none' } } }
            }}>
              <FormField label="Search for:">
                <TextInput 
                  size="small"
                  value={currentTerm}
                  placeholder="e.g. Pizza, Tacos, Bar" 
                  onChange={(e) => setCurrentTerm(e.target.value)}
                />
              </FormField>
            </ThemeContext.Extend>
            <Button 
              alignSelf="center"
              color="status-warning"
              onClick={(e) => addTerm(e)} 
              primary={searchTerms.length === 3 ? true : false}
              disabled={searchTerms.length === 3 ? true : false}
              label={ searchTerms.length === 3 ? "Click on terms to delete" : "Add"} 
            />
          </Box> 
          <Box 
            width="100%"
            height="50%"
            align="center" 
            justify="evenly"
            pad={{ top: 'small', bottom: 'small' }}
          >
            {searchTerms.map((el, index) => {
              return (
                <Box 
                  key={index} 
                  round="xlarge"
                  direction="row"
                  background="light-2" 
                  onClick={() => removeTerm(index)} 
                  pad={{ top: 'xsmall', bottom: 'xsmall', left: 'small', right: 'small' }}
                >
                  <Text textAlign="center" weight="bold" margin={{ 'right': 'small' }}>
                    {el}
                  </Text>
                  <FormClose color="status-warning"/>
                </Box>
              )
            })}
          </Box>  
        </Box>
      <Box
        height="16%" 
        align="center" 
        justify="center"
        background="status-warning"
        onClick={(e) => submitSearchTerms(e)}
      >
        <Heading level="3" size="small">
          FIND ME PLACES
        </Heading>
      </Box>
    </Box>
  );
};

export default React.memo(customForm);