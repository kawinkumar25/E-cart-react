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
	
	const handleClick = (item)=>{

		let isPresent = false;
		
		cart.forEach((product)=>{
			if (item.id === product.id)
			
			isPresent = true;
            
		})
		if (isPresent){
			
			return ;
		}
		setCart([...cart, item]);
	}
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
					<Route exact path="/children" element={<Children handleClick={handleClick} cart={cart} setCart={setCart}/>}></Route>
					<Route exact path="/horror" element={<Horror handleClick={handleClick} cart={cart} setCart={setCart}/>}></Route>
					<Route exact path="/love" element={<Love handleClick={handleClick} cart={cart} setCart={setCart}/>}></Route>
					<Route exact path="/action" element={<Action handleClick={handleClick} cart={cart} setCart={setCart}/>}></Route>
					<Route exact path="/marvel" element={<Marvel handleClick={handleClick} cart={cart} setCart={setCart}/>}></Route>
					<Route exact path="/" element={<Amazon handleClick={handleClick} cart={cart} setCart={setCart} className="partTwo"/>}/>
				</Routes>
			</div>
		
		</div>
	</>
  )
}

export default App
