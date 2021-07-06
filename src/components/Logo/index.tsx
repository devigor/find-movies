import LogoImg from 'assets/images/PlayIcon.png'
import * as S from './styles'

export const Logo = () => (
  <S.Wrapper>
    <S.LinkHome>
      <S.Title>Movies4Fun</S.Title>
      <S.ImgLogo src={LogoImg} alt="Icon play" />
    </S.LinkHome>
  </S.Wrapper>
)
