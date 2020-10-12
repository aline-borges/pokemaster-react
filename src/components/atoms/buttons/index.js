import React from 'react';
import { ButtonStyle, TextButton } from './style';
import { Icon } from '../icons/';

const Button = (props) => {
  return(
    <ButtonStyle yellow={props.yellow}>
      <TextButton 
        yellow={props.yellow}
      >
        {props.text}
        <Icon src={props.src} />
      </TextButton>
    </ButtonStyle>
  );
}

export default Button 
