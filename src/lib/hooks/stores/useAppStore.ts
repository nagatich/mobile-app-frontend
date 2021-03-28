import { useObserver } from 'mobx-react'

import { useStores } from './useStores'

export const useAppStore = () => {
  const { AppStore } = useStores()

  return useObserver(() => ({
    AppStore,
    ...AppStore,
  }))
}
