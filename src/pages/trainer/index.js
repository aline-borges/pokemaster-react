import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/molecules/header/';
import { YellowContentContainer, ContainerColumn, TeamContainer, PokemonContainer } from "../../components/atoms/container/style/";
import { GreyButton, TextGreyButton, YellowButton, TextYellowButton, PlusButton } from '../../components/atoms/buttons/';
import { Name, Age } from '../../components/atoms/texts/';
import { Icon, Sex } from '../../components/atoms/icons/';

import plus from  '../../assets/icons/plus.png';
import edit from '../../assets/icons/edit.png';
import female from '../../assets/icons/female.png'
import male from '../../assets/icons/male.png'

const TrainerHomeProfile = () => {
  const [trainer, setTrainer] = useState({});
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');
  const [changedName, setChangedName] = useState(false);

  const { trainerId } = useParams();

  const getTrainer = async id => {
    const response = await fetch(`//localhost:3000/trainers/${id}.json`);
    const currentTrainer = await response.json();
    console.log(currentTrainer.teams);
    setTrainer(currentTrainer);
    setLoading(false);
  };
  
  useEffect(() => {
    getTrainer(trainerId);
  }, [trainerId, changedName]);

  const handleNameSubmit = async (e, team) => {
    e.preventDefault();
    await fetch(`//localhost:3000/teams/${team.id}.json`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...team, name: newName}),
    });
    setEditing(false);
    setLoading(true);
    setNewName('');
    setChangedName(true);
  };

  const handleChangeName = e => {
    const { value } = e.target;
    setNewName(value);
  };

  return (
    <YellowContentContainer>
      <Header />
      <ContainerColumn>
        {loading ? (<div>Carregando</div>)
        : (
          <>
            <Name>{trainer.name}</Name>
            <Age>{trainer.age}</Age>
            <Sex src={trainer.sex === 'female' ? female : male} alt="Gender symbol" />
            <GreyButton>
              <TextGreyButton>
                Add a Team
                <Icon src={plus} />
              </TextGreyButton>
            </GreyButton>
            <ul>
              {trainer.teams.map(team => (
                <li key={team.id}>
                  {editing ? (
                    <form onSubmit={(e) => handleNameSubmit(e, team)}>
                      <input type="text" name="team_name" onChange={handleChangeName} />
                      <button type="submit" onClick={(e) => handleNameSubmit(e, team)}>Salvar</button>
                    </form>
                  ) : (
                    <h2 onClick={() => setEditing(true)}>{team.name}</h2>
                  )}
                  <ul>
                    {team.pokemons.map(pokemon => (
                      <li key={pokemon.id}>
                          {pokemon.photo ? (
                            <img src={`https://github.com/ZeChrales/PogoAssets/blob/master/pokemon_icons/pokemon_icon_${pokemon.photo}_00.png?raw=true`} alt={pokemon.name} />
                          ) : (
                            <PokemonContainer>
                              <PlusButton>+</PlusButton>
                            </PokemonContainer>
                          )}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <YellowButton>
              <TextYellowButton>
                Edit My Team
                <Icon src={edit} />
              </TextYellowButton>
            </YellowButton>
          </>
        )}
      </ContainerColumn>
    </YellowContentContainer>
  );
}

export default TrainerHomeProfile 
