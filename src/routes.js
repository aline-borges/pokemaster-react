import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/';
import Pokemons from './pages/pokemons/';
import Trainer from './pages/trainer/';
import Trainers from './pages/trainers/';
import TrainerHomeProfile from './pages/trainerHomeProfile/';

const Routes = () => {
  return(
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/pokemons" component={Pokemons} exact />
      <Route path="/trainer" component={Trainer} exact />
      <Route path="/trainers" component={Trainers} exact />
      <Route path="/trainershomeprofile" component={TrainerHomeProfile} exact />
    </Switch>
  );
}

export default Routes 
