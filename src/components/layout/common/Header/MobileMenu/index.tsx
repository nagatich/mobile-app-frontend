import * as React from 'react'
import { Menu } from '@material-ui/icons'

import Styled from './styles'
import Props from './types'

const MobileMenu: React.FC<Props> = ({ toggleIsShown }) => (
  <Styled>
    <Menu onClick={toggleIsShown} />
  </Styled>
)

export default MobileMenu
