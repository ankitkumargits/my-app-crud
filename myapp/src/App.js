// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login.js';
import Signup from './components/Signup';
import Users from './components/Users';
import EditUser from './components/EditUser';
import { LogInContext } from './components/context/LoginContext';
import { useState } from 'react';
function App() {

  const [usernames, setUsernames] = useState(localStorage.getItem("username"));


  return (
    <>
    <Router>
    <LogInContext.Provider value={{ usernames, setUsernames }}>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/users" element={<Users/>}/>
    <Route path="/user/edit/:id" element={<EditUser/>}/>
    </Routes>
    <Footer/>
    </LogInContext.Provider>
    </Router>
    </>
  );
}

export default App;
