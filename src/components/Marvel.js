import React from 'react'
import list from '../data';
import Cards from './Cards'

const Marvel = ({cart,setCart}) => {

  return (
    <section>
    {
            list.map((item)=>(
                item.genre==="Marvel books" ?
                <Cards item={item} key={item.id}  cart={cart} setCart={setCart}/>: ""
            ))
        }
    </section>  
  )
}

export default Marvel
