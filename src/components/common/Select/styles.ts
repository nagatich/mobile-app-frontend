import styled from 'styled-components'
import { FormControl, MenuItem } from '@material-ui/core'

export default styled(FormControl)`
  width: 100%;

  .menu-item {
    sub {
      display: none;
    }
  }
`

export const StyledMenuItem = styled(MenuItem)`
  .menu-item {
    display: flex;
    flex-direction: column;
  }
`
