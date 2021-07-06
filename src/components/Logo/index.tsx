import LogoImg from 'assets/images/PlayIcon.png'
import * as S from './styles'

export const Logo = () => (
  <S.Wrapper>
    <S.LinkHome href="/">
      <S.ImgLogo src={LogoImg} alt="Icon play" />
      <S.Title>Movies4Fun</S.Title>
    </S.LinkHome>
  </S.Wrapper>
)
