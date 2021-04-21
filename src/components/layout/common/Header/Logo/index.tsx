/* eslint-disable import/extensions */
import * as React from 'react'

import Sider from './assets/sider.jpg'
import Styled from './styles'

const Logo: React.FC = () => (
  <Styled className="logo">
    <img
      className="logo__img"
      src={Sider}
      alt="sider"
      width="50px"
      height="50px"
    />
  </Styled>
)

export default Logo
