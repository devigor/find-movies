import { render, screen } from '@testing-library/react'

import { Title } from '.'

describe('<Title />', () => {
  it('Should be in the document', () => {
    render(<Title>CRA - Boilerplate</Title>)
    expect(screen.getByText(/cra - boilerplate/i)).toBeInTheDocument()
  })
})
