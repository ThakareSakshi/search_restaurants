import React, { useEffect } from 'react'
import Cards from './Cards'
import ResturantsList from './ResturantsList.json'
import { useState } from 'react'

const SearchBox = () => {
  const [minRating,setMinRating]=useState(0);
  const [restroName,setRestroName]=useState("");
  const [restroList,setRestroList]=useState(ResturantsList);

  const handleminRating=(e)=>{
    setMinRating(e.target.value)
    // filterList(e.target.value,restroName)
  }

  const handleRestroName=(e)=>{
    setRestroName(e.target.value)
    // filterList(minRating,e.target.value)
  }

  useEffect(()=>{
    const newlist=ResturantsList.filter((item)=>{
      return (item.name.toLowerCase().includes(restroName.toLowerCase()) && parseInt(item.rating)>=minRating)
    })
    setRestroList(newlist)

  

  },[minRating,restroName])

 

  return (
    <div>
        <div className='search-box'>
        <input type="text" placeholder='search resturant' value={restroName} onChange={handleRestroName}/>
        <div>Minimum Rating:<input type="number" placeholder='rating' value={minRating} onChange={handleminRating}/></div>
        </div>
        <div className='card-wrapper'>
            {
                restroList.map((data)=><Cards key={data._id._id} {...data}/>)
            }
        </div>

      
    </div>
  )
}

export default SearchBox
