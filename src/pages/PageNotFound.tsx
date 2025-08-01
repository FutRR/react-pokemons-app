import React, {FunctionComponent} from "react";
import { RouteComponentProps, Link } from "react-router-dom";

const PageNotFound: FunctionComponent<RouteComponentProps>= () => {

    return(
        <div className="center">
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png" alt="Page non trouvée" />
            <div>
                <h1>Hey, cette page n'existe pas !</h1>
                <Link to="/" className="btn waves-effect indigo">RETOURNER À L'ACCUEIL</Link>
            </div>
        </div>
    )
}

export default PageNotFound;