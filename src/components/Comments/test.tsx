import { render, screen } from '@testing-library/react'

import { Comments } from '.'

describe('<VslComponent />', () => {
  it('shoud render the heading', () => {
    const { container } = render(<Comments />)

    expect(screen.getByRole('heading', { name: /VslComponent/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
