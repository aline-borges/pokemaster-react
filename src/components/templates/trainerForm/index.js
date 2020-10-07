import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../molecules/header/index';
import { GreyContentContainer, ContainerForm } from "../../atoms/container/style/";
import { YellowButton, TextYellowButton } from '../../atoms/buttons/';
import { YellowInput, RadioButtonContainer  } from '../../atoms/input/';
import { DefaultPhoto } from '../../atoms/images/';
import { Icon } from '../../atoms/icons/';
import check from '../../../assets/icons/check.png'
import circle from '../../../assets/images/photoSpace.png';

const TrainerFormTemplate = () => {
  const [trainer, setTrainer] = useState({
    photo: '',
    name: '',
    age: 0,
    sex: '',
  });

  const history = useHistory();

  const handleInputChange = e => {
    const { value, name } = e.target;
    setTrainer(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('//localhost:3000/trainers.json', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(trainer),
    });
    history.push('/trainers');
  };

  return(
    <GreyContentContainer>
      <Header />
      <form onSubmit={handleSubmit}>
        <ContainerForm>
          <DefaultPhoto src={circle}  alt="space"/>
          Photo URL
          <input type="text" name="photo" value={trainer.photo} onChange={handleInputChange} />
          Name:
          <YellowInput type="text" name="name" value={trainer.name} onChange={handleInputChange} />
          Age:
          <YellowInput type="text" name="age" value={trainer.age} onChange={handleInputChange} />
          Sex:
          <RadioButtonContainer>
            <div>
              <input type="radio" name="sex" value="female" onChange={handleInputChange} />Female              
            </div>
            <div>
              <input type="radio" name="sex" value="male" onChange={handleInputChange} />Male
            </div>
          </RadioButtonContainer>
          <YellowButton type="submit">
              <TextYellowButton>
                Create a Profile
                <Icon src={check} alt="verify button" />
              </TextYellowButton>
          </YellowButton>
        </ContainerForm>
      </form>
    </GreyContentContainer>
  );
}

export default TrainerFormTemplate 
