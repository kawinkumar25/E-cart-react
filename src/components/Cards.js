import React ,{ useState } from 'react';

import '../styles/cards.css'

const Cards = ({item, handleClick,cart}) => {
    const {title, author, price, img} = item;
    


    const btn=(product)=>{
      const index = cart.findIndex((item) => item.id === product.id);  
      if (index >= 0) {
          return true
      }
        else{
            return false
        }
      
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
