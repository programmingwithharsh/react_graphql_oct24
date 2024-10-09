import ReactDOM from 'react-dom/client'; // Include ReactDOM module
import React from 'react';
const root = ReactDOM.createRoot(document.getElementById('root')); // take id root from index.html file

let username = "Programming with Harsh";
const flowers = ["Rose", "Dahlia", "Magnolia", "Tulip", "Daisy"];

// Without JSX
const element = React.createElement("h1", {}, "Programming with Harsh");
const element2 = React.createElement("ul",
  {},
  flowers.map((item, index) => React.createElement("li", { key: index }, item))
)

// With JSX, Directly write HTML code in Javascript
const element3 = <h1>Programming with Harsh 2+2 is {2 + 2}</h1>;
const element4 = <ul>
  {
    flowers.map((item, index) => <li key={index}>{item}</li>)
  }
</ul>

root.render(
  element4
);

