import React,{useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Movie from './components/Movie';
const API_URL = 'https://swapi.dev/api/films'

const App = () => {
  const [starWarsMovies,setStarWarsMovies] = useState(null); // we will store a list of movies -> title,opening_crawl,characters,director,planets,species,starships,vehicles
  const [currentViewingMovie,setCurrentViewingMovie] = useState(null);  
  const [isLoading,setIsLoading] = useState(true); 
console.log(isLoading)
  useEffect(()=>{
    axios.get(API_URL).then(val=>{setStarWarsMovies(Array.from(val.data.results));setIsLoading(false);}); 
     axios.get('https://swapi.dev/api/people/73/').then(val=>console.log(val)); 
  },[])
  
  return (
    <div className="App">
      <h1 className="Header">Movies</h1>
      {starWarsMovies!=null && !starWarsMovies[currentViewingMovie] ? <div>{((starWarsMovies)).map((val,index)=><Movie setLoading={(d)=>setIsLoading(d)} setViewing={()=>{setCurrentViewingMovie(index);console.log(`you pressed: ${val.title}`)}} movie={val} key={val.title}></Movie>)}</div>
      : starWarsMovies!=null&&<Movie expanded setLoading={(d)=>setIsLoading(d)} setViewing={()=>setCurrentViewingMovie(null)} movie={starWarsMovies[currentViewingMovie]} key={starWarsMovies[currentViewingMovie].title}></Movie>  
    }
    {isLoading && <h1> LOADING </h1>}
    </div>
  );
}

export default App;
