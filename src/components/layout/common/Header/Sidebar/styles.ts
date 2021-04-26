import styled, { css } from 'styled-components'
import { down } from 'styled-breakpoints'

import Props from './types'

export default styled.div<Partial<Props>>`
  position: fixed;
  top: 0;
  right: 0;
  width: 40%;
  height: 100%;
  background: ${({ theme }) => theme.bgColor.secondaryLight};
  transition: all ease-in-out .75s;
  box-shadow: 0 12px 22px rgba(26, 26, 26, 0.16);
  z-index: ${({ theme }) => theme.zIndex.highest};
  ${(props) => (props.isShown ? css`
    transform: translateX(0);
  ` : css`
    transform: translateX(100%);
  `)};

  ${down('tablet')} {
    width: 100%;
  }
  
  .sidebar {
    &-head {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: ${({ theme }) => theme.padding.container.min};
      border-bottom: 1px solid ${({ theme }) => theme.borderColor.extra};

      svg {
        cursor: pointer;
      }
    }

    &-content {
      padding: ${({ theme }) => theme.padding.container.min};

      .search {
        margin-bottom: ${({ theme }) => theme.margins.base};
      }

      &__list {
        &-exit {
          padding: ${({ theme }) => theme.padding.container.min};
          width: 100%;
          display: flex;
          align-items: center;

          svg {
            margin-right: ${({ theme }) => theme.margins.small};
          }
        }
      }
    }
  }
`
