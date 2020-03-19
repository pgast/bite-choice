import React from 'react';
import { Box, Text, Anchor } from 'grommet';

const ListItem = ({ item, removeItem }) => {
  return (
    <Box 
      pad="small"
      height="27%" 
      round="small" 
      width="260px"
      align="center"
      justify="around"
      background="accent-4"
    >
      <Box>
        <Text 
          weight="bold"
          textAlign="center" 
          margin={{bottom: 'xsmall'}} 
        >
          {item.name}
        </Text>
        <Box 
          gap="medium" 
          width="100%"
          direction="row" 
          justify="center" 
        >
          <Text size="small">
            { item.categories[0].hasOwnProperty('title') ? item.categories[0].title : "" }
          </Text>
        </Box>
      </Box>
      <Box 
        gap="large" 
        width="100%"
        direction="row" 
        justify="center" 
      >
        <Box 
          pad="small" 
          width="66px" 
          round="large" 
          background={{ 'color': 'dark-1', 'opacity': 'weak'}}
        >
          <Anchor 
            primary 
            label="Info" 
            size="small" 
            color="dark-1" 
            target="_blank"
            href={item.url}
            alignSelf="center" 
          />
        </Box>
        <Box 
          pad="small" 
          width="66px" 
          round="large" 
          background={{ 'color': 'status-warning', 'opacity': 'strong' }}
        >
          <Anchor 
            size="small" 
            label="Delete" 
            color="dark-1" 
            alignSelf="center" 
            onClick={() => removeItem()} 
          />
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(ListItem);