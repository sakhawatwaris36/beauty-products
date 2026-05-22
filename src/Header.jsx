import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    const toggleMenu = () => setIsOpen(!isOpen)

    const navItems = [
        { label: 'Home', path: '/' }, 
        { label: 'Product', path: '/Product' },
        { label: 'About', path: '/About' },
        { label: 'Contact', path: '/Contact' },
        { label: 'Help', path: '/Help' },

    ]

    return (
        <>
            <div className="hdr">
                <header>
                    <div>
                        <h1 className="logo">Beauty <span className="pro">PRODUCT</span></h1>
                    </div>

                    {/* Desktop Nav */}
                    <div className="nav-links">
                        <ol>
                            {navItems.map((item) => (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        className={location.pathname === item.path ? 'active' : ''}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Hamburger Button */}
                    <button
                        className={`hamburger ${isOpen ? 'open' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </header>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isOpen ? 'show' : ''}`}>
                <ol>
                    {navItems.map((item) => (
                        <li key={item.path} onClick={() => setIsOpen(false)}>
                            <Link
                                to={item.path}
                                className={location.pathname === item.path ? 'active' : ''}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ol>
            </div>
        </>
    )
}