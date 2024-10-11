import React from 'react';
import { Navigate } from 'react-router-dom';

export default class AddProduct extends React.Component {
    constructor() {
        super();
        this.state = {
            redirect: false
        }
    }

    gotToProducts = () => {
        this.setState({ // Whenever state updates, component rerender
            redirect: true
        })
    }

    render() { // lifecycle
        const { redirect } = this.state;

        return <>
            {
                redirect && (
                    <Navigate to="/products" />
                )
            }
            <h1>Add Product Class Component</h1>
            <button onClick={this.gotToProducts}>Redirect to Product</button>
        </>
    }
}
