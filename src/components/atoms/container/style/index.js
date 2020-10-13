import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${props => props.yellow ? props.theme.yellow.backgroundColor : 
  props.theme.grey.backgroundColor };
  color: ${props => props.yellow ? props.theme.yellow.color : props.theme.grey.color};
  overflow: none;
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const ContainerHalfway = styled(Content)`
  background-image: -webkit-linear-gradient(-30deg, #2A2B2C 58%, #FBF107 42%);
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TeamContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.color.grey};
  padding: .8rem 1.6rem;
  border-radius: 1.0rem;
  margin-top: 1.2rem;
`;

export const PokemonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.color.lightGrey};
  width: 12.0rem;
  height: 12.0rem;
  border-radius: 1.0rem;
  margin: 1.2rem;
`;

export const PokemonsContainer = styled.div`
  display: flex;
`;

export const TrainerListCards = styled.div`
  display: flex;
  justify-content: space-around;
`; 

export const TrainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1.0rem;
  background-color: ${props => props.theme.color.white};
  padding: 0.8rem 1.6rem;
  min-width: 20rem;
  margin: 1.0rem;
  text-align: center;
`;

export const TrainerInformations = styled(TrainerListCards)`
`;

export default ContainerColumn
