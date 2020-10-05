import React from 'react';
import Sections from '../../organisms/sections/';
import { ContainerHalfway } from '../../atoms/container/style/';
import Header from '../../molecules/header/';

const NewHomeTemplate = () => {
  return(
    <ContainerHalfway>
      <Header/>
      <Sections />
    </ContainerHalfway>
  );
}

export default NewHomeTemplate
