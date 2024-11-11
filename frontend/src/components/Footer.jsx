import React from 'react'
import Links from './DataMaps/Links.js'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-black text-white py-8 flex flex-col items-center'>
        2024 - 2025 &copy; Sistem Informasi, All rights reserved. 
        <ul className='flex flex-row gap-8 mt-8'>
            {Links.map((link) =>(
                <Link to={link.path}>{link.name}</Link>
            ))}
        </ul>
    </footer>
  )
}

export default Footer