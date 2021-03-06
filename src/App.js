//the home page where we find the list of products
import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import image from "./img/nordwood-themes-Nv4QHkTVEaI-unsplash.jpg";
import { motion } from "framer-motion";
import { ProductConsumer } from "./context";
import ProductList from "./components/PodectsList/ProductsList";


const animateTransition = {//setting a transition with framer motion
  init: {
    y: 200,
    opacity: 0,
  },

  anim: {
    y: 0,
    opacity: 1,
  },
};
function App() {
  return (
    <motion.div
      className="App"
      variants = {animateTransition}
      initial = "init"
      animate = "anim"
      
    >
      <NavBar homeIcon />
      <img src={image} alt="" className="headerImage" />
      <h1 className="AppH1Introductor">
        Explore the products that make you look better
      </h1>

      <ProductConsumer>
        {(value) => {
          return (
            <div className="productsContainer">
              {value.data.map((item, index) => {
                return (
                  <section key = {index}>
                    <ProductList products={item} />
                  </section>
                );
              })}
            </div>
          );
        }}
      </ProductConsumer>
    </motion.div>
  );
}

export default App;
