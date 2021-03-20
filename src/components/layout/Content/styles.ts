import styled from 'styled-components'

export default styled.div`
  max-width: 92.5rem;
  margin: 0 auto;
  width: 100%;

  .content {
    padding: ${({ theme }) => theme.padding.container.small};
  }
`
