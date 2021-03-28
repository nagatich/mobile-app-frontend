import { useObserver } from 'mobx-react'

import { useStores } from './useStores'

export const useFilterStore = () => {
  const { AppStore } = useStores()
  const { filterStore } = AppStore

  return useObserver(() => ({
    filterStore,
    ...filterStore,
  }))
}
