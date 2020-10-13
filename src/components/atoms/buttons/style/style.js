import styled from 'styled-components';

export const ButtonStyle = styled.button`
  background-color: transparent;
  min-width: 10rem;
  cursor: pointer;
  outline: none;
  border: 1px solid ${props => props.yellow ? props.theme.yellow.borderColor : props.theme.grey.borderColor };
  margin-top: 1.5rem;
`;

export const TextButton = styled.p`
  font-family: ${props => props.theme.font[1]};
  font-size: ${props => props.theme.fontSize.ultraSmall};
  font-weight: ${props => props.theme.fontWeight.black};
  text-transform: uppercase;
  letter-spacing: .5rem;
  margin: 1rem;
  padding: 1.6rem 3.2rem;
  background-color: ${props => props.yellow ? props.theme.yellow.backgroundColor : props.theme.grey.backgroundColor };
  color: ${props => props.yellow ? props.theme.yellow.color : props.theme.grey.color };

  &:hover {
    background-color: ${props => props.yellow ? props.theme.yellow.hover : props.theme.grey.hover };
  }
`;

export const PlusButton = styled.button`
  border: none;
  background: transparent;
  padding: 1.6rem;
  cursor: pointer;
  color: ${props => props.theme.color.extraLight};
  font-size: ${props => props.theme.fontSize.large};
  font-family: ${props => props.theme.font[1]};
  outline: none;
`;

export default ButtonStyle 
