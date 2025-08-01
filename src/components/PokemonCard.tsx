import React, {FunctionComponent, useState} from "react";
import Pokemon from "../models/pokemon";
// import './PokemonCard.css';

type Props={
    pokemon: Pokemon,
    border?: string
}

const PokemonCard : FunctionComponent<Props> = ({pokemon, border="3px solid #2c6d00"}) => {

    
    const [color, setColor] = useState<string>("#7faf5eff");
 
    const showBorder = () => {
        setColor("#7faf5eff");
    }

    const hideBorder = () => {
        setColor(border);
    } 

    return(
        <div className="col s6 m4" onMouseEnter={showBorder} onMouseLeave={hideBorder}>
            <div className="card horizontal" style={{border:color}}>
                <div className="card-image">
                    <img src={pokemon.picture} alt={pokemon.name} />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p>{pokemon.name}</p>
                        <p>{pokemon.types.join(' - ')}</p>
                        <p>
                            <small>{pokemon.created.toLocaleDateString()} à {pokemon.created.toLocaleTimeString()}</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard;