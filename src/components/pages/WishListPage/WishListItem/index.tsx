import * as React from 'react'
import { Card } from '@material-ui/core'
import { Link } from 'react-router-dom'

import Styled from './style'
import { Props } from './types'

const WishListItem: React.FC<Props> = ({ item }) => {
  React.useEffect(() => {
    console.log(item)
  }, [])

  return (
    <Styled item={item}>
      <Link to={`/wish_list/${item.id}`}>
        <Card className="item-card">
          <p className="item-card-car">
            {`
              ${item.brand.name}
              ${item.model?.name || ''}
              ${item.generation?.family || ''}
              ${item.modification?.fuel || ''}
            `}
          </p>
          <p>{item.name}</p>
        </Card>
      </Link>
    </Styled>
  )
}

export default WishListItem
