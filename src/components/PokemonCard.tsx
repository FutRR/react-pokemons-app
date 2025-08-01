import React, {FunctionComponent, useState} from "react";
import Pokemon from "../models/pokemon";
import formatDate from '../helpers/format-date';
import formatType from '../helpers/format-type';
import './PokemonCard.css';
import { useHistory } from "react-router-dom";

type Props={
    pokemon: Pokemon,
    border?: string
}

const PokemonCard : FunctionComponent<Props> = ({pokemon, border="3px solid #3f51b5 "}) => {

    
    const [color, setColor] = useState<string>("#c5cae9");
    const history = useHistory();
 
    const showBorder = () => {
        setColor(border);
    }

    const hideBorder = () => {
        setColor("#c5cae9");
    } 

    const goToPokemon = (id:Number) => {
        history.push(`/pokemons/${id}`);
    }

    return(
        <div className="col s6 m4" onMouseEnter={showBorder} onMouseLeave={hideBorder} onClick={() => goToPokemon(pokemon.id)}>
            <div className="card horizontal" style={{border:color}}>
                <div className="card-image">
                    <img src={pokemon.picture} alt={pokemon.name} />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p>{pokemon.name}</p>
                        <p>
                            <small>{formatDate(pokemon.created)}</small>
                        </p>
                        <div>
                            {pokemon.types.map(type => (
                                <span key={type} className={formatType(type)}>{type}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard;