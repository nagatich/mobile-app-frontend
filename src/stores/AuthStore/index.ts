import { observable, action, makeObservable } from 'mobx'

import { login, logout } from 'api/auth'
import { User } from 'api/auth/types'

import AppStore from '../AppStore'

class AuthStore {
  @observable user: User | null = null
  @observable error = ''

  constructor(public appStore: typeof AppStore) {
    makeObservable(this)

    const user = localStorage.getItem('user')
    if (user) {
      this.setUser(JSON.parse(user) as User)
    }
  }

  @action setUser = (user: User | null) => {
    this.user = user
    if (user) {
      localStorage.setItem('token', user.token)
      localStorage.setItem('user', JSON.stringify(user))
    }
  }

  @action setError = (error: string) => {
    this.error = error
  }

  // fetchs
  login = (username: string, password: string) => {
    this.setError('')
    login({ username, password })
      .then((res: User) => {
        this.setUser(res)
      })
      .catch((err: Error) => {
        this.setError(err.message)
      })
  }

  logout = () => {
    logout()
      .then((_res) => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        this.setUser(null)
      })
      .catch((err) => {
        console.log({ err })
      })
  }
}

export default AuthStore
