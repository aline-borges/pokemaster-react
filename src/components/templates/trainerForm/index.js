import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../molecules/header/index';
import { GreyContentContainer, ContainerColumn } from "../../atoms/container/style/";
import { YellowButton, TextYellowButton } from '../../atoms/buttons/';
import { YellowInput, YellowLabel } from '../../atoms/input/';
import { Icon } from '../../atoms/icons/';
import check from '../../../assets/icons/check.png'

const TrainerForm = () => {
  return(
    <GreyContentContainer>
      <Header />
      <form>
        <ContainerColumn>
          <input type="file" />
          Name:
          <YellowInput type="text"/>
          <input type="date"/>
          <input type="checkbox"/>
          <YellowButton>
            <Link to="/trainershomeprofile">
              <TextYellowButton>
                Create a Profile
                <Icon src={check} />
              </TextYellowButton>
            </Link>
          </YellowButton>
        </ContainerColumn>
      </form>
    </GreyContentContainer>
  );
}

export default TrainerForm 
