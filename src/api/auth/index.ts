import { request } from '../request'

import { User } from './types'

const transformUser = (user: any): User => ({
  email: user.email,
  firstName: user.first_name,
  id: user.id,
  lastName: user.last_name,
  token: user.token,
  username: user.username,
})

export const login = async (user: any) => {
  const data = await request('POST', 'auth/login/', {
    body: user,
  })
  return transformUser(data)
}

export const logout = async () => {
  const data = await request('GET', 'auth/logout/')
  return data
}
