import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  padding: 1rem 2rem 0rem 0rem;
`

export const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 23rem;
  height: 1.9rem;
  border-bottom: 1px solid #fff;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  font-size: 1.2rem;
  color: #e2e2e2;
  background: transparent;
  font-family: 'Inter', sans-serif;
  font-weight: 400;

  ${media.greaterThan('medium')`
    width: 100%
  `}
`
