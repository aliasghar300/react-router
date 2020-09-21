import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from './header';
import Footer from './footer';
import Error404 from "./404"
import History from "./history";
import Home from "./home"
import Contact from "./contact"
import About from "./about"


function App() {
  return (
    <div className="App">
        <Router History={History}>
          <Header/> 
          <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about/qwe" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route exact path="*" component={Error404}/>
          </Switch>
          <Footer/>
        </Router>
        
    </div>
  );
}

export default App;

