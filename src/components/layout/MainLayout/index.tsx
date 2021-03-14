import * as React from 'react'

import LayoutWrapper from '../LayoutWrapper'
import Header from '../common/Header'
import Footer from '../common/Footer'

const MainLayout: React.FC = ({ children }) => (
  <LayoutWrapper>
    <Header />
    { children }
    <Footer />
  </LayoutWrapper>
)

export default MainLayout
