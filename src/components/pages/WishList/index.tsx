import * as React from 'react'
import { Link } from 'react-router-dom'

import { routes } from 'routes'
// import MainLayout from 'components/layout/MainLayout'

const WishList: React.FC = () => (
  <div>
    wish list
    {routes.map((route) => (
      <Link
        to={route.path}
        key={route.name}
      >
        {route.name}
      </Link>
    ))}
  </div>
)

export default WishList
