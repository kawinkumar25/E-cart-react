
import "../styles/cart.css";

const Cart = ({cart, setCart, handleChange}) => {

    const handleRemove = (item) =>{
        const index = cart.findIndex((product) => product.id === item.id);
        if (index >= 0) {
          cart.splice(index, 1)
          setCart([...cart]);
        }
    }

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
