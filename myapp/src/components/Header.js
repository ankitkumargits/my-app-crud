import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import { LogInContext }  from "./context/LoginContext";
const Header = () => {

  const { username, setUsername } = useContext(LogInContext);

  return (
    <>
      <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar {username} </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/users">Users</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link">Contacts</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
      <button className="btn btn-primary mx-2">
        <Link className="nav-link" to="/signup">Signup</Link>
        </button>
        <button className="btn btn-primary">
        <Link className="nav-link" to="/login">Login</Link>
        </button>
      </form>
    </div>
  </div>
</nav>
      </header>
    </>
  )
}

export default Header
