import React from 'react'
import style from "./ProductCard.module.css"
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const ProductCart = (props) => {
    const {id, image, price, inCart, count} = props.product
    return (
        <div className = {style.card} onClick = {()=> console.log("the product is selectioned")}>
            <img src={image} alt=""/>
            <h1>{price}$</h1>
            <button disabled = {inCart ? true: false} className = "inCartbtn">
                {inCart ? (<span>In Cart</span>) : (<AddShoppingCartIcon/>) }
            </button>

        </div>
    )
}

export default ProductCart
