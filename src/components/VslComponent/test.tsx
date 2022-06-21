import { render, screen } from '@testing-library/react'

import { VslComponent } from '.'

describe('<VslComponent />', () => {
  it('shoud render the heading', () => {
    const { container } = render(<VslComponent />)

    expect(screen.getByRole('heading', { name: /VslComponent/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
