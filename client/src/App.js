import React from 'react';
import {Router} from '@reach/router';
import './App.css';
import UserForm from './components/UserForm';
import FavForm from './components/FavForm';


function App() {
  return (
    <div className="App">
     <Router>
       <UserForm path="/user/new"/>
       <FavForm path="/fav/new"/>
     </Router>
    </div>
  );
}

export default App;
