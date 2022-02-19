import React from "react";
import styled from "styled-components";

const SpecializedButton = styled.button`
background-color:rgba(165,55,253,0.50);
border: 1px solid black; 
padding:1%;
margin:1%;
font-weight:bold;
transition: background-color 0.2s;
&:hover{
   background-color: rgba(255,55,253,0.75);
}
`

const OptionButton = (props)=>{
    return(
        <SpecializedButton onClick={()=>props.clickHandler()}>{props.name}</SpecializedButton>
    )
}

export default OptionButton;