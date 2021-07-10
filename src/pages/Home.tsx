import { FormEvent, useEffect, useState } from 'react'

import { Logo } from 'components/Logo'
import { InputSearch } from 'components/InputSearch'

type MovieInfoProps = {
  id: number
  originalTitle: string
  overview: string
  posterPath: string
  releaseDate: string
  title: string
  voteAverage: number
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
      const LAN = process.env.REACT_APP_LANGUAGE

      const request = await fetch(
        `${URL}?api_key=${KEY}&language=${LAN}&query=${movieName}&include_adult=false`
      )

      const { results } = await request.json()
      setMovieResult(results)
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
      <ul>
        {movieResult?.map((movie) => (
          <li key={movie.id} style={{ color: 'white' }}>
            {movie.title}
          </li>
        ))}
      </ul>
    </>
  )
}
