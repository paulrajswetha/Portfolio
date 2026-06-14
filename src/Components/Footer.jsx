import React from 'react'
import { personalInfo } from '../data/constants'
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaDev,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaHeart,
} from 'react-icons/fa'
import {
    SiLeetcode,
    SiHackerrank
} from 'react-icons/si'
import { useInView } from 'framer-motion' // Make sure to import this if using framer-motion

const socialLinks = [
    {
        icon: FaGithub,
        href: personalInfo.github,
        label: 'GitHub',
        hoverColor: '#333'
    },
    {
        icon: FaLinkedin,
        href: personalInfo.linkedin,
        label: 'LinkedIn',
        hoverColor: '#0077b5'
    },
    {
        icon: SiLeetcode,
        href: personalInfo.leetcode,
        label: 'LeetCode',
        hoverColor: '#FFA116'
    },
    {
        icon: SiHackerrank,
        href: personalInfo.hackerrank,
        label: 'HackerRank',
        hoverColor: '#00EA64'
    }
]

const Footer = () => {
    const ref = React.useRef(null)
    const inView = useInView(ref, { once: true, amount: 0.2 })

    return (
        <footer id="contact" className="section-container mt-2" ref={ref}>
            {/* Contact Heading with Animation */}
            <div
                className="mb-14"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <h2 className="section-title !mb-2">Contact Me</h2>
            </div>

            <div className="max-w-6xl mx-auto py-6 px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-6 md:gap-9">
                    {/* Left Column - Personal Info */}
                    <div className="space-y-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            {personalInfo.name}
                        </h3>
                        <p className="text-gray-300 leading-relaxed max-w-md">
                            {personalInfo.shortBio}
                        </p>
                        <div className="space-y-3 pt-2">
                            <div className="flex items-center gap-3 text-gray-300">
                                <FaEnvelope className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                <a 
                                    href={`mailto:${personalInfo.email}`} 
                                    className="hover:text-cyan-400 transition-colors duration-200 break-all"
                                >
                                    {personalInfo.email}
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <FaPhone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                <span>{personalInfo.phone}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <FaMapMarkerAlt className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                <span>{personalInfo.location}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Social Connect */}
                    <div className="space-y-4 md:text-right md:flex md:flex-col md:items-end">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Let's Connect
                        </h3>
                        <div className="flex gap-4 md:justify-end flex-wrap">
                            {socialLinks.map((s) => (
                                <a 
                                    key={s.label} 
                                    href={s.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label={s.label}
                                    className="group w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
                                >
                                    <s.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                                </a>
                            ))}
                        </div>
                        <div className="text-gray-400 pt-4 md:pt-6">
                            Built with <FaHeart className="inline w-4 h-4 text-rose-500 mx-1 animate-pulse" /> by {personalInfo.name}
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-gray-800 mt-10 pt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer