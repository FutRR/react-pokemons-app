import React, {FunctionComponent} from "react";
import PokemonList from "./pages/PokemonList";
import PokemonsDetail from "./pages/PokemonDetails";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App: FunctionComponent =()=>{

    return (
        <Router>
            <nav>
                <div className="nav-wrapper indigo">
                <Link to='/' className="brand-logo">Pokemon</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to='/pokemons'>List</Link></li>
                </ul>
                </div>
            </nav>
            <Switch>
                <Route exact path="/" component={PokemonList}></Route>
                <Route exact path="/pokemons" component={PokemonList}></Route>
                <Route exact path="/pokemons/:id" component={PokemonsDetail}></Route>
                <Route exact path="*" component={PageNotFound}></Route>
            </Switch>

        </Router>


    )

}

export default App;