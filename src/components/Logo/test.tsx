import { render, screen } from '@testing-library/react'

import { Logo } from '.'

describe('<Logo />', () => {
  it('Should be in the document', () => {
    render(<Logo />)

    expect(screen.getByText(/Movies4Fun/i)).toBeInTheDocument()
  })
})
