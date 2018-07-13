import React from 'react'
import styled, { keyframes } from 'styled-components'

import logo from '../../assets/logo.svg';

const AppLogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const ImageLogo = styled.img`
  animation: ${AppLogoSpin} infinite 20s linear;
  width: 80px;
`
const LogoMain = () => (
  <ImageLogo src={logo} alt="logo" />
)

export default LogoMain
