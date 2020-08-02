//context api
import React, { Component } from "react";
import { storeProducts } from "./data";
const ProductContext = React.createContext();
const ProductConsumer = ProductContext.Consumer;

class ProductProvider extends Component {
  state = {
    products: [],//all the list of products
    cart: [],//the products added to the cart
    showModal : false,//a boolean that shows the model when clicking to by a product
    modalProduct : {},//the product that we show in the model
  };

  componentDidMount() {//where we initally fill the products with the data in the file data.js
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
  getItem = (id) => {//getting an item with its id
    var searchedProduct = {};
    this.state.products.forEach((type) => {
      const searchedItem = type.find((product) => product.id === id);
      if (searchedItem != null) searchedProduct = { ...searchedItem };
    });

    return searchedProduct;
  };

  addToChart = (id) => {//adding a specefic product with a unique id to the chart
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
    }
    )
  };


  openModal = id => {//opening the modal
    const product = this.getItem(id);
    this.setState({showModal : true, modalProduct : product});
  }

  closeModal = ()=> {
    this.setState({
      showModal : false,
    })
  }


  deleteProductFromCart = id => {//deleting a product from the chart
    const temp = this.state.cart.filter(item => item.id !== id);//we extract all the product except of teh specific producrt to delete

    this.state.products.forEach((type) => {//we search for it in the general list of products and we make some modifications
      type.forEach((p) => {
        if (p.id === id) {
          p.inCart = false;
          p.count = 0;
        }
      });
    });

    this.setState({
      cart : temp,
    })
  }

  handleCount = (id, num) => {//how many we buy of this product
      const tempCart = [...this.state.cart];
      tempCart.forEach(product => {
        if(product.id === id){
          product.count = num;
          product.total = num * product.price;
        }
      })
      this.setState({
        cart : tempCart
      })
  }


  


  render() {
    return (
      <ProductContext.Provider
        value={{...this.state,
          addToChart: this.addToChart,
          openModal : this.openModal,
          closeModal : this.closeModal,
          deleteProductFromCart : this.deleteProductFromCart,
          handleCount : this.handleCount
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export { ProductConsumer, ProductProvider };
