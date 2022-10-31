import React from 'react'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
<nav class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm mb-5" id="mainNav">
            <div class="container px-5">
                <a class="navbar-brand fw-bold" href="#page-top" onClick={click => (alert('Pop'))}>Ballon</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="bi-list"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto me-4 my-3 my-lg-0">
                        <li class="nav-item"><a class="nav-link me-lg-3" href="#features" onClick={click => (alert('Proximamente'))}>Offerts</a></li>
                        <li class="nav-item"><a class="nav-link me-lg-3" href="#download" onClick={click => (alert('Proximamente'))}>Products</a></li>
                    </ul>
                    <CartWidget/>
                </div>
            </div>
        </nav>
  )
}

export default Navbar