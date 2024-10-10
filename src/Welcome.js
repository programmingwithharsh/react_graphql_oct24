import React from "react";

export default class Welcome extends React.Component {

    constructor() { // lifecycle method
        super();
        this.state = { // define state, state is an object
            username: "Atul",
            address: "Mumbai"
        }
        console.log("Welcome Component Constructor lifecycle - 1");
        this.updateUsername = this.updateUsername.bind(this);
    }

    updateUsername() { // normal method
        this.setState({ // to update state, we use this.setState, whenever state update component rerender
            username: "Sandeep"
        })
    }

    updateAddress = () => { // arrow method
        this.setState({
            address: "Delhi"
        })
    }

    updateAll = () => { // method
        this.setState({
            username: "Sandeep",
            address: "Delhi"
        })
    }

    render() { // lifecycle method
        console.log("Welcome Component Render lifecycle - 2");
        return <>
            <h1>Welcome Class Component</h1>
            <h2>State username is {this.state.username} and address is {this.state.address}</h2>
            <button onClick={this.updateAll}>Update All</button>
            <button onClick={this.updateUsername}>Update Username</button>
            <button onClick={this.updateAddress}>Update Address</button>
        </>
    }
}