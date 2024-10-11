import React from "react";
import axios from "axios";

class UserList2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            posts: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => {
                console.log("fetch ", json);
                this.setState({
                    users: json
                })
            }
            );

        // Make a request for a user with a given ID
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => { // arrow function
                // handle success
                console.log("axios module ", response);
                this.setState({
                    posts: response.data
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    render() {
        return <>
            <h1>List of Posts using axios method</h1>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.posts.map((item, index) => <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </tr>)
                    }
                </tbody>
            </table>

            <h1>List of Users using fetch method</h1>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users.map((item, index) => <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </>
    }
}

export default UserList2;