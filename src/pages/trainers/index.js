import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { TrainerCard, TrainerListCards, TrainerInformations, ContainerColumn} from '../../components/atoms/container/style/';
import Container from '../../components/atoms/container/';
import { DarkHeader } from '../../components/molecules/header/';
import { Gender } from '../../components/atoms/icons/';
import { TrainerName, Age } from '../../components/atoms/texts/';

import female from '../../assets/icons/female.png';
import male from '../../assets/icons/male.png';

const Trainers = () => {
  const [trainers, setTrainers] = useState([]);

  const getTrainers = async () => {
    const response = await fetch(`//pokemaster-api.herokuapp.com/trainers.json`);
    const trainers = await response.json();
    setTrainers(trainers);
  };

  useEffect(() => {
    getTrainers();
  }, []);

  return (
    <Container yellow={true}>
      <DarkHeader />
      <TrainerListCards>
        <ContainerColumn>
          {trainers.map(trainer => (
            <TrainerCard key={trainer.id}>
              <Link to={{ pathname: `/trainer/${trainer.id}` }}>
                {trainer.photo && (
                  <div>
                    <img src={trainer.photo} width="100" alt="Trainer" />
                  </div>
                )}
                <TrainerName>{trainer.name}</TrainerName>
                <TrainerInformations>
                  <Age>{trainer.age}</Age>
                  <Gender src={trainer.sex === female  ? female : male} alt="Gender" />
                </TrainerInformations>
              </Link>
            </TrainerCard>
          ))}
       </ContainerColumn>
      </TrainerListCards>
    </Container>
  );
}

export default Trainers 
