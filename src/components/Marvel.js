import React from 'react'
import list from '../data';
import Cards from './Cards'

const Marvel = ({handleClick,cart,setCart}) => {

  return (
    <section>
    {
            list.map((item)=>(
                item.author==="Marvel books" ?
                <Cards item={item} key={item.id} handleClick={handleClick} cart={cart} setCart={setCart}/>: ""
            ))
        }
    </section>  
  )
}

export default Marvel
