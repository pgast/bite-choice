<!--![Banner](https://github.com/navendu-pottekkat/awesome-readme/blob/master/header.png) -->

# BiteChoice
![GitHub last commit](https://img.shields.io/github/last-commit/pgast/bite-choice)

• React application that fetches places to eat near you or around the world.\
• Built using the YELP API with an Express.js server to bypass CORS.\
• The user is able to enter other locations and made custom search requests depending on the type of restaurant they are looking for.  

Hungry? [**Try bitechoice**](http://bite-choice.herokuapp.com/) now!  
(*Heroku throttles down speed for inactive applications, as the app is hosted on heroku it might take a while to load.*)

## Installation
[(Back to top)](#bitechoice)  
  
To use this project, first clone the repo on your device using the instructions below:
```bash
$ git clone https://github.com/pgast/bite-choice.git
$ cd bite-choice
$ npm install
```

## Available Scripts
[(Back to top)](#bitechoice)

To run server and react app run this script on the project root.
```bash
$ npm run dev
```
The server will run on localhost:5000 while the client will be hosted at localhost:3000

To start server
```bash
$ npm run server
```
To run react client app
```bash
$ npm run client
```

## Development
[(Back to top)](#bitechoice)

The app was developed using the following tools:

+ Remote API fetching
+ Geolocation fetching
+ Node.js server
+ Express.js

Since the info is fetched from a different domain the express server handles and bypasses CORS issues.

## License  
[(Back to top)](#bitechoice)    
  
[MIT](https://choosealicense.com/licenses/mit/)
