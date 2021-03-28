import { Home, FormatListNumbered } from '@material-ui/icons'

import HomePage from 'components/pages/HomePage'
import WishListPage from 'components/pages/WishListPage'

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
