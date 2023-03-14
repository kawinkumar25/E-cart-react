import React from 'react';
import list from '../data';

import '../styles/amazon.css';
import Cards from './Cards';

const Amazon = ({handleClick,cart,setCart}) => {
  return (
    <section>
        {
            list.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} cart={cart} setCart={setCart} />
            ))
        }
       
    </section>
  )
}

export default Amazon