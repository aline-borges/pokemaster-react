import React, { useState } from 'react';
import Container from '../../components/atoms/container/';
import Header from '../../components/molecules/header/';
import Input from '../../components/atoms/input/';
import Button from '../../components/atoms/buttons/';
import search from '../../assets/icons/search.png';

const Pokemons = () => {
  const [name, setName] = useState("");

  const getPokemons = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    const data = await response.json();
    console.log(data);
  };

  const handleSubmit = e => {
    e.preventDefault();
    getPokemons(name);
  };

  return (
    <Container>
      <Header yellow={true} />
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input 
          value={name}
          onChange={(e) => setName(e.target.value)}
          yellow={'yellow'} 
        />
        <Button 
          type='submit'
          yellow={true}
          src={search} 
          text="Search" 
        />
      </form>
    </Container>
  );
}

export default Pokemons 
