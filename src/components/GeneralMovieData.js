import React from "react";
import styled from "styled-components";

const OpeningCrawl = styled.p`
padding: 2% 10%;
font-size:1.3rem;
`

const GeneralMovieData = (props) =>{
    return(
        <div>
            <h3>Director: {props.director.toUpperCase()}</h3>
            <h3>Producer: {props.producer.toUpperCase()}</h3>
            <h3>Release Date: {props.release_date}</h3> 
            <h3>
            Opening Crawl:  
            </h3><OpeningCrawl> {props.opening_crawl}</OpeningCrawl>

        </div>
    )
}

export default GeneralMovieData;