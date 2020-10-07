import React from 'react';
import styled from 'styled-components';
import logo from '../../../assets/logos/yellow.png';
import darkLogo from '../../../assets/logos/dark.png';
import { Link } from 'react-router-dom';

export const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

export const MenuList = styled.ul`
  display: flex;
  justify-align: space-between;
  align-items: center;
`;

export const MenuOption = styled.li`
  padding: 8px 16px;
  margin-left: 0.5rem;
  text-transform: uppercase;
  font-family: ${props => props.theme.font[1]};
  font-size: ${props => props.theme.fontSize.superSmall};
  font-weight: ${props => props.theme.fontWeight.extraBold};
  color: ${props => props.theme.color.yellow};
  cursor: pointer;

  &:hover {
    padding: 8px 16px;
    background-color: ${props => props.theme.color.yellow};
    color: ${props => props.theme.color.grey};
    border-radius: 2.0rem;
  }

  a {
    color: ${props => props.theme.color.yellow};

    &:hover {
      color: ${props => props.theme.color.grey};
    }
  }
`;

export const DarkMenuOption = styled(MenuOption)`
  color: ${props => props.theme.color.grey};

  &:hover {
    padding: 8px 16px;
    background-color: ${props => props.theme.color.grey};
    color: ${props => props.theme.color.yellow};
  }

  a {
    color: ${props => props.theme.color.grey};

    &:hover {
      color: ${props => props.theme.color.yellow};
    }
  }
`;

export const AppName = styled.div`
  margin-right: 5rem;
`;

export const Logo = styled.img`
`;

export const Header = () => {
  return(
    <header>
      <Menu>
        <AppName>
          <Link to="/">
            <Logo src={logo} />
          </Link>
        </AppName>
        <MenuList>
          <MenuOption>
            <Link to="/">Home</Link>
          </MenuOption>
          <MenuOption>
            <Link to="/pokemons">Pokemons</Link>
          </MenuOption>
          <MenuOption>
            <Link to="/trainerform">Be a Trainer</Link>            
          </MenuOption>
          <MenuOption>
            <Link to="/trainers">Trainers</Link>            
          </MenuOption>
        </MenuList>
      </Menu>
    </header>
  );
}

export const DarkHeader = () => {
  return(
    <header>
      <Menu>
        <AppName>
          <Link to="/">
            <Logo src={darkLogo} />
          </Link>
        </AppName>
        <MenuList>
          <DarkMenuOption>
            <Link to="/">Home</Link>
          </DarkMenuOption>
          <DarkMenuOption>
            <Link to="/pokemons">Pokemons</Link>
          </DarkMenuOption>
          <DarkMenuOption>
            <Link to="/trainerform">Be a Trainer</Link>            
          </DarkMenuOption>
          <DarkMenuOption>
            <Link to="/trainers">Trainers</Link>            
          </DarkMenuOption>
        </MenuList>
      </Menu>
    </header>
  );
}

export default Header 
