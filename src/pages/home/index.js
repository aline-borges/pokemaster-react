import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerColumn, ContainerRow, ContainerHalfway  } from '../../components/atoms/container/style/';
import Button from '../../components/atoms/buttons/';
import { PikachuImage, AshImage } from '../../components/atoms/images/';
import Header from '../../components/molecules/header/';
import search from '../../assets/icons/search.png';
import pokeball from '../../assets/icons/pokeball.png';
import pikachu from '../../assets/characters/pikachu.png';
import ash from '../../assets/characters/ash.png';

const Home = () => {
  return(
    <ContainerHalfway>
      <Header />
      <ContainerRow>
        <ContainerColumn>
          <PikachuImage src={pikachu} alt="pikachu" />
          <Button 
          yellow={true}
          src={search} 
          text="Search For Pokemons">
            <Link to="/pokemons" />
          </Button>
        </ContainerColumn>
        <ContainerColumn>
          <AshImage src={ash} alt="ash" />
          <Button
          src={pokeball} 
          text="Be a Trainer">
          >
            <Link to="/trainerform" />
          </Button>
      </ContainerColumn>
      </ContainerRow>
    </ContainerHalfway>
  );
}

export default Home 
