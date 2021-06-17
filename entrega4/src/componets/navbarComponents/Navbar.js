/* eslint-disable jsx-a11y/anchor-is-valid */

import cart from './cart.svg';
import React from 'react'


const navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page">Comida</a>
              <a className="nav-link active" aria-current="page">Bebidas</a>
              <a className="nav-link active" aria-current="page">Dulces</a>
              <a className="nav-link active" aria-current="page">Manjares</a>
              <a className="nav-link active" aria-current="page">
              <button type="button" class= "btn btn-secondary">
              <img src={cart} className="App-logo" alt="cart" />
              </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default navbar
