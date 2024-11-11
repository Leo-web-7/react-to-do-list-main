import React from 'react'
import { Link } from 'react-router-dom'
import Links from './DataMaps/Links.js'

const Navbar = () => {
  return (
    <nav className='bg-black text-white flex justify-center py-8'>
        <ul className='flex flex-row gap-4'>
            {Links.map((link) =>(
                 <Link to={link.path}>{link.name}</Link>
            ))}
           
        </ul>
    </nav>
  )
}

export default Navbar