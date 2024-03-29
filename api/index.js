const compression = require('compression');
const express = require('express');
const app = express();
require('dotenv').config({path: '../.env'});
const port = 8081;
const request = require('request');
const bodyParser = require('body-parser');

const https = require('https');
const http = require('http');

var path = require("path");

app.set('port', port);

app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'build')));

const generateUrl = (inputParams) => {
    let url = `https://api.yelp.com/v3/businesses/search?`;
    
    for (let key in inputParams) {
        let parameter = inputParams[key];
        switch (key) {
            case 'location':
                url += `location=${parameter}&`;
                break;
            case 'term':
                if (parameter === null || parameter === undefined || parameter === 'null') {
                    url = url;
                } else {
                    url += `term=${parameter}&`;
                }
                break;
            case 'sort_by':
                if (parameter === "Best Match") {
                    parameter = "best_match";
                } else {
                    parameter = parameter.toLowerCase();
                }
                url += `sort_by=${parameter}&`;
                break;
            default:
                url = url;
        }
    };
    return url.slice(0, -1);
};

const getRestaurantData = (inputParams, res) => {
  request.get({
    "headers": 
    {
      "Authorization": `Bearer ${process.env.YELP_API_KEY}`
    },
    "url": generateUrl(inputParams)
  }, (error, response, body) => 
  {
    if (error) { 
      res.send({ businesses: "error" }) 
    } else {
      res.send(JSON.parse(body));
    }
  }); 
};

app.get('/getRandom/:location', (req, res) => {
    const sortBy = ['best_match', 'rating', 'review_count'];
    let parameters = {};
    parameters.sort_by = sortBy[Math.floor(Math.random() * Math.floor(4))];
    parameters.location = req.params.location;
    getRestaurantData(parameters, res);
});

app.get('/search/:term?/:sort_by/:newLocation', (req, res) => {
    let parameters = { sort_by: req.params.sort_by, term: req.params.term };
    parameters.location = req.params.newLocation;
    getRestaurantData(parameters, res);
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`App listening in port ${port}`));

