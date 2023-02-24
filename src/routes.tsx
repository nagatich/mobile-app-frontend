import * as React from 'react'
import { Home, FormatListNumbered, Person } from '@material-ui/icons'
import { Redirect, Switch } from 'react-router-dom'

import { getRoutes } from 'lib/routes'
import { useAuthStore } from 'lib/hooks/stores'
import MainLayout from 'components/layout/MainLayout'
import AuthLayout from 'components/layout/AuthLayout'
import HomePage from 'components/pages/HomePage'
import WishListPage from 'components/pages/WishListPage'
import LoginPage from 'components/pages/LoginPage'
import WishListItemPage from 'components/pages/WishListItemPage'

export interface Route {
  name: string
  path: string
  isShown: boolean
  component: React.FC
  icon: React.FC
}

export const routes: Route[] = [
  {
    name: 'Главная страница',
    path: '/',
    component: HomePage,
    icon: Home,
    isShown: true,
  },
  {
    name: 'Список желаний',
    path: '/wish_list',
    component: WishListPage,
    icon: FormatListNumbered,
    isShown: true,
  },
  {
    name: 'WishListItemPage',
    path: '/wish_list/:id',
    component: WishListItemPage,
    icon: FormatListNumbered,
    isShown: false,
  },
]

export const authRoutes: Route[] = [
  {
    name: 'Авторизация',
    path: '/login',
    component: LoginPage,
    icon: Person,
    isShown: true,
  },
]

const AppRoutes: React.FC = () => {
  const { user } = useAuthStore()

  return (
    user ? (
      <MainLayout>
        <Switch>
          { getRoutes(routes) }
          <Redirect to="/" />
        </Switch>
      </MainLayout>
    ) : (
      <AuthLayout>
        <Switch>
          { getRoutes(authRoutes) }
          <Redirect to="/login" />
        </Switch>
      </AuthLayout>
    )
  )
}

export default AppRoutes
