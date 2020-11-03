import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import GoogleLogin from 'react-google-login';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import UserForms from './components/pages/UserForms';
import { Login } from './components/login';
import { Logout } from './components/logout';
import { LoginHooks } from './components/loginhooks';
import { LogoutHooks } from './components/logouthooks';

import Opportunites from './components/pages/Opportunites';



function App() {
  return <div className="App">
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component=
      {Home}/>
      <Route path='/userForms' component={UserForms}/>
    
<Route path='/opportunities' component={() => 
  { window.open('https://jerseycares.org', "_blank") 
  || window.location.replace('https://jerseycares.org');}
   }
   
   
   />
    </Switch>
    </Router>
    </div>
 
}

export default App;
