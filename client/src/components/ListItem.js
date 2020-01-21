import React from 'react';
import { Box, Text, Anchor } from 'grommet';

const ListItem = ({ item, removeItem }) => {
  return (
    <Box 
      background="accent-4"
      justify="around"
      align="center"
      round="small" 
      width="260px"
      height="27%" 
      pad="small"
    >
      <Box>
        <Text 
          margin={{bottom: 'xsmall'}} 
          textAlign="center" 
          weight="bold"
        >
          {item.name}
        </Text>
        <Box 
          justify="center" 
          direction="row" 
          width="100%"
          gap="medium" 
        >
          <Text size="small">
            { item.categories[0].hasOwnProperty('title') ? item.categories[0].title : "" }
          </Text>
        </Box>
      </Box>
      <Box 
        justify="center" 
        direction="row" 
        width="100%"
        gap="large" 
      >
        <Box 
          background={{ 'color': 'dark-1', 'opacity': 'weak'}}
          round="large" 
          width="66px" 
          pad="small" 
        >
          <Anchor 
            alignSelf="center" 
            href={item.url}
            target="_blank"
            color="dark-1" 
            size="small" 
            label="Info" 
            primary 
          />
        </Box>
        <Box 
          background={{ 'color': 'status-warning', 'opacity': 'strong' }}
          round="large" 
          width="66px" 
          pad="small" 
        >
          <Anchor 
            onClick={() => removeItem()} 
            alignSelf="center" 
            label="Delete" 
            color="dark-1" 
            size="small" 
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ListItem;