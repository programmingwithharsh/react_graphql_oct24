import ReactDOM from 'react-dom/client'; // Include ReactDOM module
import React from 'react';
import Main from './Main'; // importing Main Component
import "bootstrap/dist/css/bootstrap.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root')); // take id root from index.html file

const username = "Atul Kumar"; // string
const interests = ["Reading", "Cricket", "Chess", "Coding"]; // array
const birth = { // object
  year: 2000,
  place: "UP"
};
const x = 2;

root.render(
  <ApolloProvider client={client}>
    <Main username={username} interests={interests} birth={birth} x={x} />
  </ApolloProvider>
);

