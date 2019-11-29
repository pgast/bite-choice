import React, { useState, useEffect } from 'react';
import { Cafeteria, Alert } from 'grommet-icons';
import { Box, Heading, Text } from 'grommet';

import ChoiceView from './ChoiceView';
import ListItem from './ListItem';

const resultList = ({ data, randomSorting, isCustom, toggleUi, customSearchTerms }) => {
  const [displayItems, setDisplayItems] = useState([{ 
    name: 'Fetching', 
    categories: [{ title: '' }] 
  }]);

  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    console.log('setting states');
    if (isCustom) {
      setStatesCustom(data);
    } else {
      setStatesFromArray(data);
    }
  }, [data, setBusinesses]);

  const getIndeces = (businesses) => {
    let indeces = [];
    if (businesses.length <= 3) {
      indeces.push(0, 2);
    } else if (businesses.length !== 0) {
      while (indeces.length < 3) {
        let number = Math.floor(Math.random() * Math.floor(businesses.length));
        if (!indeces.includes(number)) {
          indeces.push(number);
        }
      };
    }
    return indeces;
  }

  const randomPicks = (array) => {
    let results = getIndeces(array).map(el => {
      return array[el];
    })
    return results;
  }

  const setStatesCustom = async (inputData) => {
    let data = await inputData;

    if (customSearchTerms.searchTerms.length === 0) {
      setStatesFromArray(data);
    } else if (customSearchTerms.searchTerms.length === 1) {
      setStatesFromArray(data[0]);
    } else {
      setStatesFromTerms(data);
    }
  }

  const setStatesFromTerms = async (inputData) => {
    let newData = await inputData;
    let newDisplayItems = [];

    if (randomSorting) {
      let allResults = [];   
      newData.forEach(item => {
        allResults = [...allResults, ...item];
      });
      setStatesFromArray(allResults);

    } else {

      while (newDisplayItems.length < 3) {
        let emptyArrays = newData.every(item => item.length === 0);

        if(emptyArrays) break;
        
        for (let j=0; j<newData.length; j++) {
          if(newData[j].length !== 0) {
            newDisplayItems.push(newData[j].shift());
          }

          if(newDisplayItems.length === 3) break;
        }
      }
      setBusinesses(newData);
      setDisplayItems(newDisplayItems);
    }
  }
 
  const setStatesFromArray = async (inputData) => {
    let newData = await inputData;
    let newDisplayItems = [];

    if (newData == "error" || newData === undefined) {
      newDisplayItems = [{ name: "Error", categories: [{ title: '' }] }];
    } else if (newData.length < 3 && newData.length !== 0) {
      newDisplayItems = newData;
    } else if (newData.length > 3) {
      if (randomSorting) {
        newDisplayItems = randomPicks(newData);
      } else {
        newDisplayItems = [newData[0], newData[1], newData[2]];
      }

      for (let i=0; i<newDisplayItems.length; i++) {
        let item = newData.indexOf(newDisplayItems[i]);
        if (item > -1) { newData.splice(item, 1) };
      }
    }
    
    setBusinesses(newData);
    setDisplayItems(newDisplayItems); 
  }

  const removeItem = (passedIndex) => {
    let newDisplayItems = displayItems.filter((el, index) => passedIndex !== index);
    let newState = businesses;
    let newItem;

    if (randomSorting) {
      newItem = newState[getIndeces(newState)[0]];
      newState = newState.filter(el => newItem.name !== el.name);
    } else {
      if (customSearchTerms.searchTerms.length > 1) {
        let newEntry = undefined;

        while (newEntry === undefined) {
          let emptyArrays = newState.every(item => item.length === 0);
          if(emptyArrays) break;
          let pickedArray = Math.floor(Math.random() * Math.floor(newState.length));
          if (newState[pickedArray].length !== 0) { newEntry = newState[pickedArray].shift() }; 
        }
        
        newItem = newEntry;

      } else {
        newItem = newState.shift();
      }
    }

    if (newItem !== undefined) { newDisplayItems.push(newItem) };
    
    setBusinesses(newState);
    setDisplayItems(newDisplayItems);

    console.log(businesses);
    console.log(displayItems);
  }


  return (
    <Box height={isCustom ? "75%" : "85%"} align="center" justify="evenly">
      {/* LIST ITEMS */}
      {displayItems.length > 1 && 
        <React.Fragment>
          {displayItems.map((el, index) => {
            return <ListItem key={index} item={el} removeItem={() => removeItem(index)}/>
          })}
        </React.Fragment>
      }

      {/* FETCHING DATA VIEW */}
      {(displayItems.length < 1) &&
        <Box 
          background="status-warning" 
          justify="center" 
          align="center"
          height="100%" 
          width="100%" 
        >
          <Cafeteria size="xlarge" color="light-1" />
          <Heading color="light-1">Fetching Data</Heading>
        </Box>
      }

      {/* ERROR FETCHING SCREEN */}
      {(displayItems.length === 1 && displayItems[0].name === "Error") &&
        <Box 
          background="status-error" 
          justify="center" 
          align="center"
          height="100%" 
          width="100%"
          pad="large" 
        >
          <Alert size="xlarge" />
          <Heading color="light-1">Oops..</Heading>
          <Text textAlign="center" weight="bold">
            There was an error fetching the information. This might be due to:
          </Text>
          <ul>
            <li><Text>Your internet connection</Text></li>
            <li><Text>Typos in your search terms</Text></li>
            <li><Text>No businesses available</Text></li>
          </ul>
        </Box>
      }

      {/* LAST FOOD CHOICE AND TRY AGAIN SCREEN */}
      {(displayItems.length === 1 && displayItems[0].name !== "Error" && displayItems[0].name !== "Fetching") && (
        <ChoiceView item={displayItems[0]} toggleUi={toggleUi}/>
      )} 
    </Box>
  );
};

export default resultList;