import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { compose } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import News from './App/news';


class MainContainer extends Component {

  sessionCheck = () => {
  
      return (
        <div>
          <Router />
          <Route exact path="/" component={News} />
        </div>)
    
  }
  render() {
    return (
      <div className="App">
        {this.sessionCheck()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
 
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(MainContainer)
