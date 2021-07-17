import * as S from './styles'

type MovieCardProps = {
  posterPath: string
  releaseDate: string
  title: string
}

const MovieCard = ({ posterPath, releaseDate, title }: MovieCardProps) => (
  <S.Wrapper>
    <S.MovieImage src={posterPath} />
    <S.MovieInfo>
      <S.MovieTitle>{title}</S.MovieTitle>
      <S.MovieYear>{releaseDate}</S.MovieYear>
    </S.MovieInfo>
  </S.Wrapper>
)

export default MovieCard
