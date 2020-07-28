import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import image from "./img/jonathan-borba-WbQxNLcyGqA-unsplash.jpg";
import { motion } from "framer-motion";
import { storeProducts } from "./data.js";
import { ProductConsumer } from "./context";
import ProductList from "./components/PodectsList/ProductsList";

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
function App() {
  return (
    <motion.div
      className="App"
      variants={animateTransition}
      initial="init"
      animate="anim"
    >
      <NavBar homeIcon />
      <img src={image} alt="" className="headerImage" />
      <h1 className="AppH1Introductor">
        Explore the products that make look better
      </h1>
     
      <ProductConsumer>
        {(value) => {
          console.log(value);
          return (
            <div className = "productsContainer">
              <section>
               
                <ProductList products={value.data.shoes} />
              </section>

              <section>
                 <ProductList products={value.data.sunglasses} />
              </section>

              <section>
                 <ProductList products={value.data.watches} />
              </section>

              <section>
                 <ProductList products={value.data.hats} />
              </section>

              <section>
                 <ProductList products={value.data.tshirts} />
              </section>
            </div>
          );
        }}
      </ProductConsumer>

      <br />
    </motion.div>
  );
}

export default App;
