import React from 'react'
import Cards from './Cards'
import list from '../data';

const Children = ({handleClick,cart,setCart}) => {

  return (
    <section>
    {
            list.map((item)=>(
                item.author==="Children books" ?
                <Cards item={item} key={item.id} handleClick={handleClick} cart={cart} setCart={setCart}/>: ""
            ))
        }
    </section>  
  )
}

export default Children
