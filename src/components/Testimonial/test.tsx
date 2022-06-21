import { render, screen } from '@testing-library/react'

import { Testimonial } from '.'

describe('<VslComponent />', () => {
  it('shoud render the heading', () => {
    const { container } = render(<Testimonial />)

    expect(screen.getByRole('heading', { name: /VslComponent/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
