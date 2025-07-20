import React from 'react'
import { Link, useLocation } from 'react-router'
import AsoganLogoSVG from './Logo'
import Icon3Bars from './icons/3-bars'

export default function NavBar() {
  const location = useLocation()
  const links = [
    { name: 'Inicio', path: '/' },
    { name: 'Articulos', path: '/articulos' },
    { name: 'Productos', path: '/productos' },
    { name: '¿Quienes somos?', path: '/about' },
  ]

  return (
    <nav className="fixed bg-white w-screen ">
      <div className="flex gap-12">
        <div className="flex gap-6 p-2">
          <AsoganLogoSVG className="h-12 w-auto" />
          <div className="flex-shrink-1">
            <p className="text-secondary font-semibold text-sm">
              Asociación de Ganaderos de Ubaque
            </p>
            <p className="text-primary font-bold text-xl">ASOGANUBAQUE</p>
          </div>
        </div>
        <div className="flex flex-1 bg-primary rounded-xl items-center px-4">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`inline-flex items-center px-4 py-2 pt-1 border-b-3 text-xs font-medium
                                ${
                                  location.pathname === link.path
                                    ? 'border-white text-gray-900 dark:text-white'
                                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-secondary dark:hover:text-gray-200'
                                }`}
            >
              {link.name}
            </Link>
          ))}
          <div></div>
        </div>
      </div>
    </nav>
  )
}
