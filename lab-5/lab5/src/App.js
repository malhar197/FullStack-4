import React from 'react';
// import logo from './logo.svg';
import './App.css';
import  Home from './components/Home';
import  About from './components/About';
import  Contact from './components/Contact';
import  Error from './components/Error';
import  Navigation from './components/Navigation';
import history from './History';
import Redirect from './components/redirect';
import Student from './components/Student';

import {BrowserRouter,Route,Switch} from 'react-router-dom';

class App extends React.Component {
  
  render() { 
    return ( 
      <BrowserRouter history={history}>
        <div>
          <Navigation/>
          
          <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/Student/:studentname/:studentno?' component={Student}/>
            <Route path='/redirect' component={Redirect}/>
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
     );
  }
}
 
export default App;

