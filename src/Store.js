import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { motion } from "framer-motion";

const animateTransition = {
  init: {
    y: 200,
    opacity: 0,
  },

  anim: {
    y: 0,
    opacity: 1,
  },
};
const Store = () => {
  return (
    <motion.div variants={animateTransition} initial="init" animate="anim">
      <NavBar store />
      <br /> <br /> <br />
     
      <h1>This is the store</h1>
    </motion.div>
  );
};

export default Store;
