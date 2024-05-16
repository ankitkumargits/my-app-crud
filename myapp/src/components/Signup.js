import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e)=> {
        e.preventDefault();
        const inputData = { username, password}
        console.log(inputData);
        fetch("/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(inputData)
        })
        .then ((res)=> { return res.json(); })
        .then((data)=> {
            console.log(data);
            if(data.message === "successfully created account"){
                setMessage("Successfully created account")
            }else if(data.message === "user is already exists"){
                setMessage("User already exists");
            }else {
                setMessage("Failed to create account");
                navigate("/signup");
            }
        })
    }
  return (
    <>
       <section id='userSignup'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <section>
                                <div>
                                <h2 className='text-center'>Registration form</h2>
                                </div>
                                <div className="my-3">
                                    <h3 className='text-center'> {message} </h3>
                                </div>
                                <form method='post' onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">Username</label>
                                        <input type="text" className="form-control" id="username"
                                        onChange={(e)=>{setUsername(e.target.value)}}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1"
                                        onChange={(e)=> { setPassword(e.target.value);}}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary form-control mb-3">Submit</button>
                                </form>
                                <div className="my-2">
                                    <Link to="/login">You have an account.? go here </Link>
                                </div>
                            </section>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Signup
