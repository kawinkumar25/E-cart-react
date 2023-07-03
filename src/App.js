import React , {createContext, useState,useContext, useMemo} from 'react';
import {Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Search from './components/Search';
import Individual from './components/Individual';
import Cards from './components/Cards';
import Footer from './components/Footer';
import './App.css';

const mycontext = createContext();
const App = () => {
	 const [cart , setCart] = useState([]);
	 const [searchCart,setSearchCart] = useState([]);

	const handleChange = (item, d) =>
	{
		console.log("inc change")
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
				
		});
		let tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}

	const handleRemove =  (item) =>{
		console.log("romove render")

        const index = cart.findIndex((product) => product.id === item.id);
        if (index >= 0) {
          cart.splice(index, 1)
          setCart([...cart]);
        }
    }

	const addItem = (item) => {
		const index = cart.findIndex((product) => product.id === item.id);
		
		if (index >= 0) 
		{
		  cart.splice(index, 1)
		  setCart([...cart]);
		} 
		else 
		{
		  setCart([...cart, item]);
		}
	};
  
  
	const btn=(product)=>{
		const index = cart.findIndex((item) => item.id === product.id);  
		return  index >= 0 ;
		
	};

	const contextValue = useMemo(()=>({cart, setCart,searchCart,addItem,btn,handleRemove,handleChange})
	,[cart,searchCart])
  return (
	<>
		
		<div className='wholePage'>
			<Navbar cart ={cart.length}  />
			
			<div className='search-and-list'>
			<Search className="partOne"  setSearchState={setSearchCart} searchCart={searchCart}/>

			<mycontext.Provider value = {contextValue}>
				<Routes>
					<Route exact path="/" element={<Cards />}/>
					<Route exact path="/cart" element={<Cart  />}/> 
					<Route exact path="/individual" element={<Individual />}/>

				</Routes>
			</mycontext.Provider>
			</div>
			
			<Footer/>
		</div>
		
	</>
  )
}
export function UseMyContext()
{
	return useContext(mycontext);
}

export default App