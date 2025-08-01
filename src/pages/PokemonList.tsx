import React, {FunctionComponent, useState, useEffect} from "react";
import Pokemon from "../models/pokemon";
import POKEMONS from "../models/mock-pokemons";
import PokemonCard from "../components/PokemonCard";

const PokemonList: FunctionComponent= () => {
    
   const [pokemons, setPokemons] = useState<Pokemon[]>([])

   const [count, setCount] = useState(0)

    useEffect(() => {
            setPokemons(POKEMONS);
        }, [])

    return(
        <div>
            <h1 className="center">App Pokemon</h1>
            <div className="container">
                <p>Compteur : {count}</p>
                <button onClick={() => {setCount(count + 1)}}>
                    Clique ici!
                </button>
                <div className="row">
                    {
                        pokemons.map((pokemon) => (
                            <PokemonCard key={pokemon.id} pokemon={pokemon} border="1px solid #7faf5eff"/>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default PokemonList;