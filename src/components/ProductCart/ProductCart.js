import React from "react";
import style from "./ProductCard.module.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { ProductConsumer } from "../../context";

//this card contains the image, and the price of the product with an add to chat buttom
const ProductCard = (props) => {
  const { id, image, price, inCart } = props.product;
  return (
    <ProductConsumer>
      {(value) => {
        return (
          <div className={style.card}>
            <img src={image} alt="" />
            <h1>{price}$</h1>
            <button
              disabled={inCart ? true : false}
              className="inCartbtn"
              onClick={() => {
                value.addToChart(id);
                value.openModal(id);
                }}
            >
              {inCart ? <span>In Cart</span> : <AddShoppingCartIcon />}
            </button>
          </div>
        );
      }}
    </ProductConsumer>
  );
};


export default ProductCard;
