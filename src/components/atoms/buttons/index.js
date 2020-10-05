import styled from 'styled-components';

export const Button = styled.button`
  background-color: transparent;
  min-width: 10rem;
  cursor: pointer;
  outline: none;
  border: 1px solid ${props => props.borderColor};
`;

export const GreyButton = styled(Button)`
  border: 1px solid ${props => props.theme.color.grey};
`;

export const YellowButton = styled(Button)`
  border: 1px solid ${props => props.theme.color.yellow};
`;

export const TextButton = styled.p`
  font-family: ${props => props.theme.font[1]};
  font-size: ${props => props.theme.fontSize.ultraSmall};
  font-weight: ${props => props.theme.fontWeight.black};
  text-transform: uppercase;
  letter-spacing: .5rem;
  margin: 1rem;
  padding: 1.6rem 3.2rem;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};

  &:hover {
    background-color: ${props => props.hoverBackgroundColor};
  }
`;

export const TextGreyButton = styled(TextButton)`
  background-color: ${props => props.theme.color.grey};
  color: ${props => props.theme.color.yellow};

  &:hover {
    background-color: ${props => props.theme.color.darkGrey};
  }
`;

export const TextYellowButton = styled(TextButton)`
  background-color: ${props => props.theme.color.yellow};
  color: ${props => props.theme.color.grey};

  &:hover {
    background-color: ${props => props.theme.color.darkYellow};
  }
`;

export default Button 
