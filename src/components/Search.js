import React, { memo, useEffect } from 'react'
import '../styles/search.css'
import { Link } from "react-router-dom"
import list from '../data';
const Search = (props) => {
  const { setSearchState, searchCart } = props;
  console.log("search render", searchCart);

 

  const Validate = (check) => {
    const filter = list.filter((item) => check === item.genre);
    setSearchState(filter);
  }

  const clearSearchCart = () => {
    setSearchState([]);
  }
useEffect (()=>{
  list.forEach((item)=>{
    const searchButtonColor = document.getElementById(item.genre);
    if (searchCart.length===0)
    {
      document.getElementById('ALL BOOKS').style.backgroundColor="SKYBLUE";
      searchButtonColor.style.backgroundColor="WHITE";
    }
    else if(searchCart[0].genre===item.genre)
    {
      searchButtonColor.style.backgroundColor="skyblue";
    }
    else{
      searchButtonColor.style.backgroundColor="white";
      document.getElementById('ALL BOOKS').style.backgroundColor="WHITE";
    }


  })
  
},[searchCart])

  return (
    <div className='search'>
      {console.log("search render")}
      <div className='title'>
        GENRE SEARCH
      </div>
      <Link  to="/"><div id='ALL BOOKS' className='books' onClick={() => clearSearchCart()} >ALL BOOKS</div></Link>
      <Link to="/individual"><div id='Children books' className='books' onClick={() => Validate("Children books")}>Children Books</div></Link>
      <Link to="/individual"><div id='Horror books' className='books' onClick={() => Validate("Horror books")}>Horror books</div></Link>
      <Link to="/individual"><div id='Love books' className='books' onClick={() => Validate("Love books")}>Love books</div></Link>
      <Link to="/individual"><div id='Action books' className='books' onClick={() => Validate("Action books")}>Action books</div></Link>
      <Link to="/individual"><div id='Marvel books' className='books' onClick={() => Validate("Marvel books")}>Marvel books</div></Link>


    </div>
  )
}

export default memo(Search)
