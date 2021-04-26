import * as React from 'react'
import { Close, ExitToApp } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'

import { routes, authRoutes } from 'routes'
import { useAuthStore } from 'lib/hooks/stores'

import Logo from '../Logo'

import Props from './types'
import Styled from './styles'
import SearchBlock from './SearchBlock'
import Item from './Item'

const Sidebar: React.FC<Props> = ({ isShown, toggleIsShown }) => {
  const history = useHistory()
  const [activeRouteName, setActiveRouteName] = React.useState(history.location.pathname)
  const { user, authStore } = useAuthStore()

  React.useEffect(() => history.listen((location: any) => {
    setActiveRouteName(location.pathname)
  }), [history])

  const onItemClick = (path: string) => {
    setActiveRouteName(path)
    toggleIsShown()
  }

  const logout = () => {
    authStore.logout()
    toggleIsShown()
  }

  const routings = React.useMemo(() => (user ? routes : authRoutes), [user])

  return (
    <Styled
      isShown={isShown}
      className="sidebar"
    >
      <div className="sidebar-head">
        <Logo />
        <Close
          onClick={toggleIsShown}
        />
      </div>
      <div className="sidebar-content">
        <SearchBlock />
        <ul className="sidebar-content__list">
          {routings.map((item) => (
            <Item
              route={item}
              activeName={activeRouteName}
              key={item.name}
              onClick={() => onItemClick(item.path)}
            />
          ))}
          {user && (
            <button
              className="sidebar-content__list-exit"
              type="button"
              onClick={logout}
            >
              <ExitToApp />
              <span>
                Выйти
              </span>
            </button>
          )}
        </ul>
      </div>
    </Styled>
  )
}

export default Sidebar
