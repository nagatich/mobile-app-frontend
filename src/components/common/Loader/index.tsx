import * as React from 'react'
import { CircularProgress } from '@material-ui/core'

import Styled from './styles'
import { Props } from './types'

const Loader: React.FC<Props> = ({ isFullScreen }) => (
  <Styled
    className="loader"
    isFullScreen={isFullScreen}
  >
    <CircularProgress />
  </Styled>
)

export default Loader
