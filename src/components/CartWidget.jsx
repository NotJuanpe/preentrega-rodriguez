import React from 'react'

const CartWidget = () => {
  return (
    <button class="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0" onClick={click => (alert('Carrito'))} data-bs-toggle="modal" data-bs-target="#feedbackModal">
        <span class="d-flex align-items-center">
            <i class="bi bi-cart-fill me-2"></i>
            <span class="small">Shopping Cart</span>
        </span>
    </button>
  )
}

export default CartWidget