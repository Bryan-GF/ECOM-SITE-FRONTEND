import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import { fetchNotes } from './actions';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import {withRouter} from 'react-router';
import { NavLink} from 'react-router-dom';
import Navigation from './components/Navigation';
import axios from 'axios';
import HomePage from './components/HomePage/homepage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <Navigation/>
        <HomePage/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //Things in the reducers state
  };
};

export default withRouter(connect(
  mapStateToProps,
{ /*fetchNotes*/}, 
)(App));
