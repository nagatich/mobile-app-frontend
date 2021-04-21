import styled from 'styled-components'

export default styled.div`
  display: flex;

  .previous-search {
    &__span {
      margin-right: ${({ theme }) => theme.margins.small};
      white-space: nowrap;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__button {
      padding: 0;
      text-decoration: underline;
    }
  }
`
