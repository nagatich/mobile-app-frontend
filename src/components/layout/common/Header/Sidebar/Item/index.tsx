import * as React from 'react'
import { Link } from 'react-router-dom'

import Styled from './styles'
import Props from './types'

const Item: React.FC<Props> = ({ route, activeName, onClick }) => (
  <Styled isActive={activeName === route.path}>
    <Link
      className="item__link"
      to={route.path}
      onClick={onClick}
    >
      <route.icon />
      {route.name}
    </Link>
  </Styled>
)

export default Item
