import styled, { css } from 'styled-components'

interface Props {
  isActive: boolean
}

export default styled.div<Props>`
  margin-bottom: ${({ theme }) => theme.margins.base};
  border-radius: ${({ theme }) => theme.borderRadius.smaller};
  ${(props) => props.isActive && css`
    background: rgba(200, 200, 200, 1)!important;
  `}

  &:hover {
    background: rgba(200, 200, 200, 0.2);
  }

  .item {
    &__link {
      display: flex;
      align-items: center;
      padding: ${({ theme }) => theme.padding.container.min};
  
      &.active {
        background: ${({ theme }) => theme.bgColor.primary};
      }
  
      svg {
        margin-right: ${({ theme }) => theme.margins.small};
      }
    }
  }
`
