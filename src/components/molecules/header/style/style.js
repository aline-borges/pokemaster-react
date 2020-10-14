import styled from 'styled-components';

export const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

export const MenuList = styled.ul`
  display: flex;
  justify-align: space-between;
  align-items: center;
`;

export const MenuOption = styled.li`
  padding: 8px 16px;
  margin-left: 0.5rem;
  text-transform: uppercase;
  font-family: ${props => props.theme.font[1]};
  font-size: ${props => props.theme.fontSize.superSmall};
  font-weight: ${props => props.theme.fontWeight.extraBold};
  cursor: pointer;

  a {
    color: ${props => props.yellow ? props.theme.grey.color : props.theme.yellow.color};
  }

  &:hover {
    padding: 8px 16px;
    background-color: ${props => props.yellow ? props.theme.grey.color 
    : props.theme.yellow.color};
    border-radius: 2.0rem;

    a {
      color: ${props => props.yellow ? props.theme.yellow.color : props.theme.grey.color};
    }
  }
`;

export const AppName = styled.div`
  margin-right: 5rem;
`;

export const Logo = styled.img`
`;