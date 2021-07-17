import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import * as S from './styles'

type RouterParam = {
  id: string
}

type MovieInfoProps = {
  Title: string
  Year: string
  Relased: string
  Actors: string
  Director: string
  Genre: string
  Plot: string
  Poster: string
  imdbRating: string
}

function MovieDetails() {
  const { id } = useParams<RouterParam>()
  const [movieData, setMovieData] = useState({} as MovieInfoProps)

  useEffect(() => {
    async function findById() {
      const request = await fetch(
        `${process.env.REACT_APP_URL}?apikey=${process.env.REACT_APP_API_KEY}&i=${id}&plot=full`
      )

      const response = await request.json()
      setMovieData(response)
    }

    findById()
  }, [id])

  return (
    <S.Wrapper>
      <S.MovieInfos>
        <S.MovieHeader>
          <S.MovieTitle>{movieData.Title}</S.MovieTitle>
          <S.MovieSub>{`Release: ${movieData.Year} / Rating: ${movieData.imdbRating}`}</S.MovieSub>
        </S.MovieHeader>

        <S.MovieDetails>
          <S.MoviePlot>{movieData.Plot}</S.MoviePlot>
          <S.MovieActors>{`Actors: ${movieData.Actors}`}</S.MovieActors>
          <S.MovieActors>{`Directos: ${movieData.Director}`}</S.MovieActors>
        </S.MovieDetails>
      </S.MovieInfos>

      <S.MoviePoster src={movieData.Poster} alt={movieData.Title} />
    </S.Wrapper>
  )
}

export default MovieDetails
