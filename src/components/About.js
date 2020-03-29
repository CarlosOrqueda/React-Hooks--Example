import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function About() {

    const [users, setUsers] = useState([])
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        jsonDataUsers()
        jsonDataCivilizations()
    }, [])

    const jsonDataUsers = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const usersJson = await data.json()
        setUsers(usersJson)
    }

    const jsonDataCivilizations = async () => {
        const data = await fetch('https://pokeapi.co/api/v2/pokemon')
        const pokemonsList = await data.json()
        setPokemons(pokemonsList.results)
    }

    return (
        <Fragment>
            <p>About page</p>
            <hr />
            <h1>Users</h1>
            <ul>
                {
                    users.map(user => (
                        <li key={user.id}>
                            {user.name} - {user.email}
                        </li>
                    ))
                }
            </ul>
            <hr/>
            <h1>Pokemons</h1>
            <ul>
                {
                    pokemons.map(pokemon => (
                        <li key={pokemon.name}>
                            <Link to={`/about/${pokemon.name}`}>
                                {pokemon.name} - {pokemon.url}
                            </Link>   
                        </li>
                    ))
                }
            </ul>
        </Fragment>
    )
}