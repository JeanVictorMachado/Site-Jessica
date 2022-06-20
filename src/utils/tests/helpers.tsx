import { ChakraProvider } from '@chakra-ui/react'

import { render, RenderResult } from '@testing-library/react'

import theme from '../../styles/theme'

// export const renderWithTheme = (children: React.ReactNode): RenderResult => {
//   return render(<ChakraProvider theme={theme}>{children}</ChakraProvider>)
// }

export const renderWithTheme = (ui: JSX.Element) => {
  const Wrapper = ({ children }: any) => <ChakraProvider theme={theme}>{children}</ChakraProvider>

  return render(ui, { wrapper: Wrapper })
}
