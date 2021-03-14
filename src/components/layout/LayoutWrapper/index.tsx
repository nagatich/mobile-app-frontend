import * as React from 'react'

import Styled from './styles'

const LayoutWrapper: React.FC = ({ children }) => (
  <Styled>
    { children }
  </Styled>
)

export default LayoutWrapper
