import { render, screen } from '@testing-library/react'

import { PersonalImageContent } from '.'

describe('<PersonalImageContent />', () => {
  it('shoud render the heading', () => {
    const { container } = render(<PersonalImageContent />)

    expect(screen.getByRole('heading', { name: /PersonalImageContent/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
