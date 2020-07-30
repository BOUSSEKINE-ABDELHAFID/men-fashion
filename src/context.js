import React, { Component } from "react";
import { storeProducts } from "./data";
const ProductContext = React.createContext();
const ProductConsumer = ProductContext.Consumer;

class ProductProvider extends Component {
  state = {
    products: [],
    cart: [],
    showModal : false,
    modalProduct : {}
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
    var product = this.getItem(id);
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
    this.setState(()=> {
      return {
        products : this.state.products,
        cart : [...this.state.cart, product]
      }
    },()=> console.log(this.state)
    )
  };


  openModal = id => {
    const product = this.getItem(id);
    this.setState({showModal : true, modalProduct : product});
  }

  closeModal = ()=> {
    this.setState({
      showModal : false,
    })
  }
  render() {
    return (
      <ProductContext.Provider
        value={{...this.state,
          data: this.state.products,
          addToChart: this.addToChart,
          openModal : this.openModal,
          closeModal : this.closeModal
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export { ProductConsumer, ProductProvider };
