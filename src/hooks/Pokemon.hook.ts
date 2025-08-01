import React, {FunctionComponent, useState, useEffect} from "react";
import Pokemon from "../models/pokemon";
import POKEMONS from "../models/mock-pokemons";

const usePokemons = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    useEffect(() => {
            setPokemons(POKEMONS);
        }, [])

        return pokemons;
}

export default usePokemons