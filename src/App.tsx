import * as React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { ThemeProvider } from 'styled-components'

import themes from 'theme'
import MainLayout from 'components/layout/MainLayout'

import GlobalStyles from './App.styles'
import { routes } from './routes'

const history = createBrowserHistory()

const getRoutes = (r: typeof routes) => r.map((route) => (
  <Route
    key={route.name}
    path={route.path}
    component={route.component}
    exact
  />
))

const App: React.FC = () => (
  <ThemeProvider theme={themes.defaultTheme}>
    <GlobalStyles />
    <Router history={history}>
      {/* TODO поменять расположение лэйаута */}
      <MainLayout>
        <Switch>
          {getRoutes(routes)}
        </Switch>
      </MainLayout>
    </Router>
  </ThemeProvider>
)

export default App
