import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import NavBar from './NavBar'; 
import Home from './home'
import Gallery from './gallery'; 
import About from './about'; 
import Contact from './contact';
import FootNotes from './FootNotes';

class App extends React.Component {
  render() {
    return (
      <Router className="relative">
        <NavBar/>
        
        <Routes>
          <Route path="" element = { <Home/> }/>
          <Route path="/gallery" element = { <Gallery/> }/>
          <Route path="/about" element = { <About/> }/>
          <Route path="/contact" element = { <Contact/> }/>
        </Routes>
      
        <FootNotes/>
      </Router>
    );
  }
}

export default App;