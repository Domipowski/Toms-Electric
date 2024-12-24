import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import NavBar from './NavBar'; 
import Home from './home'
import Services from './services'; 
import About from './about'; 
import Contact from './contact';

class App extends React.Component {
  render() {
    return (
      <Router className="relative">
        <NavBar/>
        
        <Routes>
          <Route path="" element = { <Home/> }/>
          <Route path="/services" element = { <Services/> }/>
          <Route path="/about" element = { <About/> }/>
          <Route path="/contact" element = { <Contact/> }/>
        </Routes>
      </Router>
    );
  }
}

export default App;