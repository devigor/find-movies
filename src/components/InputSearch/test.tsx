import { render, screen } from '@testing-library/react'

import { InputSearch } from '.'

describe('<InputSearch />', () => {
  it('Should be in the document and be text type', () => {
    render(<InputSearch />)

    expect(screen.getByTestId(/input-search/i))
    expect(screen.getByTestId(/input-search/i)).toHaveAttribute('type', 'text')
  })
})
