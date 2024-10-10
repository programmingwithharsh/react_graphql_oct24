import React from "react";
import Welcome from "./Welcome";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";
import Hello from "./component/Hello";
import Title from "./Title";

export default class Main extends React.Component {
    constructor() { // Class component Lifecycle
        super();
        console.log("Constructor lifecyle - 1");
    }

    render() { // Class component lifecycle, render view
        console.log("Render lifecyle - 2");
        return <div>
            <h1>Main Class Component</h1>
            <Welcome />
            <AddProduct />
            <ProductList />
            <Hello />
            <Title />
        </div>
    }
}