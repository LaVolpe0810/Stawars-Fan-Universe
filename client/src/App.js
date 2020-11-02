import React from 'react';
import {Router} from '@reach/router';
import './App.css';
import UserForm from './components/UserForm';
import FavForm from './components/FavForm';
import Banner from './components/Banner';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Banner />
     <Router>
       <UserForm path="/user/new"/>
       <FavForm path="/fav/new"/>
       <Home path="/home"></Home>
     </Router>
    </div>
  );
}

export default App;
