import React from 'react';
import { useState } from 'react';
import '../styles/cards.css'

const Cards = ({item, handleClick,cart}) => {
    const {title, author, price, img} = item;
    const [text, setText]= useState("Add to cart");
    // const remove=()=>
    // {
    //   if(text=="Add to cart")
    //   {
    //     setText("Remove");
    //   }
    //   else{
    //     setText("Add to cart");
    //   }
    // }

    const addItem = (item) => {
      const index = cart.findIndex((cartItem) => cartItem.id === item.id);
      if (index >= 0) {
        cart.splice(cart.findIndex(cartitem => cartitem.id === item.id), 1)
      } else {
        cart.push({ ...item });
      }
      cart.setCart(cart);
  };


    const btn=(product)=>{
      const index = cart.findIndex((item) => item.id === product.id);  
      if (index >= 0) {
          return true
      }
      return false
  }
      
  return (
    <section>
        <div className="cards">
        <div className="image_box">
            <img src={img} alt="Image" />
        </div>
        <div className="details">
            <p>{title}</p>
            <p>{author}</p>
            <p>Price - {price}Rs</p>
            <button onClick={() => handleClick(item)}>{btn(item)? "Remove from Cart" : "Add to Cart" }</button>
        </div>
    </div>
    </section>
    
  )
}

export default Cards