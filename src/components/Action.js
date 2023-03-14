import React from 'react'
import list from '../data';
import Cards from './Cards'

const Action = ({handleClick,cart,setCart}) => {

  return (
    <section>
    {
            list.map((item)=>(
                item.author==="Action books" ?
                <Cards item={item} key={item.id} handleClick={handleClick} cart={cart} setCart={setCart}/>: ""
            ))
        }
    </section>  
  )
}

export default Action
