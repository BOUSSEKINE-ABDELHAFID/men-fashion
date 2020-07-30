import React, { Component } from "react";
import { storeProducts } from "./data";
const ProductContext = React.createContext();
const ProductConsumer = ProductContext.Consumer;

class ProductProvider extends Component {
  state = {
    products: [],
    cart: [],
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      var tempItems = [];
      item.forEach((subItem) => {
        const singleItem = { ...subItem };
        tempItems = [...tempItems, singleItem];
      });
      tempProducts = [...tempProducts, tempItems];
    });

    this.setState({
      products: tempProducts,
    });
  };
  /*
  test = () => {
    console.log(
      "the value of teh first item in the products state",
      this.state.products[0][0].inCart
    );
    console.log(
      "the value of teh first item in the store product ",
      storeProducts[0][0].inCart
    );

    let tempProducts = this.state.products;
    tempProducts[0][0].inCart = true;

    this.setState({
      products: tempProducts,
    });

    console.log(
      "the value of teh first item in the products state",
      this.state.products[0][0].inCart
    );
    console.log(
      "the value of teh first item in the store product ",
      storeProducts[0][0].inCart
    );
  };
  
  */
  getItem = (id) => {
    var searchedProduct = {};
    this.state.products.forEach((type) => {
      const searchedItem = type.find((product) => product.id === id);
      if (searchedItem != null) searchedProduct = { ...searchedItem };
    });

    return searchedProduct;
  };

  addToChart = (id) => {
    let product = this.getItem(id);
    product.inCart = true;
    product.count = 1;
    product.total = product.price;
    this.state.products.forEach((type) => {
      type.forEach((p) => {
        if (p.id === id) {
          p.inCart = true;
          p.count = 1;
          p.total = p.price;
        }
      });
    });
    this.setState(prev => {
      return {
        products: prev.products,
        cart: [...prev.cart, product],
      };
    });
    console.log(this.state);
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          data: this.state.products,
          addToChart: this.addToChart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export { ProductConsumer, ProductProvider };
