import { FormEvent, useEffect, useState } from 'react'

import { Logo } from 'components/Logo'
import { InputSearch } from 'components/InputSearch'
import { CardContainer } from 'components/Container'
import MovieCard from 'components/MovieCard'
import { Link } from 'react-router-dom'

type MovieInfoProps = {
  imdbID: number
  Title: string
  Year: string
  Poster: string
}

export function Home() {
  const [movieName, setMovieName] = useState<string>('')
  const [movieResult, setMovieResult] = useState<MovieInfoProps[]>()

  function handleChange(event: FormEvent<HTMLInputElement>) {
    const movie = event.currentTarget.value
    setMovieName(movie)
  }

  useEffect(() => {
    async function makeRequest() {
      const URL = process.env.REACT_APP_URL
      const KEY = process.env.REACT_APP_API_KEY

      const request = await fetch(
        `${URL}?apikey=${KEY}&s=${movieName}&page=1&type=movie`
      )

      const { Search } = await request.json()
      console.log(Search)
      setMovieResult(Search)
    }

    if (movieName.trim() === '') {
      return
    }
    makeRequest()
  }, [movieName])

  return (
    <>
      <Logo />
      <InputSearch value={movieName} handleChange={handleChange} />
      <CardContainer>
        {movieResult?.map((movie) => (
          <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
            <MovieCard
              posterPath={movie.Poster}
              releaseDate={movie.Year}
              title={movie.Title}
            />
          </Link>
        ))}
      </CardContainer>
    </>
  )
}
