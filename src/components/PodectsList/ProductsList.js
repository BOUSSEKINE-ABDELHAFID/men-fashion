import React from 'react'
import ProductCart from "../ProductCart/ProductCart"
import style from './ProductsList.module.css'
//mapping throught the products and displaying each product
const ProductsList = ({products}) => {
    return (
        <div className = {style.productList}>
           {
               products.map(product =><ProductCart product = {product} key = {product.id} />)
           }  
        </div>
    )
}

export default ProductsList
