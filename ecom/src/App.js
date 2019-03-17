import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import { fetchNotes } from './actions';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import {withRouter} from 'react-router';
import { NavLink} from 'react-router-dom';
import Navigation from './components/Nav-Footer/Navigation';
import axios from 'axios';
import HomePage from './components/HomePage/homepage';
import Footer from './components/Nav-Footer/Footer';
import ProductPage from './components/ProductPage/productpage';

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
        <Footer/>
        <ProductPage></ProductPage>
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
