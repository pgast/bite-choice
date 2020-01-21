import React from 'react';
import { Box, Anchor, Text } from 'grommet';
import { Previous } from 'grommet-icons';

const resultHeader = ({ 
  customSearchData, 
  toggleCustomForm, 
  location, 
  isCustom, 
  toggleUi 
}) => {
  return (
    <React.Fragment>
      {!isCustom && (
        <Box 
          pad={{ left: 'small', right: 'small' }}
          alignContent="center"
          background="light-1"
          justify="around"
          direction="row" 
          align="center"
          height="15%" 
        >
          <Box width="20%">       
            <Anchor 
              onClick={() => toggleUi('landing')}
              margin={{ top: '4px' }}
              icon={<Previous />}
              color="dark-1"
              size="small" 
            />
          </Box>
          <Box width="60%" align="center">
            <Text size="small" weight="bold">
              Eating in
            </Text>
            <Text 
              color="status-warning" 
              alignSelf="center"
              textAlign="center" 
              weight="bold" 
              size="large" 
            >
              {location}
            </Text>
          </Box>
          <Box width="20%"></Box>
        </Box>
      )}
      {isCustom && (
        <Box 
          pad={{ left: 'small', right: 'small' }}
          alignContent="center"
          background="light-1"
          justify="around"
          align="center"
          height="25%" 
        >
          <Box 
            direction="row" 
            align="center"
            height="50%" 
            width="100%" 
          >
            <Box width="20%">       
              <Anchor 
                onClick={() => toggleCustomForm()}
                margin={{ top: '4px' }}
                icon={<Previous />}
                color="dark-1"
                size="small" 
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
              justify="center" 
              direction="row" 
              height="50%" 
              align="end" 
              gap="small"
            >
              {customSearchData.searchTerms.map((el, index) => {
                return (
                  <Box 
                    pad={{ 
                      bottom: 'xsmall', 
                      right: 'small', 
                      top: 'xsmall', 
                      left: 'small', 
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
              justify="center" 
              direction="row"
              height="40%" 
              width="100%" 
              align="end" 
            >
              <Text size="small" weight="bold">
                Sorted by
              </Text>
              <Text 
                margin={{ left: 'xsmall' }}
                color="status-warning" 
                weight="bold" 
                size="small" 
              >
                {customSearchData.sortBy}
              </Text>
            </Box>      
          </Box>
        </Box>
      )}
    </React.Fragment>
  );
};

export default resultHeader;