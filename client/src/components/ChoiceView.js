import React from 'react';
import { Box, Text, Heading, Button, Anchor } from 'grommet';

const choiceView = ({ item, toggleUi }) => {
  return (
    <Box 
      pad={{ left: 'large', right: 'large' }}
      background="accent-4" 
      align="center"
      height="100%" 
      width="100%"
    >
      <Box 
        justify="around"
        align="center"
        height="85%"
        width="100%"
      >
        <Box height="20%" justify="end">
          <Heading 
            textAlign="center" 
            color="dark-1"
            size="medium" 
            level="3" 
          >
            Your last option is
          </Heading>
        </Box>
        <Box height="80%" width="100%" pad={{ bottom: 'medium' }}>
          <Box height="50%" justify="end" align="center" >
            <Heading 
              textAlign="center" 
              color="dark-1" 
              size="medium" 
              level="2"
            >
              {item.name}
            </Heading>
          </Box>
          <Box 
            margin={{ bottom: 'large' }}
            justify="center" 
            align="start" 
          >
            <Text weight="bold" color="dark-1" alignSelf="center">
              {item.categories[0].title}
            </Text>
            <Text alignSelf="center">
              {item.location.address1}
            </Text>
          </Box>
          <Box 
            background={{ 'color': 'dark-1', 'opacity': 'weak'}}
            alignSelf="center"
            justify="center" 
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
        </Box>
      </Box>
      <Box height="15%" justify="center" margin={{ 'bottom': 'medium' }}>
          <Button 
            onClick={() => toggleUi('landing')} 
            label="Try again" 
            color="dark-1" 
            primary
          />
      </Box>
    </Box>
  )
}

export default choiceView;