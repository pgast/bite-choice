import React, { Component } from 'react';
import { Grommet, Box } from 'grommet';
import Request from 'request';

import MainView from './components/MainView';

class App extends Component {
  state = {
    fetchSuccess: '',
    location: ''
  }; 

  componentWillMount() {
    Request.get({ "url": "http://ip-api.com/json/" }, (error, response, body) => {
        if (error || JSON.parse(body).status === "fail") {
          this.setState({ fetchSuccess: false }); 
          return console.dir(error);    
        } else {
          const location = JSON.parse(body).city;
          this.setState({ 
            location, 
            fetchSuccess: true,
          });
        }
    });
  };

  render() {
    return (
      <Grommet>
        <Box width="100vw" height="100vh">
          <MainView 
            fetchSuccess={this.state.fetchSuccess}
            location={this.state.location} 
          />
        </Box>
      </Grommet>
    );
  }
}
export default App;