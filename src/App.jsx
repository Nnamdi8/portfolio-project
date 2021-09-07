import React from "react";
import Particles from "react-tsparticles";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Header from './components/Header';
const App =() =>{
  return (
    <>
      <Particles
      className="particle-cana"
      params={{
        particles:{
          number:{
            value:30,
            density:{
              enable: true,
              value_area:900
            }
          },
          shape:{
            type:"Circle",
            stroke:{
              width:6,
              color: "#f9ab00"
            }
          }
        }
      }}
      />
      <Navbar/>
      <Header/>
    </>
  );
}

export default App;
