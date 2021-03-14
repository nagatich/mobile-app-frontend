import styled from 'styled-components'

export default styled.div`
  height: 50px;
  padding: ${({ theme }) => theme.padding.container.min};
  background-color: ${({ theme }) => theme.bgColor.safe};
`
