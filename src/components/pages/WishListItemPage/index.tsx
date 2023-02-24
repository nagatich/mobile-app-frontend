import * as React from 'react'

import { useWishListStore } from 'lib/hooks/stores'
import Loader from 'components/common/Loader'
// import { useWishListStore } from 'lib/hooks/stores'

const WishListItemPage: React.FC = () => {
  const { wishListStore, isLoading } = useWishListStore()
  const id = window.location.pathname.split('/').pop()

  React.useEffect(() => {
    wishListStore.getWishListItem(Number(id))
  }, [id, wishListStore])

  if (isLoading) return <Loader />

  return (
    <div>
      { id }
    </div>
  )
}

export default WishListItemPage
