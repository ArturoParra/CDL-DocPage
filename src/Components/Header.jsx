import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='grid grid-cols-6 h-28 bg-sky-700 items-center p-5'>
        <Link to="/" className='col-span-2 font-black text-6xl'>CDL</Link>
        <Link to="/iteracion0" className='col-span-1 font-bold text-2xl rounded-lg shadow-sm bg-blue-200 hover:bg-blue-400 transition ease-in-out w-fit p-4 duration-200'>Iteración 0</Link>
        <Link to="/iteracion1" className='col-span-1 font-bold text-2xl rounded-lg shadow-sm bg-blue-200 hover:bg-blue-400 transition ease-in-out w-fit p-4 duration-200'>Iteración 1</Link>
        <Link to="/iteracion2" className='col-span-1 font-bold text-2xl rounded-lg shadow-sm bg-blue-200 hover:bg-blue-400 transition ease-in-out w-fit p-4 duration-200'>Iteración 2</Link>
        <Link to="/iteracion3" className='col-span-1 font-bold text-2xl rounded-lg shadow-sm bg-blue-200 hover:bg-blue-400 transition ease-in-out w-fit p-4 duration-200'>Iteración 3</Link>
        
    </div>
  )
}
