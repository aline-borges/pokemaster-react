import React from 'react';
import InputStyle from './style/style';

const Input = (props) => {
  return(
    <InputStyle yellow={props.yellow} onChange={props.onChange}>
      {props.children}
    </InputStyle>
  );
}

export default Input 
