import React from 'react';
import './style.css';

const choiceView = ({ item, toggleUi }) => {
  return (
    <div className="choiceView"
      // width="100%"
      // height="100%" 
      // align="center"
      // background="accent-4" 
      // pad={{ left: 'large', right: 'large' }}
    >
      <div 
        // height="85%"
        // width="100%"
        // align="center"
        // justify="around"
      >
        <div 
          // height="20%" 
          // justify="end"
        >
          <h3 
            // level="3" 
            // size="medium" 
            // color="dark-1"
            // textAlign="center" 
          >
            Your last option is
          </h3>
        </div>
        <div 
          // height="80%" 
          // width="100%" 
          // pad={{ bottom: 'medium' }}
        >
          <div 
            // height="50%" 
            // justify="end" 
            // align="center" 
          >
            <h2 
              // level="2"
              // size="medium" 
              // color="dark-1" 
              // textAlign="center" 
            >
              {item.name}
            </h2>
          </div>
          <div 
            // align="start" 
            // justify="center" 
            // margin={{ bottom: 'large' }}
          >
            <p 
              // weight="bold" 
              // color="dark-1" 
              // alignSelf="center"
            >
              {item.categories[0].title}
            </p>
            <p>
              {item.location.address1}
            </p>
          </div>
          <div 
            // pad="small"
            // width="66px" 
            // round="large" 
            // justify="center" 
            // alignSelf="center"
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
        </div>
      </div>
      <div 
        // height="15%" 
        // justify="center" 
        // margin={{ 'bottom': 'medium' }}
      >
          <button 
            // primary
            // color="dark-1" 
            // label="Try again" 
            // onClick={toggleUi} 
          />
      </div>
    </div>
  )
}

export default choiceView;