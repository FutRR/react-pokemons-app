import React, {FunctionComponent, useState} from "react";
import Pokemon from "../models/pokemon";
import './PokemonCard.css';

type Props={
    pokemon: Pokemon,
    border?: string
}

const PokemonCard : FunctionComponent<Props> = ({pokemon, border="3px solid #2c6d00"}) => {

    
    const [color, setColor] = useState<string>("#7faf5eff");
 
    const showBorder = () => {
        setColor(border);
    }

    const hideBorder = () => {
        setColor("#7faf5eff");
    } 

    const formatDate = (date:Date):string => {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    const formatType = (type:string):string => {
        let color:string;

        switch(type){
            case 'Feu':
                color = 'red lighten-1';
                break;
            case 'Eau':
                color = 'red lighten-1';
                break;
            case 'Feu':
                color = 'blue lighten-1';
                break;
            case 'Plante':
                color = 'green lighten-1';
                break;
            case 'Insecte':
                color = 'yellow lighten-1';
                break;
            case 'Normal':
                color = 'grey lighten-1';
                break;
            case 'Vol':
                color = 'blue lighten-3';
                break;
            case 'Poison':
                color = 'deep-purple accent-1';
                break;
            case 'Fée':
                color = 'pink lighten-4';
                break;
            case 'Psy':
                color = 'teal accent-1';
                break;
            case 'Electrik':
                color = 'blue darken-4';
                break;
            case 'Combat':
                color = 'amber darken-4';
                break;
            default:
                color = 'grey';
        }

        return `chip ${color}`
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