import React from 'react';
import './App.css';
import { BrowserRouter, Route, NavLink, Switch  } from 'react-router-dom'; 

import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';

function App() {
  const idVal = 2;
  const isAuthenticated = true;
  return (
    <BrowserRouter>
    <div className="App">
      <ul>
        {/* <li><Link to="/">Home</Link></li>
        <li><Link to={{
          pathname: '/about-us',
          search: '?name=ranjith&job=IT',
          hash: '#serachText'
        }}>About Us</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li> */}

        <li><NavLink exact to="/" activeClassName="customActive">Home</NavLink></li>
        <li><NavLink  activeClassName="customActive" to={{
          pathname: '/about-us',
          search: '?name=ranjith&job=IT',
          hash: '#serachText'
        }}>About Us</NavLink></li>
        {/* <li><NavLink to={"/contact-us/"+idVal} activeStyle={{color: 'Red'}}>Contact Us</NavLink></li> */}
       {isAuthenticated ? <li><NavLink to="/contact-us/" activeStyle={{color: 'Red'}}>Contact Us</NavLink></li> : null }

      </ul>
      <Switch>
      <Route path="/" exact  component={Home} />
      <Route path="/about-us" component={About} />
      {isAuthenticated ? <Route path="/contact-us" component={Contact} /> : null }
      <Route component={NotFound}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
