import React, { useState } from 'react'
import PokemonCard from './PokemonCard' 

export default function Pokedex() {
  const [pokedex, setPokedex] = useState([])
  if(pokedex.length === 0){
    fetch('https://g2-pokemon-api.herokuapp.com/pokemon')
      .then(response => response.json())
      .then(data => setPokedex(data))
  }
  console.log(pokedex)
  return (
    <div className='pokedex'>
      {pokedex?.map((pokemon, index) => <PokemonCard pokemonId={pokemon.id} pokemonName={pokemon.name.english} key={index} />)}

        
    </div>
  )
}

