import React from 'react';
import { Link } from 'react-router-dom';

import { Menu, AppName, MenuList, MenuOption, Logo } from './style/style';
import logo from '../../../assets/logos/yellow.png';
import darkLogo from '../../../assets/logos/dark.png';


export const Header = (props) => {
  return(
    <header>
      <Menu>
        <AppName>
          <Link to="/">
            <Logo src={ props.yellow ? logo : darkLogo} />
          </Link>
        </AppName>
        <MenuList>
          <MenuOption yellow={props.yellow}>
            <Link to="/">Home</Link>
          </MenuOption>
          <MenuOption yellow={props.yellow}>
            <Link to="/pokemons">Pokemons</Link>
          </MenuOption>
          <MenuOption yellow={props.yellow}>
            <Link to="/trainerform">Be a Trainer</Link>            
          </MenuOption>
          <MenuOption yellow={props.yellow}>
            <Link to="/trainers">Trainers</Link>            
          </MenuOption>
        </MenuList>
      </Menu>
    </header>
  );
}

export default Header 
