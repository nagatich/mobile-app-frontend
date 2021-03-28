import styled, { css } from 'styled-components'

import { Props } from './types'

export default styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    color: green;
  }

  ${(props) => props.isFullScreen && css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: white;
    opacity: .8;
  `};
`
