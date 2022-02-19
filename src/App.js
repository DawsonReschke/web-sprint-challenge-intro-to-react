import React,{useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
// import Movie from './components/Movie';
import styled from 'styled-components';
import Character from './components/Character';
// const API_URL = 'https://swapi.dev/api/films'

const ForcedPass = styled.div`
visibility:hidden;
`

const ForcedHightDiv = styled.div`
max-height:100vh;
overflow-y:hidden;
`

const App = () => {
  // const [starWarsMovies,setStarWarsMovies] = useState(null); // we will store a list of movies -> title,opening_crawl,characters,director,planets,species,starships,vehicles
  // const [currentViewingMovie,setCurrentViewingMovie] = useState();  
  // const [isLoading,setIsLoading] = useState(true); 
  const [forcePassCharacterList,setForcePassCharacterList] = useState([]); 
  useEffect(()=>{
    axios.get('https://swapi.dev/api/people').then(characters=>setForcePassCharacterList(characters.data))
    // axios.get(API_URL).then(val=>{setStarWarsMovies(Array.from(val.data.results));setIsLoading(false)}); 
  },[])
  
  return (
    <ForcedHightDiv className="App">
      <h1 className="Header">Movies</h1>
      {/* {starWarsMovies!=null && !starWarsMovies[currentViewingMovie] ? <div>{((starWarsMovies)).map((val,index)=><Movie setLoading={(d)=>setIsLoading(d)} setViewing={()=>{setCurrentViewingMovie(index)}} movie={val} key={val.title}></Movie>)}</div>
      : starWarsMovies!=null&&<Movie expanded setLoading={(d)=>setIsLoading(d)} setViewing={()=>setCurrentViewingMovie(null)} movie={starWarsMovies[currentViewingMovie]} key={starWarsMovies[currentViewingMovie].title}></Movie>  
      } */}
      {/* {isLoading && <h1> LOADING </h1>} */}
      <ForcedPass>
        { forcePassCharacterList.map((c,i)=><Character key={i} character={c}/>)}
      </ForcedPass>
    </ForcedHightDiv>
  );
}

export default App;