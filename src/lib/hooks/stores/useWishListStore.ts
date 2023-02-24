import { useObserver } from 'mobx-react'

import { useStores } from './useStores'

export const useWishListStore = () => {
  const { AppStore } = useStores()
  const { wishListStore } = AppStore

  return useObserver(() => ({
    wishListStore,
    ...wishListStore,
  }))
}
