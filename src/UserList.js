import { useState, useEffect } from "react";
import axios from 'axios';

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users') // Javascript fetch method
            .then((response) => response.json()) // json type
            .then((json) => setUsers(json)); // updating state
    }, [])

    useEffect(() => {
        // Make a request for a user with a given ID
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                // handle success
                console.log(response);
                setPosts(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, [])

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
                    posts.map((item, index) => <tr key={index}>
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
                    users.map((item, index) => <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}