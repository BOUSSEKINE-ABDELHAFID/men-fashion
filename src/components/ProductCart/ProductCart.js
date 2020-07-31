import React from "react";
import style from "./ProductCard.module.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import PropTypes from "prop-types";
import { ProductConsumer } from "../../context";

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

ProductCard.propTypes = {
  productCard: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
    count: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
