import React , {useState, useEffect } from 'react'

const Main= () => {
    const [pokemons, setPokemons] = useState([]);

    const fetchall=() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setPokemons(response.results))
    };
    return (
        <div>
            <button type="submit" onClick={fetchall}>Fetch All Pokemons</button>
            
                    {pokemons.map(p =>
                        <p>{p.name}</p>
                        )}
                
        </div>
    )
}

export default Main
