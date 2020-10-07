import styled from 'styled-components';

export const Name = styled.p`
  font-family: ${props => props.theme.font[2]};
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: ${props => props.theme.fontSize.large};
  color: ${props => props.theme.color.grey};
`;

export const Age = styled.p`
  font-family: ${props => props.theme.font[2]};
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: ${props => props.theme.fontSize.extraSmall};
  color: ${props => props.theme.color.grey};
`;

