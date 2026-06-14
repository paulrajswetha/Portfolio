import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personalInfo } from '../data/constants'
import { FaGithub, FaLinkedin, FaDownload, FaArrowDown } from 'react-icons/fa'

const typingLines = [
    'Full Stack Developer',
    'End-to-End Solution Solver',
    'Empowering Digital Transformation',
    'Cutting-Edge AI/ML Solutions',
    'Intuitive UX/UI with Figma',
    'Robust Full Stack Engineering',
    'Seamless Cloud Integrations',
    'Clean UI Design Excellence',
    'Data-Driven Decision Making',
    'Future-Ready SDG Platforms',
]

const useTypewriter = (lines, typingSpeed = 60, deletingSpeed = 35, pause = 1800) => {
    const [lineIndex, setLineIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [deleting, setDeleting] = useState(false)
    const [displayed, setDisplayed] = useState('')

    useEffect(() => {
        const current = lines[lineIndex]
        let timeout

        if (!deleting && charIndex <= current.length) {
            setDisplayed(current.slice(0, charIndex))
            timeout = setTimeout(() => setCharIndex((c) => c + 1), typingSpeed)
        } else if (!deleting && charIndex > current.length) {
            timeout = setTimeout(() => setDeleting(true), pause)
        } else if (deleting && charIndex >= 0) {
            setDisplayed(current.slice(0, charIndex))
            timeout = setTimeout(() => setCharIndex((c) => c - 1), deletingSpeed)
        } else if (deleting && charIndex < 0) {
            setDeleting(false)
            setCharIndex(0)
            setLineIndex((i) => (i + 1) % lines.length)
        }

        return () => clearTimeout(timeout)
    }, [charIndex, deleting, lineIndex, lines, typingSpeed, deletingSpeed, pause])

    return displayed
}

const Hero = () => {
    const typed = useTypewriter(typingLines)

    const scrollToNext = () => {
        document.querySelector('#education')?.scrollIntoView({ behavior: 'smooth' })
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
    }

    const itemVariants = {
        hidden: { y: 24, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 90, damping: 12 } },
    }

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">

            {/* Subtle grid */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(circle, #6366f1 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}
            />

            {/* Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-purple-300 dark:bg-purple-900 rounded-full filter blur-[120px] opacity-20"
                    animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-blue-300 dark:bg-blue-900 rounded-full filter blur-[120px] opacity-20"
                    animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
                />
            </div>

            {/* Floating stat badges */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
                <motion.div
                    className="absolute top-28 right-[8%] bg-white dark:bg-gray-800 rounded-2xl shadow-xl px-4 py-3 border border-gray-100 dark:border-gray-700"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">5+</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Projects</div>
                </motion.div>

                <motion.div
                    className="absolute top-1/2 right-[6%] bg-white dark:bg-gray-800 rounded-2xl shadow-xl px-4 py-3 border border-gray-100 dark:border-gray-700"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                    <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">99%</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Satisfaction</div>
                </motion.div>

                <motion.div
                    className="absolute bottom-36 left-[7%] bg-white dark:bg-gray-800 rounded-2xl shadow-xl px-4 py-3 border border-gray-100 dark:border-gray-700"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                >
                    <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">2</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Internship Exp.</div>
                </motion.div>
            </div>

            {/* Main content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
                <motion.div variants={containerVariants} initial="hidden" animate="visible">

                    {/* Available badge */}
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                        </span>
                        <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 tracking-wide">
                            Available for freelance work
                        </span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl font-bold mb-5 leading-tight"
                    >
                        <span className="text-gray-800 dark:text-white">Hi, I'm </span>
                        <span
                            style={{
                                backgroundImage: 'linear-gradient(90deg, #2f7eff 0%, #6fb3ff 100%)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent',
                            }}
                        >
                            {personalInfo.name}
                        </span>
                    </motion.h1>

                    {/* Typewriter */}
                    <motion.div
                        variants={itemVariants}
                        className="h-10 mb-6 flex items-center justify-center"
                    >
                        <span className="text-xl md:text-2xl font-semibold font-mono" style={{ color: '#2f7eff' }}>
                            {typed}
                            <span className="inline-block w-0.5 h-6 ml-0.5 align-middle animate-pulse" style={{ backgroundColor: '#2f7eff' }} />
                        </span>
                    </motion.div>

                    {/* Bio */}
                    <motion.p
                        variants={itemVariants}
                        className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
                        style={{ color: '#9fb7d9' }}
                    >
                        {personalInfo.shortBio}
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap gap-3 justify-center mb-10"
                    >
                        <motion.a
                            href="#projects"
                            onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                            className="px-7 py-3.5 text-white font-semibold rounded-full transition-all text-sm"
                            style={{
                                backgroundImage: 'linear-gradient(90deg, #2f7eff 0%, #6fb3ff 100%)',
                                boxShadow: '0 12px 30px rgba(47,126,255,0.18)',
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.96 }}
                        >
                            View My Work
                        </motion.a>

                        <motion.a
                            href="#contact"
                            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                            className="px-7 py-3.5 font-semibold rounded-full hover:bg-blue-50 transition-all text-sm"
                            style={{ border: '2px solid rgba(47,126,255,0.28)', color: '#9fb7d9' }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.96 }}
                        >
                            Contact Me
                        </motion.a>

                        <motion.a
                            href="/resume.pdf"
                            download
                            className="px-7 py-3.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all flex items-center gap-2 text-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.96 }}
                        >
                            <FaDownload className="w-3.5 h-3.5" />
                            Resume
                        </motion.a>
                    </motion.div>

                    {/* Social links */}
                    <motion.div variants={itemVariants} className="flex items-center justify-center gap-4">
                        {[
                            { icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
                            { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                        ].map(({ icon: Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-300 transition-all shadow-sm"
                                whileHover={{ scale: 1.12, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon className="w-4 h-4" />
                            </motion.a>
                        ))}
                    </motion.div>

                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-20 flex flex-col items-center gap-2"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                onClick={scrollToNext}
            >
                <div className="w-6 h-10 rounded-full border-2 border-gray-300 dark:border-gray-600 flex justify-center pt-1.5">
                    <motion.div
                        className="w-1 h-2.5 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"
                        animate={{ y: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                    />
                </div>
                <span className="text-[10px] text-gray-400 dark:text-gray-500 tracking-widest uppercase">Scroll</span>
            </motion.div>

            {/* Decorative dots */}
            <div className="absolute top-1/4 left-10 w-2 h-2 bg-blue-400/30 rounded-full" />
            <div className="absolute top-3/4 right-10 w-2 h-2 bg-purple-400/30 rounded-full" />
            <div className="absolute bottom-1/3 right-20 w-3 h-3 bg-pink-400/20 rounded-full" />
            <div className="absolute top-2/3 left-20 w-3 h-3 bg-indigo-400/20 rounded-full" />
        </div>
    )
}

export default Hero