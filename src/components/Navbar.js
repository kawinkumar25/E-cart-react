import React from 'react';
import '../styles/navbar.css';
import {Link} from "react-router-dom";
const Navbar = ({size, setShow}) => {
  return (
    <nav>
        <div className="nav_box">
            <span className="my_shop" onClick={()=>setShow(true)}>
                My Shopping
            </span>
            <div className="cart" onClick={()=>setShow(false)}>
                <span>
                  <Link to="/cart">  <i className="fas fa-cart-plus"></i></Link>
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar