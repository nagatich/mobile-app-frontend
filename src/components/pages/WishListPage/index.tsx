import * as React from 'react'

import { useWishListStore } from 'lib/hooks/stores'

import WishListItem from './WishListItem'

const WishListPage: React.FC = () => {
  const { wishList } = useWishListStore()

  return (
    <div>
      {wishList.map((item) => (
        <WishListItem
          item={item}
          key={item.id}
        />
      ))}
    </div>
  )
}

export default WishListPage
