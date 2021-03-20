import * as React from 'react'

import Styled from './styles'

const Content: React.FC = ({ children }) => (
  <Styled>
    <div className="content">
      { children }
    </div>
  </Styled>
)

export default Content
