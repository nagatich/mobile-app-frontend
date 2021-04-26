import * as React from 'react'
import {
  Input,
  InputLabel,
  FormControl,
  InputAdornment,
  IconButton,
  Button,
} from '@material-ui/core'
import {
  AccountCircle,
  Visibility,
  VisibilityOff,
} from '@material-ui/icons'
import { Formik } from 'formik'

import { useAuthStore } from 'lib/hooks/stores'

import Styled from './styled'
import { LoginForm } from './types'

const LoginPage: React.FC = () => {
  const [isPasswordShow, setIsPasswordShow] = React.useState(false)
  const { authStore, error } = useAuthStore()

  return (
    <Styled>
      <Formik<LoginForm>
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={(values, actions) => {
          authStore.login(values.username, values.password)
          actions.setSubmitting(false)
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <FormControl className="form-control">
              <InputLabel htmlFor="login">Логин</InputLabel>
              <Input
                value={props.values.username}
                onChange={(e) => props.setFieldValue('username', e.target.value)}
                id="login"
                startAdornment={(
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                )}
              />
            </FormControl>
            <FormControl className="form-control">
              <InputLabel htmlFor="password">Пароль</InputLabel>
              <Input
                value={props.values.password}
                onChange={(e) => props.setFieldValue('password', e.target.value)}
                id="password"
                type={isPasswordShow ? 'text' : 'password'}
                endAdornment={(
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setIsPasswordShow((prev) => !prev)}
                    >
                      {isPasswordShow ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )}
              />
            </FormControl>
            <Button
              className="login-button"
              variant="contained"
              color="primary"
              onClick={props.submitForm}
              disabled={props.isSubmitting}
            >
              Войти
            </Button>
            {error && (
              <span className="error">
                { error }
              </span>
            )}
          </form>
        )}
      </Formik>
    </Styled>
  )
}

export default LoginPage
