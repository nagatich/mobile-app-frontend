import { useObserver } from 'mobx-react'

import { useStores } from './useStores'

export const useAuthStore = () => {
  const { AppStore } = useStores()
  const { authStore } = AppStore

  return useObserver(() => ({
    authStore,
    ...authStore,
  }))
}
