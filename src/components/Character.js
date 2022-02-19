// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const ForcePass= styled.div`
border: 1px solid lemonchiffon;
border-radius: 20%;
margin: 5%
`

const CharacterItem = (props) => {
    const {character} = props

    return(
       <ForcePass >
        <h2>{character.name}</h2>
      </ForcePass>
    )
}


export default CharacterItem