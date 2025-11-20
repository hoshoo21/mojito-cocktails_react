import React from 'react'
import { nav_links } from '../constants'
const Navbar = () => {
  return (
    <nav>
        <div>
            <a href ="#home" className='flex items-center gap-2'>
                <p>Velvet Pour</p>
            </a>
            <ul>
             {nav_links.map((link)=>{
                return <li key = {link.id}><a href={`#${link.id}`}> {link.title} </a>   </li>
             })

             }
            </ul>
        </div>
    </nav>
  )
}

export default Navbar