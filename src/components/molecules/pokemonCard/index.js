import React from 'react';
import { Card } from '../../atoms/container/style/';

const PokemonCard = (props) => {
  return(
    <Card>
      {props.children}
    </Card>
  );
}

export default PokemonCard
