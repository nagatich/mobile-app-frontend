import styled from 'styled-components'

export default styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor.secondaryLight};
  margin-bottom: ${({ theme }) => theme.margins.base};
`
