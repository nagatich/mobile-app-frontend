import * as React from 'react'

import Styled from './styles'
import MobileMenu from './MobileMenu'
import Logo from './Logo'
import Sidebar from './Sidebar'

const Header: React.FC = () => {
  const [isShown, setIsShown] = React.useState(false)

  const toggleIsShown = () => setIsShown((prev) => !prev)

  return (
    <Styled>
      <Logo />
      <MobileMenu toggleIsShown={toggleIsShown} />
      <Sidebar
        isShown={isShown}
        toggleIsShown={toggleIsShown}
      />
    </Styled>
  )
}

export default Header
