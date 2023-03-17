import React from 'react';
import "../styles/cart.css";
import { UseMyContext } from '../App';
const Cart = () => {
    const {cart,handleChange,handleRemove}=UseMyContext();
  return (
    <article>
        {
            cart.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.img} />
                        <p>{item.title}</p>
                    </div>
                    <div className='inc-button'>
                        <button onClick={()=>handleChange(item, +1)}> + </button>
                        <button>{item.amount}</button>
                        <button onClick={()=>handleChange(item, -1)}> - </button>
                    </div>
                    <div className='remove-button'>
                        <div>Price-{item.price} Rs</div>
                        <button onClick={()=>handleRemove(item)} >Remove</button>
                    </div>
                </div>
            ))}
    </article>
  )
}

export default Cart