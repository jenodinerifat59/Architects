import React from 'react'
import Logo from '../src/assets/logo.png'

const Nav = () => {
  return (
    <div className="flex justify-between align-middle mt-10 bg-[#FFFFFF]">
      <img src={Logo} alt="logo"/>
      <u className="flex list-none decoration-none no-underline text-lg font-medium gap-19 text-[#424242]">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Login</li>
      </u>
    </div>
  )
}

export default Nav
