import React from "react";
import "../styles/home.css";
// import { motion } from "framer-motion";
import FloatingCubes from "./FloatingCubes";
import AnimatedText from "./Animatedtext"; // Import the component
import Expertise from "./Expertise";
import Work from "./Work";

const Home = () => {
  return (
    <div>

    
<div className="home" id="sayo" style={{ position: 'relative', minHeight: "100vh", overflowY: "auto" }}>

        
        <FloatingCubes />
        <div style={{position:'absolute', top:'25%'}}>
          <h1 className="sula">TAMALSEN</h1>
          <AnimatedText/>
          <p>Creating beautiful and responsive web experiences with React and CSS.</p>
          <a href="/projects" className="home-button">View My Work</a>
        </div>
        
      </div>

      <div>
        <Expertise />
        <Work/>
      </div>


      

      
    </div>
  );
};

export default Home;
