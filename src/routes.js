import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/';
import Pokemons from './pages/pokemons/';
import Trainers from './pages/trainers/';
import Trainer from './pages/trainer/';
import TrainerForm from './pages/trainerForm/';

const Routes = () => {
  return(
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/pokemons" component={Pokemons} exact />
      <Route path="/trainerform" component={TrainerForm} exact />
      <Route path="/trainers" component={Trainers} exact />
      <Route path="/trainer/:trainerId" component={Trainer} exact />
    </Switch>
  );
}

export default Routes 
