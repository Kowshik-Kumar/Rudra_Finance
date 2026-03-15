import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

/**
 * Footer Component
 * Contains contact information, quick links, and social media
 */
const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer Content */}
      <div className="container-custom px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">
              Rudra Tax & Business Solution
            </h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for professional tax and business consulting services.
              We provide comprehensive solutions for individuals and businesses.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Income Tax Filing</li>
              <li>GST Registration & Filing</li>
              <li>Business Registration</li>
              <li>Accounting Services</li>
              <li>Tax Planning</li>
              <li>Compliance Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-2">
                <MapPin size={20} className="flex-shrink-0 mt-1 text-secondary" />
                <span className="text-sm">
                  SHIV MANDIR, NUTAN PALLY, E1/11C, near ISHANESHWAR,
                  Bhiringi, Benachity, Durgapur, West Bengal 713213
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-secondary" />
                <a href="tel:+919832833434" className="hover:text-secondary transition-colors">
                  +91 98328 33434
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-secondary" />
                <a href="mailto:
                
                
                
                rudratax.stay7@gmail.com" className="hover:text-secondary transition-colors">
                  rudratax.stay7@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Clock size={18} className="text-secondary" />
                <span className="text-sm">Open Daily - Closes at 10 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container-custom px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              © {currentYear} Rudra Tax & Business Solution. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:text-secondary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
