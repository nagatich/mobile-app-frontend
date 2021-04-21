import * as React from 'react'

import LayoutWrapper from '../LayoutWrapper'
import Header from '../common/Header'
// import Footer from '../common/Footer'
import Content from '../Content'

const MainLayout: React.FC = ({ children }) => (
  <LayoutWrapper>
    <Header />
    <Content>
      { children }
    </Content>
    {/* <Footer /> */}
  </LayoutWrapper>
)

export default MainLayout
