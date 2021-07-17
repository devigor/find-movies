import styled from 'styled-components'

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: 'infos poster';
  margin-top: 2rem;
  margin-left: 2rem;
`
export const MovieInfos = styled.div`
  grid-area: infos;
`

export const MovieHeader = styled.div`
  display: flex;
  flex-direction: column;
`

export const MovieTitle = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-family: 'Inter', sans-serif;
`

export const MovieSub = styled.span`
  color: #fff;
  font-size: 0.8rem;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
`

export const MovieDetails = styled.div`
  margin-top: 4rem;
  width: 600px;
`

export const MoviePlot = styled.p`
  color: #fff;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  line-height: 24px;
  letter-spacing: 1px;
`

export const MovieActors = styled.p`
  color: #fff;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
`

export const MoviePoster = styled.img`
  grid-area: poster;
  padding: 7rem;
`
