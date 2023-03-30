import React from 'react'
import logo1 from './images/imageGame.jpg'


const Header = () => {
  return (
    <header className='grid grid-cols-2'>
      <img src = {logo1} alt=""  className='h-12 w-24 cursor-pointer'/>
      <nav>
        <ul className='grid grid-cols-3 text-blue-800 text-lg font-semibold'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header