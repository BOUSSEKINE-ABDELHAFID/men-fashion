import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import image from "./images/jonathan-borba-WbQxNLcyGqA-unsplash.jpg";
import {motion} from "framer-motion"

const animateTransition = {
  init : {
      y:200,
      opacity : 0
  },

  anim : {
      y:0,
      opacity : 1

  }
}
function App() {
  return (
    <motion.div className="App"
     variants = {animateTransition}
    initial = "init"
    animate = "anim">
      <NavBar homeIcon />
      <img src={image} alt="" className="headerImage" />
      <h1 className = "AppH1Introductor">Explore the products that make look better</h1>
      <br />
      
    </motion.div>
  );
}

export default App;
