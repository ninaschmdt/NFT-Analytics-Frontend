import React from 'react'
import MetaMask from './MetaMask'
import Logo from './Logo'

const Header = () => {
  return (
    <div className='header'>
      <Logo />
      <MetaMask />
    </div>
  )
}

export default Header