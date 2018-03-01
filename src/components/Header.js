import React, { Component } from 'react'
import {
  Navbar,
  Nav,
  NavItem,
  Row,
  Col,
  Button,
  Popover,
  ButtonToolbar,
  OverlayTrigger
} from 'react-bootstrap'
import { connect } from 'react-redux'

import { remove_from_cart } from '../actions/cartAction'

import ModalCheckout from './ModalCheckout'

class Header extends Component {

  constructor() {
    super()
    this.state = {
      showModal: false
    }

    this.handleModalClose = this.handleModalClose.bind(this)
    this.handleModalOpen = this.handleModalOpen.bind(this)
  }

  handleModalClose() {
    this.setState({
      showModal: false
    })
  }

  handleModalOpen() {
    this.setState({
      showModal: true
    })
  }

  removeFromCart(id) {
    this.props.remove(id)
  }

  render() {
    const nothingItem = (
      <Popover id="popover-positioned-bottom" title="Your Cart">
        Gak Ada Item, Beli dulu!
      </Popover>
    )
    const cart_item = (
      <Popover id="popover-positioned-bottom" title="Your Cart">
        { this.props.cart.map(r => (
          <Row className="list-item" key={ r.id }>
            <Col md={ 2 } xs={ 2 }>
              <Button
                bsSize="xsmall"
                bsStyle="danger"
                onClick={ () => this.removeFromCart(r.id) }
              >
                x
              </Button>
            </Col>
            <Col md={ 5 } xs={ 5 }>
              <div>
                <p>{ r.name }</p>
                <img src={ r.image } width="50" alt={ r.name } />
              </div>
            </Col>
            <Col md={ 5 } xs={ 5 }>
              <div className="cart-right">
                <p>{ r.qty } pcs</p>
                <p>Rp. { r.total_price }</p>
              </div>
            </Col>
          </Row>
        )) }
        <Row className="line-but">
          <Col md={ 7 } xs={ 7 }>
            Total
          </Col>
          <Col md={ 5 } xs={ 5 }>
            <span className="price-cart">Rp. { this.props.totalPrice }</span>
          </Col>
        </Row>
        <Row>
          <Col md={ 12 }>
            <Button bsStyle="success" className="btn-block" onClick={ this.handleModalOpen }>
              Checkout
            </Button>
          </Col>
        </Row>
      </Popover>
    )
    return (
      <div>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">React-Ecomm</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem>
              <ButtonToolbar>
                <OverlayTrigger trigger="click" placement="bottom" overlay={ this.props.cart.length === 0 ? nothingItem : cart_item}>
                  <Button className="btn-cart-item">Your Cart: { this.props.itemCart.length } item</Button>
                </OverlayTrigger>
              </ButtonToolbar>
            </NavItem>
          </Nav>
        </Navbar>
        <ModalCheckout modalOpen={ this.state.showModal } modalClose={ this.handleModalClose } />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart,
    itemCart: state.cartReducer.itemCart,
    totalPrice: state.cartReducer.totalPrice
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (id) => dispatch(remove_from_cart(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)