import styled from 'styled-components';

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

export const GreyContentContainer = styled(ContainerColumn)`
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${props => props.theme.color.grey};
  color: ${props => props.theme.color.yellow};
`;

export const YellowContentContainer = styled(ContainerColumn)`
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${props => props.theme.color.yellow};
  color: ${props => props.theme.color.grey};
`;

export const ContainerHalfway = styled(ContainerColumn)`
  background-image: -webkit-linear-gradient(-30deg, #2A2B2C 57%, #FBF107 50%);
  min-width: 100vw;
  min-height: 100vh;
`;

export const Container = styled(ContainerColumn)`
  color: ${props => props.color};
  min-width: 50%;
  min-height: 30rem;
`;

export const GreyContainer = styled(ContainerColumn)`
  color: ${props => props.theme.color.yellow};
  min-width: 50%;
  min-height: 30rem;
`;

export const YellowContainer = styled(ContainerColumn)`
  color: ${props => props.theme.color.grey};
  min-width: 50%;
  min-height: 30rem;
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
`

export default ContainerColumn
