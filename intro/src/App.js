import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import CategoryList from './CategoryList'
import Navi from './Navi'
import ProductList from './ProductList'
import alertify from 'alertifyjs'

import { Route, Switch } from 'react-router-dom'
import NotFound from './NotFound'
import CartList from './CartList'
import FormDemo1 from './FormDemo1'
import FormDemo2 from './FormDemo2'
export default class App extends Component {
  state = {
    currentCategory: '',
    products: [],
    cart: [],
  }

  componentDidMount() {
    this.getProducts()
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName })
    console.log(category)
    this.getProducts(category.id)
  }

  getProducts = (categoryId) => {
    let url = 'http://localhost:3000/products'
    if (categoryId) {
      url += '/?categoryId=' + categoryId
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }))
  }
  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((C) => C.product.id !== product.id)
    this.setState({ cart: newCart })

    alertify.error(product.productName + ' Removed from Cart', 2)
  }
  addToCart = (product) => {
    let newCart = this.state.cart
    var addedItem = newCart.find((c) => c.product.id === product.id)

    if (addedItem) {
      addedItem.quantity += 1
    } else {
      newCart.push({ product: product, quantity: 1 })
    }
    this.setState({ cart: newCart })
    alertify.success(product.productName + ' Aded to Cart', 2)
  }

  render() {
    let titleProduct = 'Product List'
    let titleCategory = 'Category List'
    return (
      <div>
        <Container color='success'>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />

          <Row>
            <Col xs="4">
              <CategoryList 
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                title={titleCategory}
              />
            </Col>
            <Col xs="">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <ProductList
                      {...props}
                      addToCart={this.addToCart}
                      products={this.state.products}
                      currentCategory={this.state.currentCategory}
                      title={titleProduct}
                    />
                  )}
                />
                <Route
                  exact
                  path="/cart"
                  render={(props) => (
                    <CartList
                      {...props}
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    />
                  )}
                />
                <Route path="/form1" component={FormDemo1} />
                <Route path="/form2" component={FormDemo2} />
                <Route component={NotFound} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
