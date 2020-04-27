import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
//import AddBudget from './pages/AddBudget';
//import Expenses from './pages/Expenses';


// App component - represents the whole app
export default class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">
          <NavBar />
          <Switch>
          <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
          </Switch>
          <Footer />
        </div>


      </Router>

    );
  }
}