import styled from 'styled-components'

export default styled.div`
  display: flex;

  .search {
    &__input {
      flex: 1;
      position: relative;
      margin-right: ${({ theme }) => theme.margins.small};

      input {
        border: none;
        width: 100%;
        background: ${({ theme }) => theme.bgColor.secondaryLight};
      }

      &:before,
      &:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
      }

      &:after {
        border-bottom: 2px solid ${({ theme }) => theme.borderColor.extra};
        z-index: 1;
      }

      &:before {
        border-bottom: 2px solid ${({ theme }) => theme.borderColor.green};;
        transform: scaleX(0);
        transition: transform 250ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
        z-index: 2;
      }


      &:focus-within {
        &:before {
          transform: scaleX(1);
        }
      }
    }

    &__button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      cursor: pointer;
    }
  }
`
