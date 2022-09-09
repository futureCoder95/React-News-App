import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export class App extends Component{

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progess: progress })
  }

  render(){
  return (
    <>
      <Router>
        <LoadingBar
          color='#f11946'
          height={3}
          progress={this.state.progess}
        />
        <Navbar />
        <Switch>
          <Route exact path="/"><News setProgress={this.setProgress} key="general" pageSize={4} country="in" category="General" /></Route>
          <Route exact path="/business"><News setProgress={this.setProgress} key="business" pageSize={4} country="in" category="Business" /></Route>
          <Route exact path="/entertainment"><News setProgress={this.setProgress} key="entertainment" pageSize={4} country="in" category="Entertainment" /></Route>
          <Route exact path="/general"><News setProgress={this.setProgress} key="general" pageSize={4} country="in" category="General" /></Route>
          <Route exact path="/health"><News setProgress={this.setProgress} key="health" pageSize={4} country="in" category="Health" /></Route>
          <Route exact path="/science"><News setProgress={this.setProgress} key="science" pageSize={4} country="in" category="Science" /></Route>
          <Route exact path="/sports"><News setProgress={this.setProgress} key="sports" pageSize={4} country="in" category="Sports" /></Route>
          <Route exact path="/technology"><News setProgress={this.setProgress} key="technology" pageSize={4} country="in" category="Technology" /></Route>
        </Switch>
      </Router>
    </>
  );
}
}

export default App;
