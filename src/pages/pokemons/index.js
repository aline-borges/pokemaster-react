import React, { useState } from 'react';
import { Type } from '../../components/atoms/container/style/';
import Container from '../../components/atoms/container/';
import Header from '../../components/molecules/header/';
import Input from '../../components/atoms/input/';
import Button from '../../components/atoms/buttons/';
import PokemonCard from '../../components/molecules/pokemonCard/';
import { PokemonName } from '../../components/atoms/texts/';
import search from '../../assets/icons/search.png';
import bg from '../../assets/images/backgroundCard/electric.png';

const Pokemons = () => {
  const [name, setName] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [photo, setPhoto] = useState(null);

  const getPokemons = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    const data = await response.json();
    console.log(data);
    setPokemon(data);
    let id = '';

      data.id < 10
    ? id = '00' + data.id
    : data.id >= 10 && data.id < 100
    ? id = '0' + data.id
    : id = data.id

    const photo = `https://github.com/ZeChrales/PogoAssets/blob/master/pokemon_icons/pokemon_icon_${id}_00.png?raw=true`;

    setPhoto(photo);
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
      {pokemon && (
        <PokemonCard>
          <img src={bg} alt={pokemon.name} />
          {photo && (
            <img src={photo} alt={pokemon.name} />
          )}
          <PokemonName>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</PokemonName>
          <ul>
            {pokemon.types.map((type, index) => (
              <Type key={index}>{type.type.name}</Type>
            ))}
          </ul>
        </PokemonCard>
      )}
    </Container>
  );
}

export default Pokemons 
