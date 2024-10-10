import React from "react";
import "./Welcome.css";

export default class Welcome extends React.Component {

    constructor(props) { // lifecycle method
        super(props);
        this.state = { // define state, state is an object
            username: "Atul",
            address: "Mumbai",
            elements: ["Hydrogen", "Helium", "Lithium", "Beryllium", "Boron"],
            flowers: ["Rose", "Dahlia", "Magnolia", "Tulip", "Daisy"]
        }
        console.log("Props in welcome component ", this.props);
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
        console.log("Welcome component state is ", this.state);

        let myStyle = {
            backgroundColor: "purple",
            color: "white"
        };

        return <>
            <h1 style={{ backgroundColor: "blue", color: "white" }}>Welcome Class Component</h1>

            <hr />
            <h2 style={myStyle}>State username is {this.state.username} and address is {this.state.address}</h2>
            <button onClick={this.updateAll}>Update All</button>
            <button onClick={this.updateUsername}>Update Username</button>
            <button onClick={this.updateAddress}>Update Address</button>

            <hr />
            <h2 className="header">Props message is {this.props.message}</h2>
            <hr />
        </>
    }
}