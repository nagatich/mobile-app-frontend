import { Home, FormatListNumbered } from '@material-ui/icons'

import Kek from 'components/pages/Kek'
import WishList from 'components/pages/WishList'

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
    component: Kek,
    icon: Home,
  },
  {
    name: 'Список жеданий',
    path: '/wish_list',
    component: WishList,
    icon: FormatListNumbered,
  },
]
