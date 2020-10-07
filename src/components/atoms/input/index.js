import styled from 'styled-components';

export const Input = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid;
  min-width: 10rem;
  font-family: ${props => props.theme.font[1]};
  font-size: ${props => props.theme.fontSize.small};
  font-weight: ${props => props.theme.fontWeight.bold};
  background-color: transparent;
  outline: none;
  margin: 1.6rem;
`;

export const YellowInput = styled(Input)`
  border-color: ${props => props.theme.color.yellow};
  color: ${props => props.theme.color.yellow};
`;

export const GreyInput = styled(Input)`
  border-color: ${props => props.theme.color.grey};
  color: ${props => props.theme.color.grey};
`;

export const Label = styled.label`
  font-family: ${props => props.theme.font[1]};
  font-size: ${props => props.theme.fontSize.small};
  font-weight: ${props => props.theme.fontWeight.bold};
`;

export const YellowLabel = styled(Input)`
  color: ${props => props.theme.color.yellow};
`;

export const GreyLabel = styled(Input)`
  color: ${props => props.theme.color.grey};
`;

export const RadioButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;