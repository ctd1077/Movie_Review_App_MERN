# Movie Review App

This App is built using the MERN Stack

## Installation

```npm
npm install "cors": "^2.8.5",
npm install "dotenv": "^8.6.0",
npm install "express": "^4.18.2",
npm install "mongodb": "^3.7.4",
npm install "node": "^20.5.0",
npm install "nodemon": "^3.0.1"
```

## Usage

Starting the backend sever
 - cd into backend folder
 - cd movieReviewApp/movie-reviews/backend
 - nodemon index.js

Starting the Frontend server
 - cd into frontend folder
 - cd movieReviewApp/movie-reviews/frontend 
 - npm start

## notes

If you're having issues with the port being left open then run kill port
  - To list any process listening to the port 5000:
    lsof -i: 5000
  - To kill any process listening to the port 5000:
    kill $(lsof -t -i:5000)
  - or more violently:
    kill -9 $(lsof -t -i:5000)
  - Front end use 
    sudo kill -9 $(sudo lsof -t -i:3000)
