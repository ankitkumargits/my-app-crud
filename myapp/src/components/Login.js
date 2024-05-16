import React, { useContext, useState } from 'react'
import "../css/Login.css"
import { Link, useNavigate } from 'react-router-dom'
import { LogInContext } from './context/LoginContext';
const Login = () => {

    const [ username, setUsername] = useState("");
    const [ password, setPassword] = useState("");
    const [ message, setMessage] = useState("");
    const { usernames, setUsernames } = useContext(LogInContext);
    const navigate = useNavigate();

    const handleSubmit = async(e)=> {
        e.preventDefault();
        const inputData = { username, password };
        console.log(inputData);
        await fetch('/auth/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(inputData)
        })
        .then((res)=> { return res.json(); })
        .then((data)=> {
            console.log(data.message);
            if(data.username){
                // setMessage("Successfully logged in.")
                setUsernames(data.username);
                localStorage.setItem('username', data.username);
                navigate("/");
            }else {
                setMessage("Invalid Credentials.")
            }
        })
    }
  return (
    <>
      <section id='userLogin'>
      <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <section>
                                <div>
                                    <h2 className='text-center'>Login</h2>
                                </div>
                                <div className="my-3">
                                    <h3 className='text-center'> {message} </h3>
                                </div>
                                <form method='post' onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">Username</label>
                                        <input type="text" className="form-control" id="username"
                                        onChange={(e)=> {setUsername(e.target.value);}}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1"
                                        onChange={(e)=> {setPassword(e.target.value);}}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary form-control mb-3">Submit</button>
                                </form>
                                <div className="my-2">
                                    <Link to="/signup">You don't have an account.? go here </Link>
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

export default Login
