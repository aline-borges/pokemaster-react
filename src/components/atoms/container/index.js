import React from 'react';
import { Content } from './style/';

const Container = (props) => {
  return(
    <Content yellow={props.yellow}>
      {props.children}
    </Content>
  );
}

export default Container 
