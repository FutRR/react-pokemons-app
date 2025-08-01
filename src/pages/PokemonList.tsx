import React, {FunctionComponent} from "react";
import usePokemons from "../hooks/Pokemon.hook";
import PokemonCard from "../components/PokemonCard";

const PokemonList: FunctionComponent= () => {

    const pokemons = usePokemons();
    
    return(
        <div>
            <h1 className="center">App Pokemon</h1>
            <div className="container">
                <div className="row">
                    {
                        pokemons.map((pokemon) => (
                            <PokemonCard key={pokemon.id} pokemon={pokemon} border="3px solid #3f51b5"/>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default PokemonList;