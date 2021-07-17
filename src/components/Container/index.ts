import styled from 'styled-components'

export const Container = styled.div`
  max-width: 130rem;
  margin-left: 2rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`
export const CardContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;

  > a {
    text-decoration: none;
    color: #000;
  }
`
