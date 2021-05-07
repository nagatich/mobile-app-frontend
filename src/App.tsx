import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'mobx-react'

import themes from 'theme'
// import MainLayout from 'components/layout/MainLayout'
import stores from 'stores'

import AppRoutes from './routes'
import GlobalStyles from './App.styles'

const App: React.FC = () => (
  <Provider {...stores}>
    <ThemeProvider theme={themes.defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
)

export default App
