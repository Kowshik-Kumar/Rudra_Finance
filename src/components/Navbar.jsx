import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

/**
 * Navbar Component
 * Responsive navigation bar with mobile menu toggle
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const location = useLocation()

  // Handle scroll effect for navbar background and visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Update background when scrolled
      setIsScrolled(currentScrollY > 20)
      
      // Show/hide navbar based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top - show navbar
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide navbar
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center py-4 px-4">
          {/* Logo and Brand Name */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={import.meta.env.BASE_URL + "logo.png"} 
              alt="Rudra Tax & Business Logo" 
              className="h-12 w-auto object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-primary leading-tight">
                Rudra Tax & Business Solutions
              </h1>
              <p className="text-xs text-gray-600">Professional Solutions By Gopal Pandey (Associated with Chartered Accountant)</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+919832833434"
              className="flex items-center space-x-2 btn-primary"
            >
              <Phone size={18} />
              <span>+91 98328 33434</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-primary hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4 px-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium py-2 transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary'
                      : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+919832833434"
                className="flex items-center justify-center space-x-2 btn-primary"
              >
                <Phone size={18} />
                <span>+91 98328 33434</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
