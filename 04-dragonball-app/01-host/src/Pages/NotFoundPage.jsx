import React from 'react'

import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className='text-center'>
      <h1 className='text-xl text-red-500 mb-3'>404 - pagina no encontrada</h1>
      <NavLink 
        to="/"
        className="bg-blue-400 text-white px-4 p-3 rounded-md">
        vovler a la pagina principal
      </NavLink>
    </div>
  )
}

export default NotFoundPage