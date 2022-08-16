import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



export default function Fight() {
    const {id: pokemonPlayerId} = useParams()
    const [pokemonPlayer, setPokemonPlayer] = useState({});
    const [pokemonNPC, setPokemonNPC] = useState({});
    
    const min = 2
    const max =809
    
    const randomId = (min, max) => Math.floor(Math.random() * (max - min) ) + min

    console.log(pokemonNPC.length)
    useEffect( () => {

        const asyncFetch = async () => {
            if(!pokemonNPC.length){
            
                await fetch(`https://g2-pokemon-api.herokuapp.com/pokemon/${pokemonPlayerId}`)
                    .then(response => response.json())
                    .then(data => setPokemonPlayer(data))
                await fetch(`https://g2-pokemon-api.herokuapp.com/pokemon/${randomId(min,max)}`)
                    .then(response => {
                        //console.log(response)
                        return response.json()
                    })
                    .then(data => {
                        console.log(data)
                        setPokemonNPC(data)
                        console.log(pokemonNPC)
                    })
                
            }
        }
        asyncFetch()
    },[])

    return (
        <div>

        </div>
    )
}

