import React , {useState} from 'react';
import Navbar from './components/Navbar';
import Amazon from './components/Amazon';
import Cart from './components/Cart';
import Search from './components/Search';
import Children from './components/Children';
import Love from './components/Love';
import Action from './components/Action';
import Marvel from './components/Marvel';
import './styles/amazon.css';
import list from './data';
import {Routes,Route } from 'react-router-dom';
import './App.css';
import Horror from './components/Horror';
const App = () => {
	
	 const [cart , setCart] = useState([]);
	
	const details = [...list];
	console.log(details);

	const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}

  return (
	<>
		<div className='wholePage'>
			<Navbar size={cart.length} setShow={setShow} />
			<div className='search-and-list'>
				<Search className="partOne" />
				
				<Routes>
					<Route exact path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />}/>
					<Route exact path="/children" element={<Children  cart={cart} setCart={setCart} />}></Route>
					<Route exact path="/horror" element={<Horror  cart={cart} setCart={setCart}/>}></Route>
					<Route exact path="/love" element={<Love  cart={cart} setCart={setCart}/>}></Route>
					<Route exact path="/action" element={<Action  cart={cart} setCart={setCart}/>}></Route>
					<Route exact path="/marvel" element={<Marvel  cart={cart} setCart={setCart}/>}></Route>
					<Route exact path="/" element={<Amazon cart={cart} setCart={setCart} className="partTwo"/>}/>
				</Routes>
			</div>
		
		</div>
	</>
  )
}

export default App
