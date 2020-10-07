import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { YellowContentContainer, TrainerCard, TrainerListCards, TrainerInformations, Grid } from '../../components/atoms/container/style/';
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
    <YellowContentContainer>
      <DarkHeader />
      <TrainerListCards>
        <Grid>
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
       </Grid>
      </TrainerListCards>
    </YellowContentContainer>
  );
}

export default Trainers 
