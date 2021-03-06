import React from 'react';

import './style.css';

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
        <div 
          // height="15%" 
          // align="center"
          // direction="row" 
          // justify="around"
          // background="light-1"
          // alignContent="center"
          // pad={{ left: 'small', right: 'small' }}
        >
          <div width="20%">       
            {/* <Anchor 
              size="small" 
              color="dark-1"
              onClick={toggleUi}
              icon={<Previous />}
              margin={{ top: '4px' }}
            /> */}
          </div>
          <div 
            // width="60%" 
            // align="center"
          >
            <p 
              // size="small" 
              // weight="bold"
            >
              Eating in
            </p>
            <p 
              // size="large" 
              // weight="bold" 
              // textAlign="center" 
              // alignSelf="center"
              // color="status-warning" 
            >
              {location}
            </p>
          </div>
          <div 
            // width="20%" 
            />
        </div>
      )}
      {isCustom && (
        <div 
          // height="25%" 
          // align="center"
          // justify="around"
          // background="light-1"
          // alignContent="center"
          // pad={{ left: 'small', right: 'small' }}
        >
          <div 
            // width="100%" 
            // height="50%" 
            // align="center"
            // direction="row" 
          >
            <div 
              // width="20%"
              >       
              {/* <Anchor 
                size="small" 
                color="dark-1"
                icon={<Previous />}
                margin={{ top: '4px' }}
                onClick={() => toggleCustomForm()}
              /> */}
            </div>
            <div 
              // width="60%" 
              // align="center"
            >
              <p 
                // size="small" 
                // weight="bold"
                >
                Eating in
              </p>
              <p 
                // size="large"
                //  weight="bold" 
                //  color="status-warning"
                 >
                {location}
              </p>
            </div>
            <div 
              // width="20%"
              />
          </div>
          <div 
            // height="60%" 
            // width="100%"
            >
            <div 
              // gap="small"
              // align="end" 
              // height="50%" 
              // direction="row" 
              // justify="center" 
            >
              {customSearchData.searchTerms.map((el, index) => {
                return (
                  <div 
                    // pad={{ 
                    //   left: 'small', 
                    //   top: 'xsmall', 
                    //   right: 'small', 
                    //   bottom: 'xsmall', 
                    // }}
                    // background="light-3" 
                    // round="xlarge"
                    key={index} 
                  >
                    <p textAlign="center" weight="bold" size="xsmall">
                      {el}
                    </p>
                  </div>
                )
              })} 
            </div>
            <div 
              // align="end" 
              // width="100%" 
              // height="40%" 
              // direction="row"
              // justify="center" 
            >
              <p>
                Sorted by
              </p>
              <p 
                // size="small" 
                // weight="bold" 
                // color="status-warning" 
                // margin={{ left: 'xsmall' }}
              >
                {customSearchData.sortBy}
              </p>
            </div>      
          </div>
        </div>
      )}
    </>
  );
};

export default resultHeader;