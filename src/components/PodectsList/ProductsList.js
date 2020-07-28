import React from 'react'
import ProductCart from "../ProductCart/ProductCart"
import style from './ProductsList.module.css'
const ProductsList = ({products}) => {
    return (
        <div className = {style.productList}>
           {
               products.map(product =><ProductCart image = {product.image} price = {product.price}/>)
           }  
        </div>
    )
}

export default ProductsList
