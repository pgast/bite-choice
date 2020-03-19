import React from 'react';
import { Box, Text, Heading, Button, Anchor } from 'grommet';

const choiceView = ({ item, toggleUi }) => {
  return (
    <Box 
      width="100%"
      height="100%" 
      align="center"
      background="accent-4" 
      pad={{ left: 'large', right: 'large' }}
    >
      <Box 
        height="85%"
        width="100%"
        align="center"
        justify="around"
      >
        <Box height="20%" justify="end">
          <Heading 
            level="3" 
            size="medium" 
            color="dark-1"
            textAlign="center" 
          >
            Your last option is
          </Heading>
        </Box>
        <Box height="80%" width="100%" pad={{ bottom: 'medium' }}>
          <Box height="50%" justify="end" align="center" >
            <Heading 
              level="2"
              size="medium" 
              color="dark-1" 
              textAlign="center" 
            >
              {item.name}
            </Heading>
          </Box>
          <Box 
            align="start" 
            justify="center" 
            margin={{ bottom: 'large' }}
          >
            <Text weight="bold" color="dark-1" alignSelf="center">
              {item.categories[0].title}
            </Text>
            <Text alignSelf="center">
              {item.location.address1}
            </Text>
          </Box>
          <Box 
            pad="small"
            width="66px" 
            round="large" 
            justify="center" 
            alignSelf="center"
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
        </Box>
      </Box>
      <Box height="15%" justify="center" margin={{ 'bottom': 'medium' }}>
          <Button 
            primary
            color="dark-1" 
            label="Try again" 
            onClick={toggleUi} 
          />
      </Box>
    </Box>
  )
}

export default choiceView;