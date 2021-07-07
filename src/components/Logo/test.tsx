import { render, screen } from '@testing-library/react'
import LogoImg from 'assets/images/PlayIcon.png'
import { Logo } from '.'

describe('<Logo />', () => {
  it('Should be in the document', () => {
    render(<Logo />)
    expect(screen.getByText(/Movies4Fun/i)).toBeInTheDocument()
  })

  it('Should be render the icon play image', () => {
    render(<Logo />)
    expect(screen.getByRole('img')).toHaveAttribute('src', LogoImg)
  })
})
