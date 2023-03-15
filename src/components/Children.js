import React from 'react'
import Cards from './Cards'
import list from '../data';

const Children = ({cart,setCart}) => {

  return (
    <section>
    {
            list.map((item)=>(
                item.genre==="Children books" ?
                <Cards item={item} key={item.id} cart={cart} setCart={setCart}/>: ""
            ))
        }
    </section>  
  )
}

export default Children
