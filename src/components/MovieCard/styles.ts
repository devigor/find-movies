import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 10rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  margin-bottom: 3rem;
`

export const MovieImage = styled.img`
  display: block;
  width: 100%;
  height: 12rem;
`

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: #fff;
  height: 3rem;
  padding: 0.5rem 0 2rem 0.5rem;
`

export const MovieTitle = styled.h1`
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
`

export const MovieYear = styled.span`
  font-size: 0.8rem;
  font-family: 'Inter', sans-serif;
`
