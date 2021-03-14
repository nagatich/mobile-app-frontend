import * as React from 'react'
import { ThemeProvider } from 'styled-components'

import themes from 'theme'

import GlobalStyles from './App.styles'
import Kek from './components/pages/Kek'

const App: React.FC = () => (
  <ThemeProvider theme={themes.defaultTheme}>
    <GlobalStyles />
    <Kek />
  </ThemeProvider>
)

export default App
