import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { DarkHeader } from '../../components/molecules/header/';
import { YellowContentContainer, ContainerColumn, PokemonContainer, TrainerInformations, 
         PokemonsContainer, TeamContainer } from "../../components/atoms/container/style/";
import { PlusButton } from '../../components/atoms/buttons/';
import { Name, Age, TeamName } from '../../components/atoms/texts/';
import { TeamIcon, Gender } from '../../components/atoms/icons/';
import { Photo, PokemonImage } from '../../components/atoms/images/';

import female from '../../assets/icons/female.png';
import male from '../../assets/icons/male.png';
import pokeball from '../../assets/icons/darkPokeball.png';

const TrainerHomeProfile = () => {
  const [trainer, setTrainer] = useState({});
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');
  const [changedName, setChangedName] = useState(false);  

  const { trainerId } = useParams();

  const getTrainer = async id => {
    const response = await fetch(`//pokemaster-api.herokuapp.com/trainers/${id}.json`);
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
    await fetch(`//pokemaster-api.herokuapp.com/teams/${team.id}.json`, {
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
      <DarkHeader />
      <ContainerColumn>
        {loading ? (<div>Carregando</div>)
        : (
          <>
            <Photo src={trainer.photo} alt={trainer.Name} />
            <Name>{trainer.name}</Name>
            <TrainerInformations>
              <Age>{trainer.age}</Age>
              <Gender src={trainer.sex === 'female' ? female : male} alt="Gender symbol" />
            </TrainerInformations>
            <TeamContainer>
              {trainer.teams.map(team => (
                <li key={team.id}>
                  {editing ? (
                    <form onSubmit={(e) => handleNameSubmit(e, team)}>
                      <input type="text" name="team_name" onChange={handleChangeName} />
                      <button type="submit" onClick={(e) => handleNameSubmit(e, team)}>Salvar</button>
                    </form>
                  ) : (
                    <TeamName onClick={() => setEditing(true)}>
                      {team.name}
                      <TeamIcon src={pokeball} />
                    </TeamName>
                  )}
                  <PokemonsContainer>
                    {team.pokemons.map(pokemon => (
                      <PokemonContainer key={pokemon.id}>
                          {pokemon.photo ? (
                            <PokemonImage src={`https://github.com/ZeChrales/PogoAssets/blob/master/pokemon_icons/pokemon_icon_${pokemon.photo}_00.png?raw=true`} alt={pokemon.name} />
                          ) : (
                            <PokemonContainer>
                              <PlusButton>+</PlusButton>
                            </PokemonContainer>
                          )}
                      </PokemonContainer  >
                    ))}
                  </PokemonsContainer>
                </li>
              ))}
            </TeamContainer>
          </>
        )}
      </ContainerColumn>
    </YellowContentContainer>
  );
}

export default TrainerHomeProfile 
