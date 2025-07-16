import React from 'react'
import { Link } from 'react-router-dom'

const ProdNav = () => {
  return (
    <div>
          <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#0b34ade1' }}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">PRODUCT APP</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">ADD PRODUCT</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/search">SEARCH PRODUCT</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/delete">DELETE PRODUCT</Link>
        </li>
               <li class="nav-item">
          <Link class="nav-link" to="/view">VIEW ALL PRODUCTS</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default ProdNav