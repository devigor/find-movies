import styled from 'styled-components'

export const Menu = styled.nav`
  padding-right: 2rem;
`

export const List = styled.ul`
  display: flex;
  list-style: none;
`

export const Item = styled.li`
  &:first-child {
    margin-right: 2rem;
  }
  a {
    color: #29292e;
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    text-decoration: none;
    transition: color 0.2s linear;
    &:hover {
      color: #ff66c2;
    }
  }
`
