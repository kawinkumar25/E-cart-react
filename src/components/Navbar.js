import React,{memo} from 'react';
import '../styles/navbar.css';
import {Link} from "react-router-dom";
 //import { UseMyContext } from '../App';
const Navbar = (props) => {
   //const {cart}=UseMyContext();
   const cart = props.cart;
  return (
    <nav>
        <div className="nav_box">
          {console.log("navbar render")}
            <span className="my_shop" >
                BOOK SHOPPING
            </span>
            <div className="cart" >
                <span>
                  <Link to="/cart">  <i className="fas fa-cart-plus"></i></Link>
                </span>
                <span>{cart}</span>
            </div>
        </div>
      
    </nav>
  )
}

export default memo(Navbar)