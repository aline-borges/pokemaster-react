import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/molecules/header/';
import { GreyContentContainer, ContainerForm } from '../../components/atoms/container/style/';
import Button from '../../components/atoms/buttons/';
import { YellowInput, RadioButtonContainer  } from '../../components/atoms/input/';
import { DefaultPhoto } from '../../components/atoms/images/';
import check from '../../assets/icons/check.png'
import circle from '../../assets/images/photoSpace.png';

const TrainerForm = () => {
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
    await fetch('//pokemaster-api.herokuapp.com/trainers.json', {
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
          <Button 
          type="submit"
          yellow={true}
          src={check}
          text="Create a Profile"
          />
        </ContainerForm>
      </form>
    </GreyContentContainer>
  );
}

export default TrainerForm 
