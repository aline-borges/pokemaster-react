import React from 'react';
import { Link } from 'react-router-dom';
import { YellowContainer, GreyContainer, ContainerHalfway, ContainerRow  } from '../../atoms/container/style/';
import { YellowButton, GreyButton, TextYellowButton, TextGreyButton } from '../../atoms/buttons/';
import { PikachuImage, AshImage } from '../../atoms/images/';
import Icon from '../../atoms/icons/';
import Header from '../../molecules/header/';
import search from '../../../assets/icons/search.png';
import pokeball from '../../../assets/icons/pokeball.png';
import pikachu from '../../../assets/characters/pikachu.png';
import ash from '../../../assets/characters/ash.png';

const HomeTemplate = () => {
  return(
    <ContainerHalfway>
      <Header />
      <ContainerRow>
        <GreyContainer>
          <PikachuImage src={pikachu} alt="pikachu" />
          <YellowButton>
            <Link to="/pokemons">
              <TextYellowButton>
                Search For Pokemons
                <Icon src={search} alt="search logo" />
              </TextYellowButton>
            </Link>
          </YellowButton>
        </GreyContainer>
        <YellowContainer>
        <AshImage src={ash} alt="ash" />
        <GreyButton>
          <Link to="/trainerform">
            <TextGreyButton>
              Be a Trainer
              <Icon src={pokeball} alt="pokeball logo" />
            </TextGreyButton>
          </Link>
        </GreyButton>
      </YellowContainer>
      </ContainerRow>
    </ContainerHalfway>
  );
}

export default HomeTemplate
 