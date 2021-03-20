import styled from 'styled-components'

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: ${({ theme }) => theme.padding.container.min};
  border-bottom: 1px solid ${({ theme }) => theme.borderColor.landing};
  box-shadow: 0 12px 22px rgba(26, 26, 26, 0.16);
  background: ${({ theme }) => theme.bgColor.secondaryLight};
`
