import styled from 'styled-components'

export default styled.div`
  .result-block {
    &__query {
      margin-bottom: ${({ theme }) => theme.margins.base};
    }
    &-results {
      display: flex;
      flex-direction: column;
    }
  }
`
