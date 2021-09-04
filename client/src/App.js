import React, { Component } from 'react';
import Request from 'request';

import MainView from './components/MainView';

class App extends Component {
  state = {
    fetchSuccess: '',
    location: ''
  }; 

  componentWillMount() {
    Request.get({ "url": "https://geolocation-db.com/json/" }, (error, res, body) => {
        if (error) {
          this.setState({ fetchSuccess: false }); 
          return console.dir(error);    
        } 
        const location = JSON.parse(body).city;
        this.setState({ location, fetchSuccess: true });
    });
  };

  render() {
    return (
        <MainView 
          location={this.state.location} 
          fetchSuccess={this.state.fetchSuccess}
        />
    );
  }
}
export default App;