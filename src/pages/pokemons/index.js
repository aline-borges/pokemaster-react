import React from 'react';
import Button from '../../components/atoms/buttons/style';
import search from '../../assets/icons/search.png';

const Pokemons = () => {
  return(
    <div>
      <Button 
      yellow={true}
      src={search} 
      text="Search" />
    </div>
  );
}

export default Pokemons 
