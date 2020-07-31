import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { motion } from "framer-motion";
import ProductInCardList from "./components/productInCardList/ProductInCardList";
import { ProductConsumer } from "./context";

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
      <div className="productsInCardListContainer">
        <ProductConsumer>
          {(value) => {
            return value.cart.length === 0 ? (
              <h1 className="cartEmpty">The cart is empty</h1>
            ) : (
              <div>
                {value.cart.map((product) => (
                  <ProductInCardList
                    product={product}
                    handleCount={value.handleCount}
                    deleteProductFromCart={value.deleteProductFromCart}
                  />
                ))}
                <div className = "totalPrice">
                Total price : {"  "}
                  {value.cart.reduce((t, item) => {
                    return t + item.total;
                  }, 0)}
                  $
                </div>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    </motion.div>
  );
};

export default Store;
