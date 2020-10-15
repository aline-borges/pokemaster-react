import styled from 'styled-components';

export const Name = styled.p`
  font-family: ${props => props.theme.font[1]};
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: ${props => props.theme.fontSize.large};
  color: ${props => props.theme.color.grey};
`;

export const PokemonName = styled.p`
  font-family: ${props => props.theme.font[1]};
  font-size: ${props => props.theme.fontSize.small};
  font-weight: ${props => props.theme.fontWeight.black};
  color: ${props => props.theme.color.grey};
`;

export const TrainerName = styled(Name)`
  font-size: ${props => props.theme.fontSize.small};
`;

export const Age = styled.p`
  font-family: ${props => props.theme.font[1]};
  font-weight: ${props => props.theme.fontWeight.black};
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.color.grey};
  margin-left: 0.5rem;
`;

export const TeamName = styled.p`
  font-weight: ${props => props.theme.fontWeight.black};
  font-size: ${props => props.theme.fontSize.extraSmall};
  background-color: ${props => props.theme.color.superLightGrey};
  color: ${props => props.theme.color.grey};
  padding: .8rem 1.6rem;
  text-align: center;
  margin: auto;
  border-radius: 5.0rem;
  text-transform: uppercase;
  letter-spacing: .2rem;
  width: fit-content;
`;


