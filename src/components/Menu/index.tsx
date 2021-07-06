import { Link } from 'react-router-dom'
import * as S from './styles'

export const Menu = () => (
  <>
    <S.Menu>
      <S.List>
        <S.Item>
          <Link to="/">Home</Link>
        </S.Item>

        <S.Item>
          <Link to="/about">About</Link>
        </S.Item>
      </S.List>
    </S.Menu>
  </>
)
