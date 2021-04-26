import * as React from 'react'
import { Route } from 'react-router-dom'

import { Route as Routes } from 'routes'

export const getRoutes = (r: Routes[]) => r.map((route) => (
  <Route
    key={route.name}
    path={route.path}
    component={route.component}
    exact
  />
))
