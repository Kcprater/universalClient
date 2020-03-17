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
  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? 
      <RatingIndex clickLogout={clearToken} token={sessionToken}/>

    : <Auth setToken={setToken}/>)
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }


  return (
    <div>
      <Sitebar clickLogout={clearToken} token={sessionToken}/>
      {protectedViews()}
    </div>
  );
}

export default App;
