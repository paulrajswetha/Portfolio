import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { navLinks } from '../data/constants'
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (href) => {
        setIsOpen(false)
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                    ? theme === 'dark'
                        ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg border-b border-gray-800'
                        : 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <motion.a
                        href="#hero"
                        onClick={(e) => {
                            e.preventDefault()
                            scrollToSection('#hero')
                        }}
                        className="text-2xl font-bold relative group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                            Port
                        </span>
                        <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                            Folio
                        </span>
                        <motion.span
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"
                        />
                    </motion.a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection(link.href)
                                }}
                                className={`relative group ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                    } hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-500 to-purple-600 transition-all`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300" />
                            </motion.a>
                        ))}

                        {/* Theme Toggle Button */}
                        <motion.button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full ${theme === 'dark'
                                    ? 'bg-gray-800 text-yellow-400'
                                    : 'bg-gray-200 text-gray-700'
                                }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {theme === 'dark' ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <motion.button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full ${theme === 'dark'
                                    ? 'bg-gray-800 text-yellow-400'
                                    : 'bg-gray-200 text-gray-700'
                                }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {theme === 'dark' ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
                        </motion.button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={theme === 'dark' ? 'text-white' : 'text-gray-900'}
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`md:hidden overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                    } backdrop-blur-lg border-t ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
                    }`}
            >
                <div className="px-4 py-2 space-y-2">
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToSection(link.href)
                            }}
                            className={`block py-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                } hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-500 to-purple-600 transition-colors`}
                            whileHover={{ x: 10 }}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </motion.nav>
    )
}

export default Navbar