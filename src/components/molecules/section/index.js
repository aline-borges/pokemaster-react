import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../../atoms/container/style/';
import { Image } from '../../atoms/images/';
import { Icon } from '../../atoms/icons/';
import { Button, TextButton } from '../../atoms/buttons/';

const Section = (props) => {
  return(
    <Container backgroundColor={props.backgroundColor} color={props.color}>
      <Image image={props.image} />
      <Button buttonBorderColor={props.borderColor}>
        <Link to={props.router}>
          <TextButton 
          textBackgroundColor={props.backgroundColor}
          textColor={props.color}
          hoverBackgroundColor={props.hoverBackgroundColor}
          hoverColor={props.hoverColor}
          >
            {props.text}
            <Icon icon={props.icon} />
          </TextButton>
        </Link>
      </Button>
   </Container>
  );
}

export default Section
