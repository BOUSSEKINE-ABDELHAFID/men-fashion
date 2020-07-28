import React, { Component } from 'react'
import {storeProducts} from "./data"
const ProductContext = React.createContext();
const ProductConsumer = ProductContext.Consumer;

class ProductProvider extends Component {
    render() {
        return (
            <ProductContext.Provider value = {{
                data : storeProducts,
            }}>
               {this.props.children} 
            </ProductContext.Provider>
        )
    }
}

export {ProductConsumer, ProductProvider};
