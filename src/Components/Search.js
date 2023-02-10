import React, { useEffect } from 'react'
import axios from 'axios';
import { Link,useParams } from 'react-router-dom'
import { useState } from 'react';
function Search() {
  const {movie}  = useParams();
  const url = `https://imdb-api.com/en/API/Search/k_wuz3949o/${movie}`
  const [data,setData]=useState();
  useEffect(()=>{
    async function fun1(){
      const response = await axios.get(url)
      setData(response);
      console.log(response.data.results);
      setData(response.data.results)
      
      
      
    }
    fun1();
  },[url])

  console.log(url)
  return (
    
    <div className='movieCards'>
    {
      data ?.map((card)=>(
        <div className='movieCard'> 
    <Link className='movieCardLink' to={`/movie/${card.id}`}>
    <img src={card.image} alt='movie img' className='movieCardImg' />
    
     <h1 className='movieCardTitle'>{card.title}</h1>
     </Link> 
     </div>

      ))
    }
    
 
      </div>
  )
}

export default Search