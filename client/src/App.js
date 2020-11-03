import React from 'react';
import {Router} from '@reach/router';
import './App.css';
import UserForm from './components/UserForm';
import FavForm from './components/FavForm';
import Banner from './components/Banner';
import Home from './components/Home';
import Login from './components/Login';
import Account from './components/Account';


function App() {
  return (
    <div className="App">
      <Banner />
     <Router>
       <Login path="/"/>
       <UserForm path="/user/new"/>
       <FavForm path="/fav/new"/>
       <Account path="/account/edit"/>
       <Home path="/home"/>
     </Router>
    </div>
  );
}

export default App;
