import * as React from 'react'
import { Switch, BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'mobx-react'

import themes from 'theme'
import MainLayout from 'components/layout/MainLayout'
import stores from 'stores'
import { getRoutes } from 'lib/routes'

import { routes } from './routes'
import GlobalStyles from './App.styles'

const App: React.FC = () => {
  React.useEffect(() => {
    console.log('App')
  }, [])

  return (
    <Provider {...stores}>
      <ThemeProvider theme={themes.defaultTheme}>
        <GlobalStyles />
        <BrowserRouter>
          <MainLayout>
            <Switch>
              {getRoutes(routes)}
            </Switch>
          </MainLayout>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
