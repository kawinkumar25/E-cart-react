import React,{ useState } from 'react';

import '../styles/cards.css'

const Cards = ({item,cart,setCart}) => {
    const {title, genre, price, img} = item;
 
    const addItem = (item) => {
      const index = cart.findIndex((product) => product.id === item.id);
      if (index >= 0) {
        cart.splice(index, 1)
        setCart([...cart]);
      } else {
        setCart([...cart, item]);
      }
  };


    const btn=(product)=>{
      const index = cart.findIndex((item) => item.id === product.id);  
      return  index >= 0 ;
      
  }
      
  return (
    <section>
        <div className="cards">
        <div className="image_box">
            <img src={img} alt="Image" />
        </div>
        <div className="details">
            <p>{title}</p>
            <p>{genre}</p>
            <p>Price - {price}Rs</p>
            <button onClick={() => addItem(item)}>{btn(item)? "Remove from Cart" : "Add to Cart" }</button>
        </div>
    </div>
    </section>
    
  )
}

export default Cards
