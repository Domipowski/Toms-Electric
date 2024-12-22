import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar'; 
import Lights from './Lights'; 

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar/>

        <Lights/>
      </div>
    );
  }
}

export default Home;
