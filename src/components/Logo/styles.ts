import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  width: 100%;
  margin-top: 1rem;
`

export const LinkHome = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;
  align-items: center;

  ${media.greaterThan('medium')`
    justify-content: right;
    margin-left: 2rem;
  `}
`

export const Title = styled.h1`
  color: #e2e2e2;
  font-size: 1.8rem;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  padding-left: 1rem;
`

export const ImgLogo = styled.img`
  width: 3rem;
  height: 3rem;
`
