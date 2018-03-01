import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'

export default class ModalAddCart extends Component {
  render() {
    return (
      <div>
        <Modal 
          show={ this.props.showModal } 
          onHide={ this.props.hideModal }
          bsSize="small"
        >
          <Modal.Body>
            <div className="sa">
              <div className="sa-success">
              <div className="sa-success-tip"></div>
              <div className="sa-success-long"></div>
              <div className="sa-success-placeholder"></div>
              <div className="sa-success-fix"></div>
              </div>
            </div>
            <p className="text-center">
              Success Add to your cart!
            </p>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}
