import ReactDOM from 'react-dom/client'; // Include ReactDOM module
import React from 'react';
import Main from './Main'; // importing Main Component

const root = ReactDOM.createRoot(document.getElementById('root')); // take id root from index.html file

const username = "Atul Kumar"; // string
const interests = ["Reading", "Cricket", "Chess", "Coding"]; // array
const birth = { // object
  year: 2000,
  place: "UP"
};
const x = 2;

root.render(
  <Main username={username} interests={interests} birth={birth} x={x} />
);

