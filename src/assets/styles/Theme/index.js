import React from 'react';
import { ThemeProvider } from 'styled-components';

export const theme = {
  color: {
    darkGrey: '#1E1F20',
    grey: '#2A2B2C',
    lightGrey: '#3D3E40',
    extraLight: '#686A6C',
    superLightGrey: '#B2B3B5',
    darkYellow: '#FFE600',
    yellow: '#FBF107',
    white: '#FEFEFE',
    bug: '#147B3D',
    dark: '#383939',
    dragon: '#9C7EAF',
    electric: '#DECD35',
    fairy: '#D35F66',
    fighting: '#D7751C',
    fire: '#CD3232',
    flying: '#5575A4',
    ghost: '#392C43',
    grass: '#478929',
    ground: '#B78568',
    ice: '#7CC6E8',
    normal: '#D7295B',
    poison: '#683C83',
    psychic: '#B71E70',
    rock: '#653F33',
    steel: '#60756E',
    water: '#35A9A2'
  },
  font: [
    "sans-serif",  
    "Open Sans",
    "Montserrat"
  ],
  fontSize: {
    ultraSmall: "1.0rem",
    superSmall: "1.2rem",
    extraSmall: "1.4rem",
    small: "1.6rem",
    medium: "1.8rem",
    extraMedium: "2.4rem",
    superMedium: "3.6rem",
    large: "4.8rem",
    extraLarge: "6.0rem",
    superLarge: "7.2rem"
  },
  fontWeight: {
    extraLight: "100",
    light: "200",
    thin: "300",
    regular: "400",
    bold: "500",
    extraBold: "600",
    black: "700",
    extraBlack: "800",
    superBlack: "900"
  }
}

const Theme = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default Theme;