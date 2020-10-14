import styled from 'styled-components';

export const InputStyle = styled.input`
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
  border-color: ${props => props.yellow ? props.theme.color.yellow : props.theme.color.grey};
  color: ${props => props.yellow ? props.theme.color.yellow : props.theme.color.grey};
`;

export const RadioButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default InputStyle
