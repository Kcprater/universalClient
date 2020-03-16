import React, {useState, useEffect} from 'react';
import Sitebar from './home/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// import {BrowserRouter as Router} from 'react-router-dom';
import Auth from './auth/Auth';
import RatingIndex from './ratings/RatingIndex';

function App() {

  const [sessionToken, setSessionToken] = useState('');

  useEffect (() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const setToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    // console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? 
      <RatingIndex clickLogout={clearToken} token={sessionToken}/>

    : <Auth setToken={setToken}/>)
  }

  return (
    <div>
      <Sitebar clickLogout={clearToken}/>
      {protectedViews()}
    </div>
  );
}

export default App;
