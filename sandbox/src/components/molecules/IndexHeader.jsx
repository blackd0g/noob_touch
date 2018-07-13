import React from 'react'
import styled from 'styled-components'

import LogoMain from '../atoms/LogoMain'
import TitleWelcome from '../atoms/TitleWelcome'

const Header = styled.header`
  height: 150px;
  padding: 20px;
`

const AppHeader = styled(Header)`
  color: white;
  background-color: black;
`

const IndexHeader = () => (
  <AppHeader>
    <LogoMain />
    <TitleWelcome />
  </AppHeader>
)

export default IndexHeader
