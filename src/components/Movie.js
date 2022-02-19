import React,{useState} from "react";
import Title from "./Title";
import OptionButton from "./OptionButton";
import GeneralMovieData from "./GeneralMovieData";
import ListWrapper from "./ListWrapper";
import styled from "styled-components";

const BoarderBox = styled.div`
    width:50%;
    margin: 1% auto;
    border: 1px solid black;
    background-color: rgba(255,255,255,0.5);
    border-radius:10%;
`

const excludedButtonProps = ['title','episode_id','opening_crawl','director','producer','release_date','created','edited','url']
const Movie = (props)=>{
    const [viewSpecificList,setViewSpecificList] = useState(null)
    return(
        <BoarderBox >
            {props.movie.title && <Title onClick={()=>props.setViewing()} title={props.movie.title}></Title>}
            {props.expanded && <GeneralMovieData director={props.movie.director} producer={props.movie.producer} opening_crawl={props.movie.opening_crawl} release_date={props.movie.release_date}></GeneralMovieData>}
            {props.expanded && !viewSpecificList? Object.keys(props.movie).filter(data=>!excludedButtonProps.includes(data)).map((val)=><OptionButton clickHandler={()=>setViewSpecificList(val)} name={val}></OptionButton>)
            : props.expanded && <ListWrapper setViewSpecificList={()=>setViewSpecificList(null)} setLoading={props.setLoading} listType={viewSpecificList} data={props.movie[viewSpecificList]}></ListWrapper>
            }
        </BoarderBox>
    )
}

export default Movie;