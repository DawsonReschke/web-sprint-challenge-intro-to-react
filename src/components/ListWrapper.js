import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ListItem from "./ListItem";

const BorderedDiv = styled.div`
    border:2px solid black;
    border-radius:10px; 
    max-height:45vh;
    background-color: rgba(255,255,255,0.5);
    width:50%;
    margin:3% auto;
    padding:3%;
    overflow-y:scroll;
`

const ListTypeSelector = styled.h2`
width:fit-content; 
padding:1%;
margin:auto;
border-radius:10px;
background-color: rgba(165,55,253,0.50);
transition: background-color 0.2s;
&:hover{
    background-color: rgba(255,55,253,0.75);
}
`

const ListWrapper = (props) =>{
    const [dataList,setDataList] = useState([]); 
    useEffect(()=>{
        props.setLoading(true);
        let tempIndex = []
        const recursiveCallback = (index,array)=> {
            if(index > 0){axios.get(array[index]).then((val)=>{tempIndex.push(val.data); recursiveCallback(index-1,array)})}
            else{axios.get(array[index]).then((val)=>{tempIndex.push(val.data); setDataList(tempIndex); props.setLoading(false);console.log(dataList)})}
        }
        recursiveCallback(props.data.length-1,props.data)
    },[dataList,props])
    return(
        <div >
            <ListTypeSelector onClick={()=>props.setViewSpecificList()}>{props.listType}:</ListTypeSelector>
            {dataList.length > 0 && <BorderedDiv style={{border:' 1px solid black'}}>
                {dataList.map((val,index)=><ListItem key={val.name} data={val.name}>{}</ListItem>)}
            </BorderedDiv>}
        </div>
    )
}

export default ListWrapper