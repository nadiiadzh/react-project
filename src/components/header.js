import React from 'react'
import test from 'img/logo.png'

const Header = () => {

    //const reactLogo =('img/logo.png').default -----(<img className="logo" src={test} /)
    return (
    <>
      <header className="page-header">
        <a href="index.html" ><img className="logo" src={test} /></a>

        {/* <!-- Navigation menu and toggle button (non-functional) --> */}

        <a className="nav-toggle"><i className="fas fa-bars"></i></a>

        <nav aria-label="Primary"  className="navigation">
          <ul className="menu" className="open" >
            <li><a href="#">Home</a></li>
            <li><a href="#">Women's Perfume</a></li>
            <li><a href="#">Men's Cologne</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

        {/*<!-- Search for a product (non-functional) -->*/ }

        <form className="search">
          <input type="search" name="find" className="find" placeholder="Search..." />
          <a className="search-btn"><i className="fas fa-search search-icon"></i></a>
        </form>

        {/*<!-- Additional links --> */}

        <ul className="your-products">
          <li><a href="#"><i className="fas fa-heart"></i></a></li>
          <li><a href="#"><i className="fas fa-cart-plus"></i></a></li>
        </ul>
  
      </header>
          
    </>
  )
}

export default Header