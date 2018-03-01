import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col,
  Button
} from 'react-bootstrap'
import { connect } from 'react-redux'

import { add_to_cart } from '../actions/cartAction'

import ModalAddCart from './ModalAddCart'

class Content extends Component {

  constructor() {
    super()
    this.state = {
      showModal: false
    }

    this.addToCart = this.addToCart.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  addToCart(item) {
    this.setState({
      showModal: true
    })
    setTimeout(() => {
      this.setState({
        showModal: false
      })
    }, 900)
    this.props.addCart(item)
  }

  handleCloseModal() {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col md={ 12 }>
              <h1 className="title-sale">Sale!</h1>
            </Col>
          </Row>
          <Row>
            { this.props.item.map((r, i) => (
              <Col md={ 4 } key={ i }>
                <div className="body-grid">
                  <h3>{ r.name }</h3>
                  <img src={ r.image } width="200" alt={ r.name } />
                  <p className="price-content price">Rp. { r.price }</p>
                  <p>
                    <Button bsStyle="success" onClick={ () => this.addToCart(r) }>
                      Add to Cart
                    </Button>
                  </p>
                </div>
              </Col>
            )) }
          </Row>
        </Grid>
        <ModalAddCart showModal={ this.state.showModal } hideModal={ this.handleCloseModal } />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    item: state.itemReducer.item
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCart: (item) => dispatch(add_to_cart(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
