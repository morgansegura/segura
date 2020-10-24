import React from 'react'
import { Link } from 'gatsby'

/* Images */
import Logo from '../../../static/assets/icons/segura-square-icon.svg'

/* Styled Components */
const Header = ({ children, ...otherProps }) => {
  return (
    <header className="bg-white p-12">
      <div className="flex">
        <Link to="/" title="Home" aria-label="Home">
          <Logo className="logo w-10 h-10" />
        </Link>
        {children}
      </div>
    </header>
  )
}

export default Header
