import React , { useState, useEffect } from 'react'
import axios from 'axios';

const Main = () => {
    const [pokemons, setPokemons] = useState([]);
    const callall=() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => response.data)
        .then(response => setPokemons(response.results))
    };

    return (
        <div>
            <button type="submit" onClick={callall}>Fetch All Pokemons</button>
            {console.log(pokemons)}
                {pokemons.map(p =>
                            <p>{p.name}</p>
                            )}
                
        </div>
    )
}

export default Main
