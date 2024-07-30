import React, { useState } from 'react'
import './searchbar.css'
import { Link } from 'react-router-dom'
const types = ["buy", "rent"]
function SearchBar() {
   const[query, setQuery] = useState({
        type:"buy",
        location:"",
        minPrice:0,
        maxPrice:0,
    })
    const switchType = (val) => {
        setQuery((prev)=>({...prev, type:val}))
    }
  return (
    <div className="searchBar">
    <div className="type">
        {types.map((type)=>(
            <button key={type}
            onClick={()=>switchType(type)}
            className={query.type === type?"active":""}>{type}</button>
        ))}
    </div>
    <form>
      <input type="text" name='location' placeholder='London'/>
      <input type="number" name='minPrice' placeholder='Min Price' 
      min={0}
      max={100000}/>
      <input type="number" name='maxPrice' placeholder='Max Price' 
      min={0}
      max={100000}/>
      <button type='submit'>
        <img src="search.png" alt="" />
        <Link to='/list'>
          <span className="search">Search</span>
        </Link>
      </button>
    </form>
    </div>
  )
}

export default SearchBar