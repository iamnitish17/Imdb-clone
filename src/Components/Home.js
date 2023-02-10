import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
function Home() {
  const [search,setSearch]=useState("");
  console.log(search)
  return (
    <div className='homeBG'>
        <div className='home'>
            <h1>Search your movies</h1>
            <input onChange={(event)=>{
              setSearch(event.target.value)
            }} type='text' placeholder='search movies' value={search} />
            <button>
                <Link to = {`/search/${search}`} > Search</Link>
            </button>
        </div>
    </div>
  )
}

export default Home