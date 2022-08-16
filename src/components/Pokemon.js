import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import PokemonCardDetail from './PokemonCardDetail'

export default function Pokemon() {
  
  const {id} = useParams()
  const [pokemon, setPokemon] = useState([])
  if(pokemon.length === 0){
    fetch( `https://g2-pokemon-api.herokuapp.com/pokemon/${id}`)
      .then(response => response.json())
      .then(data => setPokemon(data))
  }
  console.table(pokemon)
  return (
    <div className='pokemonCardDetail'>
      <PokemonCardDetail pokemonDetails={pokemon} />
    </div>
  )
}
