import React from 'react';
import Section from '../../molecules/section/';
import { ContainerRow } from '../../atoms/container/style/';
import search from '../../../assets/icons/search.png';
import pokeball from '../../../assets/icons/pokeball.png';
import pikachu from '../../../assets/characters/pikachu.png';
import ash from '../../../assets/characters/ash.png';

const Sections = (props) => {
  return(
    <ContainerRow>
      <Section 
      backgroundColor={props.theme.color.grey} 
      color={props.theme.color.yellow}
      image={pikachu}
      buttonBorderColor={props.theme.color.yellow}
      router={"/pokemons"}
      textBackgroundColor={props.theme.color.grey}
      textColor={props.theme.color.yellow}
      hoverBackgroundColor={props.theme.color.darkYellow}
      text={'Search For Pokemons'}
      icon={search}
      />

      <Section 
      backgroundColor={props.theme.color.yellow} 
      color={props.theme.color.grey}
      image={ash}
      buttonBorderColor={props.theme.color.grey}
      router={"/trainer"}
      textBackgroundColor={props.theme.color.yellow}
      textColor={props.theme.color.grey}
      hoverBackgroundColor={props.theme.color.darkGrey}
      text={'Be a Trainer'}
      icon={pokeball}
      />
    </ContainerRow>
  );
}

export default Sections
