import { useObserver } from 'mobx-react'

import { useStores } from './useStores'

export const useQueryStore = () => {
  const { AppStore } = useStores()
  const { queryStore } = AppStore

  return useObserver(() => ({
    queryStore,
    ...queryStore,
  }))
}
