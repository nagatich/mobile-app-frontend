import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  padding: ${({ theme }) => theme.padding.container.mobile};
  margin: 0 auto;
  max-width: 450px;

  form {
    display: flex;
    flex-direction: column;

    .form-control {
      margin-bottom: ${({ theme }) => theme.margins.big};
    }

    .error {
      text-align: center;
      padding: ${({ theme }) => theme.padding.innerOffset.small} 0;
      color: ${({ theme }) => theme.textColor.error};
      font-size: 12px;
    }
  }
`
