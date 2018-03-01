import React, { Component } from 'react'
import {
  Modal,
  Button,
  Row,
  Col
} from 'react-bootstrap'
import { connect } from 'react-redux'

class ModalCheckout extends Component {
  render() {
    return (
      <div>
        <Modal show={ this.props.modalOpen } onHide={ this.props.modalClose }>
          <Modal.Header closeButton>
            <Modal.Title>Your Checkout</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            { this.props.cart.map((r, i) => (
              <Row key={ i } className="checkout">
                <Col md={ 2 } xs={ 1 }>
                  { i + 1 }
                </Col>
                <Col md={ 2 } xs={ 3 }>
                  <img src={ r.image } width="50" alt={ r.name } />
                </Col>
                <Col md={ 2 } xs={ 2 }>
                  { r.name }
                </Col>
                <Col md={ 2 } xs={ 2 }>
                  <span className="price">{ r.qty } pcs</span>
                </Col>
                <Col md={ 2 } xs={ 2 }>
                  <span className="price">Rp. { r.total_price }</span>
                </Col>
              </Row>
            )) }
            <Row className="totalCheckout">
              <Col md={ 8 } xs={ 8 }>
                Total
              </Col>
              <Col md={ 4 } xs={ 4 }>
                <span className="price">Rp. { this.props.totalPrice }</span>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={ this.props.modalClose }>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart,
    totalPrice: state.cartReducer.totalPrice
  }
}

export default connect(mapStateToProps)(ModalCheckout)
