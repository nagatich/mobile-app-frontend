import styled from 'styled-components'

import { Priority } from 'api/wishList/types'

import { Props } from './types'

export default styled.div<Props>`
  .item-card {
    position: relative;
    padding: ${({ theme }) => theme.padding.container.mobile};
    margin-bottom: ${({ theme }) => theme.margins.base};
    overflow: initial;
    display: flex;
    flex-direction: column;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-shadow: 0px 0px 10px 0px ${({ item, theme }) => {
    switch (item.priority) {
      case Priority.Low: return theme.textColor.success
      case Priority.Medium: return theme.textColor.primaryHover
      case Priority.High: return theme.textColor.error
      default: return ''
    }
  }};
      border-radius: inherit;
    }

    &-car {
      
    }
  }
`
