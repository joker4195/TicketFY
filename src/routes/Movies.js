import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import MovieBox from '../components/MoviesBox';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../routes/MoviesStyles.css"
const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=694b89d9c0178cf27031cb60407c5555";
function Movies() {

  const [movies,setMovies]=useState([]);

  useEffect(()=> {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results)
    })
  } , [ ])
  return (

    <div className="container">
      <div className="grid">
      {movies.map((moviesReq)=>
      <MovieBox key={moviesReq.id}{...moviesReq}/>)}
      </div>
       <Footer></Footer>
      </div>
  )
}

export default Movies
