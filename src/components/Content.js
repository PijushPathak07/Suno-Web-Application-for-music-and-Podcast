import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar'

import Home from "views/Home"
import Search from "views/Search"
import Collection from 'views/Collection';

import React, { useState } from "react";
// import logo from './logo.svg';
import '../app.css';
import { Login } from "../views/login";
import { Register } from "../views/register";

export default function Content() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return(
    <div className='flex-auto overflow-auto'>
        <Navbar />
        <div className='px-8 pt-5'>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
            <Route path="/collection">
                <Collection />
            </Route>
            <Route path="/Login">
            <div className="App flex-auto overflow-auto">
            {
              currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
            }
            </div>
            </Route>
          
          
        </Switch>
        
        </div>
    </div>
  )
}
