import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Users = () => {
    const [ users, setUsers] = useState([]);
    const fetchUsers = () => {
        fetch("/api/users")
        .then((res)=> { return res.json();})
        .then((data)=> {
            console.log(data);
            setUsers(data);
        });
    }
    useEffect(()=> {
        fetchUsers();
    }, [])


    const handleDelete = (_id) => {
        console.log(_id);
        fetchDeleteUser(_id);
        fetchUsers();
    }

    const fetchDeleteUser = (_id) => {
        fetch(`/api/delete/${_id}`, {
            method: "DELETE"
        }).then((res) => {
            return res.json();
        }).then((data)=> {
            console.log(data);
        })
    }
    return (
        <>
        <section>
            <div>
                <h1>Yours websites all users</h1>
            </div>
            <div>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Index</th>
                <th scope="col">Username</th>
                <th scope="col">Password</th>
                <th scope="col">Delete</th>
                <th scope="col">Edit</th>
                </tr>
            </thead>
            {
                users.map((user, index)=> (
                    <tbody key={user._id}>
                        <tr>
                            <th scope="row">{user._id} { index+1} </th>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td>
                                <button className='btn btn-danger' onClick={(e)=> {handleDelete(user._id)}}>Delete</button>
                            </td>
                            <td>
                            <Link className="nav-link" to={`/user/edit/${user._id}`}>
                            <button className='btn btn-primary'>Edit
                            </button>
                            </Link>
                            </td>
                        </tr>
                    </tbody>
                    ))
            }
            </table>
            </div>
        </section>
        </>
    )
}

export default Users
