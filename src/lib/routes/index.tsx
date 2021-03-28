import * as React from 'react'
import { Route } from 'react-router-dom'

import { routes } from 'routes'

export const getRoutes = (r: typeof routes) => r.map((route) => (
  <Route
    key={route.name}
    path={route.path}
    component={route.component}
    exact
  />
))
