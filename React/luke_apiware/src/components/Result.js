import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Result=(props)=> {
    const [display, setDisplay] = useState("")
    useEffect(() => {
        axios.get('https://swapi.dev/api/'+props.var1+'/'+props.var2)
        .then(response => setDisplay(response.data))
    }, [props.one,props.two]);

    if (props.var1=="people"){
    return (
        <div> 
            <h1>{display.name}</h1>
            <h3>Height: {display.height}</h3>
            <h3>Hair Color: {display.hair_color}</h3>
            <h3>Skin Color: {display.skin_color}</h3>
            {console.log(display)}
        </div>
    )}
    if (props.var1=="planets"){
        return (
            <div>
                <h1>{display.name}</h1>
                <h3>Climate: {display.climate}</h3>
                <h3> Terrain: {display.terrain}</h3>
                <h3> Surface water: {display.surface_water}</h3>
                <h3>Population: {display.population}</h3>
                {console.log(display)}
            </div>
        )}
        else{
            return (
                <div>
                    <h1>{display.name}</h1>
                    <h3>Model: {display.model}</h3>
                    <h3>Manufacturer:{display.manufacturer}</h3>
                    <h3>Cost in credits: {display.cost_in_credits}</h3>
                    {console.log(display)}
                </div>
            )
        }
}

export default Result
