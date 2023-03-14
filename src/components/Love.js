import React from 'react'
import list from '../data';
import Cards from './Cards'

const Love = ({handleClick,cart,setCart}) => {

  return (
    <section>
    {
            list.map((item)=>(
                item.author==="Love books" ?
                <Cards item={item} key={item.id} handleClick={handleClick} cart={cart} setCart={setCart}/>: ""
            ))
        }
    </section>  
  )
}

export default Love
