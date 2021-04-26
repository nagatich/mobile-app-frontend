import * as React from 'react'
import { Home, FormatListNumbered, Person } from '@material-ui/icons'
import { Redirect, Switch } from 'react-router-dom'

import { getRoutes } from 'lib/routes'
import { useAuthStore } from 'lib/hooks/stores'
import HomePage from 'components/pages/HomePage'
import WishListPage from 'components/pages/WishListPage'
import LoginPage from 'components/pages/LoginPage'

export interface Route {
  name: string
  path: string
  component: React.FC
  icon: React.FC
}

export const routes: Route[] = [
  {
    name: 'Главная страница',
    path: '/',
    component: HomePage,
    icon: Home,
  },
  {
    name: 'Список желаний',
    path: '/wish_list',
    component: WishListPage,
    icon: FormatListNumbered,
  },
]

export const authRoutes: Route[] = [
  {
    name: 'Авторизация',
    path: '/login',
    component: LoginPage,
    icon: Person,
  },
]

const AppRoutes: React.FC = () => {
  const { user } = useAuthStore()

  return (
    user ? (
      <Switch>
        { getRoutes(routes) }
        <Redirect to="/" />
      </Switch>
    ) : (
      <Switch>
        { getRoutes(authRoutes) }
        <Redirect to="/login" />
      </Switch>
    )
  )
}

export default AppRoutes
