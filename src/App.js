import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Sitebar from './home/Navbar';
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
      <RatingIndex token={sessionToken} clickLogout={clearToken} />
    : <Auth setToken={setToken}/>)
  }

  return (
    <div>
      <Sitebar clickLogout={clearToken} token={sessionToken}/>
      {protectedViews()}
    </div>
  );
}

export default App;
