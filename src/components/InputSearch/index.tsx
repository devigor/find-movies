import { ChangeEvent, useRef } from 'react'
import { useKeyPressEvent } from 'react-use'
import * as S from './styles'

type InputSearchProps = {
  value: string
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const InputSearch = ({ value, handleChange }: InputSearchProps) => {
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
        value={value}
        onChange={handleChange}
      />
    </S.Wrapper>
  )
}
