import React from 'react';

import './style.css';

const ListItem = ({ item, removeItem }) => {
  return (
    <div 
      // pad="small"
      // height="27%" 
      // round="small" 
      // width="260px"
      // align="center"
      // justify="around"
      // background="accent-4"
    >
      <div>
        <p 
          // weight="bold"
          // textAlign="center" 
          // margin={{bottom: 'xsmall'}} 
        >
          {item.name}
        </p>
        <div 
          // gap="medium" 
          // width="100%"
          // direction="row" 
          // justify="center" 
        >
          <p>
            { item.categories[0].hasOwnProperty('title') ? item.categories[0].title : "" }
          </p>
        </div>
      </div>
      <div 
        // gap="large" 
        // width="100%"
        // direction="row" 
        // justify="center" 
      >
        <div 
          // pad="small" 
          // width="66px" 
          // round="large" 
          // background={{ 'color': 'dark-1', 'opacity': 'weak'}}
        >
          {/* <Anchor 
            primary 
            label="Info" 
            size="small" 
            color="dark-1" 
            target="_blank"
            href={item.url}
            alignSelf="center" 
          /> */}
        </div>
        <div 
          // pad="small" 
          // width="66px" 
          // round="large" 
          // background={{ 'color': 'status-warning', 'opacity': 'strong' }}
        >
          {/* <Anchor 
            size="small" 
            label="Delete" 
            color="dark-1" 
            alignSelf="center" 
            onClick={() => removeItem()} 
          /> */}
        </div>
      </div>
    </div>
  );
};

export default React.memo(ListItem);