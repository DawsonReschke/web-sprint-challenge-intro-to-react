import React from "react";
import styled from "styled-components";
const ButtonTitle = styled.h2`
background-color:rgba(255,255,255,0.2); 
width:fit-content;
border-radius:18px;
margin:1% auto;
padding:1%; 
transition: background-color 0.2s;
&:hover{
    background-color:#FFF;
}
`
const Title = (props)=>{

    return(
        <ButtonTitle onClick={props.onClick}>{props.title}</ButtonTitle>
    )
}

export default Title; 