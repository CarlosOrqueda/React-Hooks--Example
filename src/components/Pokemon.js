import React, { Fragment, useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

export default function Pokemon() {

    const pokemonName = useParams().name

    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        const jsonPokemon = async () => {
            const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            const pokemonJson = await pokemonData.json()
            setPokemon(pokemonJson)
        }
        jsonPokemon()
    }, [pokemonName])

    return (
        <Fragment>

        <h2>{pokemon.name} - {pokemon.id}</h2>

        <ul>
            {
                (pokemon.stats != null && pokemon.stats.length > 0) ?
                    pokemon.stats.map(value => (
                        <li key={value.stat.name}>
                            {value.stat.name} - Base stat: {value.base_stat} - Effort: {value.effort}
                        </li>
                    ))
                    :
                    (<li>No existen datos</li>)
            }
        </ul>
        </Fragment>
    )
}