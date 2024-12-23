import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar'; 
import Slides from './Slides'; 
import ContactInfo from './ContactInfo'; 
import HomeAbout from './HomeAbout'; 

class Home extends React.Component {
  render() {
    return (
      <div className="relative">
        <NavBar/>

        <Slides/>

        <ContactInfo/>

        <HomeAbout/>
      </div>
    );
  }
}

export default Home;