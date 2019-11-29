import React, { useState, useContext } from 'react';
import { Previous, FormClose } from 'grommet-icons';
import { 
  ThemeContext, 
  FormField, 
  TextInput, 
  Heading, 
  Button, 
  Select, 
  Anchor, 
  Text, 
  Box 
} from 'grommet';

import { Store } from '../Store';

const customForm = ({ toggleUi, customView, location }) => {
  const [searchTerms, setSearchTerms] = useState(customView.searchTerms);
  const [sortBy, setSortBy] = useState(customView.sortBy);
  const [currentTerm, setCurrentTerm] = useState("");
  const { dispatch } = useContext(Store);

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
        {/* HEADER */}
        <Box direction="row" height="15%" align="center">
          <Box width="20%">
            <Anchor 
              onClick={() => toggleUi('landing')}
              margin={{ top: "4px" }} 
              icon={<Previous />} 
              color="dark-1"
              size="small"
            />
          </Box>
          <Box width="60%" align="center" justify="center">
            <Text size="large" weight="bold" color="status-warning">
              Custom Search
            </Text>
          </Box>
        </Box>
        {/* FORM AREA WITH INPUTS */}
        <Box 
          alignSelf="center"
          align="center"
          height="69%" 
          width="60%"
        >

          {/* BOTON SELECT */}
          <Box height="20%" justify="center" width="100%">
            <ThemeContext.Extend value={{
              formField: { 
                label: { margin: { "horizontal": "none", "vertical": "small" } },
                border: { color: "#ffffff" } 
              },
              select: { 
                icons: { color: "status-warning" }, 
                background: "light-2"
              }
            }}>
              <FormField label="Sort by">
                <Select
                  options={['Best Match', 'Rating', 'Random']}
                  onChange={({ option }) => setSortBy(option)}
                  alignSelf="center"
                  value={sortBy}
                  size="medium"
                  plain
                />
              </FormField>
            </ThemeContext.Extend>
          </Box>





          {/* TEXT INPUT */}
          <Box height="40%" justify="center" width="100%">
            <ThemeContext.Extend value={{
              formField: { label: { margin: { "horizontal": "none", "vertical": "none" } } }
            }}>
              <FormField label="Search for:">
                <TextInput 
                  onChange={(e) => setCurrentTerm(e.target.value)}
                  placeholder="e.g. Pizza, Tacos, Bar" 
                  value={currentTerm}
                  size="small"
                />
              </FormField>
            </ThemeContext.Extend>
            <Button 
              label={ searchTerms.length === 3 ? "Click on terms to delete" : "Add"} 
              disabled={searchTerms.length === 3 ? true : false}
              primary={searchTerms.length === 3 ? true : false}
              onClick={(e) => addTerm(e)} 
              color="status-warning"
              alignSelf="center"
            />
          </Box> 


          {/* SEARCH TERMS */}
          <Box 
            pad={{ top: "small", bottom: "medium" }}
            justify="around"
            align="center" 
            height="40%"
            width="100%" 
          >
            {searchTerms.map((el, index) => {
              return (
                <Box 
                  pad={{ top: "xsmall", bottom: "xsmall", left: "small", right: "small" }}
                  onClick={() => removeTerm(index)} 
                  background="light-2" 
                  round="xlarge"
                  direction="row"
                  key={index} 
                >
                  <Text textAlign="center" weight="bold" margin={{ "right": "small" }}>
                    {el}
                  </Text>
                  <FormClose color="status-warning"/>
                </Box>
              )
            })}
          </Box>  
        </Box>
      {/* BOTON DE FIND ME PLACES */}
      <Box
        onClick={(e) => submitSearchTerms(e)}
        background="status-warning"
        justify="center"
        align="center" 
        height="16%" 
      >
        <Heading level="3" size="small">
          FIND ME PLACES
        </Heading>
      </Box>
    </Box>
  );
};

export default customForm;