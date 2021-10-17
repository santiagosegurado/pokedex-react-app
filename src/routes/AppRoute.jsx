import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { SearchInput } from '../components/SearchInput';
import { ListScreen } from '../components/ListScreen'
import { PokemonScreen } from '../components/pokemon/PokemonScreen';
  

export const AppRoute = () => {
    return (
        <Router>
            <div>
                <SearchInput/>
                
                <Switch>
                    <Route exact path="/pokemon" component={ PokemonScreen }/>
                    <Route exact path="/pokemon/:pokemonId" component={ PokemonScreen } />
                    <Route exact path="/" component={ ListScreen } />
                
                    <Redirect  to="/" />
                </Switch>
            </div>
        </Router>
            
    )
}
