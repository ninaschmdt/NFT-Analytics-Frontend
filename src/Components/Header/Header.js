import React from 'react'
import MetaMask from './MetaMask'
import Logo from './Logo'

const Header = () => {
  return (
    <div className='header'>
      <div>
        <Logo />
      </div>
      <div>
        <MetaMask />
      </div>
    </div>
  )
}

export default Header