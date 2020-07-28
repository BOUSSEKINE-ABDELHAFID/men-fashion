import React from 'react'
import style from "./ProductCard.module.css"

const ProductCart = ({image, price}) => {
    return (
        <div className = {style.card}>
            <img src={image} alt=""/>
            <h1>{price}$</h1>
        </div>
    )
}

export default ProductCart
