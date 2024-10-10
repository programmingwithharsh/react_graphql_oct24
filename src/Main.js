import React from "react";
import Welcome from "./Welcome";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";
import Hello from "./component/Hello";
import Title from "./Title";

export default class Main extends React.Component {
    constructor() { // Class component lifecycle
        super();
        console.log("Main Component Constructor lifecycle - 1");
    }

    render() { // Class component lifecycle, render view
        console.log("Main Component Render lifecycle - 2");
        return <>
            <h1>Main Class Component</h1>
            <Welcome />
            <AddProduct />
            <ProductList />
            <Hello />
            <Title />
        </>
    }
}