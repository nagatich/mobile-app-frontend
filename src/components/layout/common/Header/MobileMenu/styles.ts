import styled from 'styled-components'
import { down } from 'styled-breakpoints'

export default styled.div`
  display: none;

  ${down('md')} {
    display: flex;
  };

  svg {
    cursor: pointer;
  }
`
