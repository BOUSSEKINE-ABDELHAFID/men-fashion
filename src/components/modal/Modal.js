import React from "react";
import style from "./Modal.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ProductConsumer } from "../../context";

const popModal = {
  init: {
    y:-1000
  },
  anim: {
    y:0,
    transition: {
      delay: 0.2,
    },
  },
};
const Modal = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const { modalProduct, showModal, closeModal } = value;
        const { image, price } = modalProduct;
        return (
          showModal && (
            <div className={style.modalContainer}>
              <motion.div
                className={style.modalContent}
                variants={popModal}
                initial="init"
                animate="anim"
              >
                <h2>Product added successfully</h2>
                <img src={image} alt="" />
                <h3>{price} $</h3>
                <div className={style.linkContainer}>
                  <Link
                    to="/store"
                    className={style.linkBtn}
                    onClick={closeModal}
                  >
                    cheking cart
                  </Link>
                  <Link to="/" className={style.linkBtn} onClick={closeModal}>
                    continue shopping
                  </Link>
                </div>
              </motion.div>
            </div>
          )
        );
      }}
    </ProductConsumer>
  );
};

export default Modal;
