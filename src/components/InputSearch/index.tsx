import { useRef } from 'react'
import { useKeyPressEvent } from 'react-use'
import * as S from './styles'

export const InputSearch = () => {
  const InputRef = useRef<HTMLInputElement>(null)

  function FocusInput() {
    InputRef.current?.focus()
  }

  useKeyPressEvent('k', FocusInput, FocusInput)

  return (
    <S.Wrapper>
      <S.Input
        ref={InputRef}
        placeholder="Search here or press K to start"
        data-testid="input-search"
        type="text"
      />
    </S.Wrapper>
  )
}
