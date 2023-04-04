import React from 'react'
import logo1 from './images/imageGame.jpg'


const Header = () => {
  return (
    <header className='grid grid-cols-2'>
      <img src = {logo1} alt=""  className='w-24 h-12 cursor-pointer'/>
      <nav>
        <ul className='justify-end hidden grid-cols-3 gap-4 text-2xl font-bold text-white md:flex'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header