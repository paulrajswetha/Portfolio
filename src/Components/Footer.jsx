import React from 'react'
import { motion } from 'framer-motion'
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
  FaJava,
  FaDatabase,
} from 'react-icons/fa'
import {
  SiPython,
  SiLeetcode,
} from 'react-icons/si'
import { MdOutlineCode } from 'react-icons/md'

const badges = [
  {
    label: 'Problem Solving',
    icon: MdOutlineCode,
    stars: 2,
    color: '#f4a68a',
    darkBg: '#3d1f15',
    active: false,
  },
  {
    label: 'Java',
    icon: FaJava,
    stars: 4,
    color: '#a8b8c8',
    darkBg: '#1a2430',
    active: false,
  },
  {
    label: 'Python',
    icon: SiPython,
    stars: 1,
    color: '#f4a68a',
    darkBg: '#3d1f15',
    active: false,
  },
  {
    label: 'SQL',
    icon: FaDatabase,
    stars: 3,
    color: '#a8b8c8',
    darkBg: '#1a2430',
    active: true,
    tag: 'Top SQL 50',
  },
]

const HexBadge = ({ badge, index }) => {
  const Icon = badge.icon
  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true }}
    >
      {/* Hexagon */}
      <motion.div
        className="relative"
        whileHover={{ scale: 1.08, y: -3 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {/* Hex shape via clip-path */}
        <div
          className="w-16 h-16 flex items-center justify-center"
          style={{
            clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
            background: `linear-gradient(145deg, ${badge.color}cc, ${badge.color}66)`,
            border: `2px solid ${badge.color}`,
          }}
        >
          <Icon
            style={{ width: 26, height: 26, color: badge.active ? '#2dd4bf' : '#374151' }}
            className="dark:text-gray-200"
          />
        </div>

        {/* Active glow */}
        {badge.active && (
          <motion.div
            className="absolute inset-0 rounded-full opacity-30"
            style={{
              clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
              background: '#2dd4bf',
              filter: 'blur(6px)',
            }}
            animate={{ opacity: [0.2, 0.45, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.div>

      {/* Tag badge (e.g. Top SQL 50) */}
      {badge.tag && (
        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-500 border border-teal-500/30 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 inline-block" />
          {badge.tag}
        </span>
      )}

      {/* Label */}
      <span className="text-[11px] font-semibold text-gray-600 dark:text-gray-400 text-center leading-tight">
        {badge.label}
      </span>

      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className="w-2.5 h-2.5"
            viewBox="0 0 20 20"
            fill={i < badge.stars ? '#f59e0b' : '#d1d5db'}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </motion.div>
  )
}

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaGithub, href: personalInfo.github, label: 'GitHub', hoverColor: '#333' },
    { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn', hoverColor: '#0077b5' },
    { icon: FaTwitter, href: 'https://twitter.com/alexchen', label: 'Twitter', hoverColor: '#1da1f2' },
    { icon: FaDev, href: 'https://dev.to/alexchen', label: 'Dev.to', hoverColor: '#0a0a0a' },
  ]

  const quickLinks = ['Home', 'Education', 'Skills', 'Projects', 'Certificates']

  return (
    <footer id="contact" className="relative bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 to-purple-500/3 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-14">

        {/* HackerRank Badges Section */}
        <motion.div
          className="mb-12 p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-6">
            <SiLeetcode className="w-4 h-4 text-orange-400" />
            <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-widest">
              HackerRank Badges
            </h4>
          </div>
          <div className="flex flex-wrap gap-8 justify-center sm:justify-start">
            {badges.map((badge, i) => (
              <HexBadge key={badge.label} badge={badge} index={i} />
            ))}
          </div>
        </motion.div>

        {/* Main footer grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Brand + Contact */}
          <div>
            <motion.h3 className="text-xl font-bold mb-3" whileHover={{ scale: 1.03 }}>
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Port
              </span>
              <span className="text-gray-900 dark:text-white">Folio</span>
            </motion.h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
              {personalInfo.shortBio}
            </p>
            <div className="space-y-2.5">
              {[
                { icon: FaEnvelope, value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: 'text-blue-500' },
                { icon: FaPhone, value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: 'text-purple-500' },
                { icon: FaMapMarkerAlt, value: personalInfo.location, href: null, color: 'text-pink-500' },
              ].map(({ icon: Icon, value, href, color }) => (
                <motion.div
                  key={value}
                  className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
                  whileHover={{ x: 4 }}
                >
                  <Icon className={`w-3.5 h-3.5 ${color} flex-shrink-0`} />
                  {href ? (
                    <a href={href} className="hover:text-blue-500 transition-colors truncate">{value}</a>
                  ) : (
                    <span>{value}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5 group"
                    whileHover={{ x: 6 }}
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600 group-hover:bg-blue-500 transition-colors" />
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Newsletter */}
          <div>
            <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-widest mb-4">
              Connect With Me
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-white transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2, backgroundColor: social.hoverColor }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>

            <h5 className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wider">
              Newsletter
            </h5>
            <div className="flex rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2.5 text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 placeholder-gray-400 focus:outline-none"
              />
              <motion.button
                className="px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 whitespace-nowrap"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          className="pt-8 border-t border-gray-100 dark:border-gray-800 text-center text-xs text-gray-400 dark:text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="flex items-center justify-center flex-wrap gap-1">
            © {currentYear} {personalInfo.name}. All rights reserved.
            <span className="flex items-center gap-1">
              · Made with
              <FaHeart className="w-3 h-3 text-red-400 animate-pulse" />
              using
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold">
                React & Tailwind
              </span>
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer