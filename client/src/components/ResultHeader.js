import React from 'react';
import { Box, Anchor, Text } from 'grommet';
import { Previous } from 'grommet-icons';

const resultHeader = ({ 
  toggleUi, 
  location, 
  isCustom, 
  toggleCustomForm, 
  customSearchData, 
}) => {
  return (
    <>
      {!isCustom && (
        <Box 
          height="15%" 
          align="center"
          direction="row" 
          justify="around"
          background="light-1"
          alignContent="center"
          pad={{ left: 'small', right: 'small' }}
        >
          <Box width="20%">       
            <Anchor 
              size="small" 
              color="dark-1"
              onClick={toggleUi}
              icon={<Previous />}
              margin={{ top: '4px' }}
            />
          </Box>
          <Box width="60%" align="center">
            <Text size="small" weight="bold">
              Eating in
            </Text>
            <Text 
              size="large" 
              weight="bold" 
              textAlign="center" 
              alignSelf="center"
              color="status-warning" 
            >
              {location}
            </Text>
          </Box>
          <Box width="20%"></Box>
        </Box>
      )}
      {isCustom && (
        <Box 
          height="25%" 
          align="center"
          justify="around"
          background="light-1"
          alignContent="center"
          pad={{ left: 'small', right: 'small' }}
        >
          <Box 
            width="100%" 
            height="50%" 
            align="center"
            direction="row" 
          >
            <Box width="20%">       
              <Anchor 
                size="small" 
                color="dark-1"
                icon={<Previous />}
                margin={{ top: '4px' }}
                onClick={() => toggleCustomForm()}
              />
            </Box>
            <Box width="60%" align="center">
              <Text size="small" weight="bold">
                Eating in
              </Text>
              <Text size="large" weight="bold" color="status-warning">
                {location}
              </Text>
            </Box>
            <Box width="20%"></Box>
          </Box>
          <Box height="60%" width="100%">
            <Box 
              gap="small"
              align="end" 
              height="50%" 
              direction="row" 
              justify="center" 
            >
              {customSearchData.searchTerms.map((el, index) => {
                return (
                  <Box 
                    pad={{ 
                      left: 'small', 
                      top: 'xsmall', 
                      right: 'small', 
                      bottom: 'xsmall', 
                    }}
                    background="light-3" 
                    round="xlarge"
                    key={index} 
                  >
                    <Text textAlign="center" weight="bold" size="xsmall">
                      {el}
                    </Text>
                  </Box>
                )
              })} 
            </Box>
            <Box 
              align="end" 
              width="100%" 
              height="40%" 
              direction="row"
              justify="center" 
            >
              <Text size="small" weight="bold">
                Sorted by
              </Text>
              <Text 
                size="small" 
                weight="bold" 
                color="status-warning" 
                margin={{ left: 'xsmall' }}
              >
                {customSearchData.sortBy}
              </Text>
            </Box>      
          </Box>
        </Box>
      )}
    </>
  );
};

export default resultHeader;