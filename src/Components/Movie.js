import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
function Movie() {

  const {movieId} = useParams();
 
  const url = `https://imdb-api.com/en/API/Title/k_jxvvc2wq/${movieId}`;
  const url1 = `https://imdb-api.com/en/API/Trailer/k_jxvvc2wq/${movieId}`
  
  const [data,setData] = useState();
  const [trailer,setTrailer]=useState();
  useEffect(()=>{
    async function fun1() {
      const response = await axios.get(url);
      console.log(response);
      setData(response.data)
    }
    fun1()
  },[url]);
  useEffect(()=>{
    async function fun1() {
      const response = await axios.get(url1);
      console.log(response);
      setTrailer(response.data)
    }
    fun1()
  },[url1])
  return (
    
      <div>
      <div className='coverImg'>
        <img src={trailer?.thumbnailUrl} alt='cover' className='coverMainImg'/>
      </div>
      <div className='movieBody'>
        <div className='movieContainer'>
          <div className='movieRating'>
            <img src={data?.image} alt='displayPic'/>
            <p>
              <span>{data?.imDbRating}</span>/10
            </p>
          </div>
          <div className='movieDescription'>
            <h1>{data?.title}</h1>
            <p>{data?.year}</p>
            <p>{data?.genres}</p>
            <p>{data?.plot}</p>
          </div>
        </div>
        <div className='cast'>
          <div className='castHeading'>
            <h1>Cast</h1>
            <p>Cast overview, first billed only</p>
          </div>
          <div className='castName'>
            {data?.actorList?.map((actor)=>(
              <div>
              <Link className='actorLink' to={`/actor/${actor.id}`}>
                <div className='castActors'>
                  <div className='castCircle'>
                    <img src={actor.image} className='cardImg' />
                  </div>
                  <div className='castActorName'>
                    <h2>{actor.name}</h2>
                    <p>{actor.asCharacter}</p>
                  </div>
                </div>
              </Link>
            </div>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie