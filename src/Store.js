import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { motion } from "framer-motion";
import ProductInCardList from "./components/productInCardList/ProductInCardList";
import { ProductConsumer } from "./context";
import { useState } from "react";

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
  const [finalT, setfinalT] = useState(0)
  return (
    <motion.div variants={animateTransition} initial="init" animate="anim">
      <NavBar store />
      <div className="productsInCardListContainer">
        <ProductConsumer>
          {(value) => {
            setfinalT(value.finalTotal)
            return value.cart.length === 0 ? (
              <h1 className="cartEmpty">The cart is empty</h1>
            ) : (
              value.cart.map((product) => (
                <ProductInCardList
                  product={product}
                  handleCount={value.handleCount}
                  deleteProductFromCart={value.deleteProductFromCart}
                />
              ))
              
            );
          }}
        </ProductConsumer>
      </div>
    </motion.div>
  );
};

export default Store;
