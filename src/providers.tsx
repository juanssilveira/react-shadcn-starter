import { PropsWithChildren } from 'react'

import { ThemeProvider } from './contexts/theme-context'

export function Providers({ children }: PropsWithChildren) {
  return <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
}
