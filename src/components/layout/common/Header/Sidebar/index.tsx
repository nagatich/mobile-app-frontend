import * as React from 'react'
import { Close } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'

import { routes } from 'routes'

import Logo from '../Logo'

import Props from './types'
import Styled from './styles'
import SearchBlock from './SearchBlock'
import Item from './Item'

const Sidebar: React.FC<Props> = ({ isShown, toggleIsShown }) => {
  const history = useHistory()
  const [activeRouteName, setActiveRouteName] = React.useState(history.location.pathname)

  React.useEffect(() => history.listen((location: any) => {
    setActiveRouteName(location.pathname)
  }), [history])

  const onItemClick = (path: string) => {
    setActiveRouteName(path)
    toggleIsShown()
  }

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
          {routes.map((item) => (
            <Item
              route={item}
              activeName={activeRouteName}
              key={item.name}
              onClick={() => onItemClick(item.path)}
            />
          ))}
        </ul>
      </div>
    </Styled>
  )
}

export default Sidebar
