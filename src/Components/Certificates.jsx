import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { certificates } from '../data/constants'
import { FaExternalLinkAlt, FaShieldAlt } from 'react-icons/fa'
import { HiOutlineBadgeCheck } from 'react-icons/hi'

const orgColors = {
    'Amazon Web Services': { from: '#FF9900', to: '#FF6B00', light: 'rgba(255,153,0,0.08)', dot: '#FF9900' },
    'Meta': { from: '#0082FB', to: '#0064D2', light: 'rgba(0,130,251,0.08)', dot: '#0082FB' },
    'Stanford Online': { from: '#8C1515', to: '#C74B50', light: 'rgba(140,21,21,0.08)', dot: '#8C1515' },
    'Google Cloud': { from: '#4285F4', to: '#34A853', light: 'rgba(66,133,244,0.08)', dot: '#4285F4' },
    'CNCF': { from: '#326CE5', to: '#6496FF', light: 'rgba(50,108,229,0.08)', dot: '#326CE5' },
    'MongoDB': { from: '#00ED64', to: '#00A339', light: 'rgba(0,237,100,0.08)', dot: '#00A339' },
}

const defaultColor = { from: '#6366f1', to: '#8b5cf6', light: 'rgba(99,102,241,0.08)', dot: '#6366f1' }

const Certificates = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section id="certificates" className="section-container" ref={ref}>

            {/* Header */}
            <motion.div
                className="mb-14"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <h2 className="section-title !mb-2">Certifications</h2>
            </motion.div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-4">
                {certificates.map((cert, index) => {
                    const color = orgColors[cert.organization] || defaultColor
                    const isExpired = cert.expiryDate
                        ? new Date(cert.expiryDate) < new Date()
                        : false

                    return (
                        <motion.div
                            key={cert.id}
                            className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 transition-all duration-300"
                            style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.45, delay: index * 0.07 }}
                            whileHover={{
                                y: -4,
                                boxShadow: `0 16px 40px ${color.dot}22`,
                                borderColor: `${color.dot}44`,
                            }}
                        >
                            {/* Left color accent bar */}
                            <div
                                className="absolute left-0 top-0 bottom-0 w-[3px]"
                                style={{ background: `linear-gradient(to bottom, ${color.from}, ${color.to})` }}
                            />

                            <div className="pl-6 pr-5 py-5">
                                {/* Top row: org badge + status */}
                                <div className="flex items-center justify-between mb-4">
                                    <span
                                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
                                        style={{ background: color.light, color: color.dot }}
                                    >
                                        <span
                                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                            style={{ background: color.dot }}
                                        />
                                        {cert.organization}
                                    </span>

                                    {cert.expiryDate ? (
                                        <span
                                            className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${isExpired
                                                    ? 'bg-red-50 text-red-400 dark:bg-red-900/20'
                                                    : 'bg-green-50 text-green-500 dark:bg-green-900/20'
                                                }`}
                                        >
                                            {isExpired ? 'Expired' : 'Active'}
                                        </span>
                                    ) : (
                                        <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-400 dark:bg-blue-900/20">
                                            Lifetime
                                        </span>
                                    )}
                                </div>

                                {/* Cert name */}
                                <h3 className="text-[15px] font-bold text-gray-900 dark:text-white leading-snug mb-4">
                                    {cert.name}
                                </h3>

                                {/* Dates row */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span>Issued {cert.issueDate}</span>
                                    </div>
                                    {cert.expiryDate && (
                                        <>
                                            <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                                            <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>Expires {cert.expiryDate}</span>
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-gray-100 dark:bg-gray-800 mb-4" />

                                {/* Bottom row: credential ID + verify link */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-1.5">
                                        <FaShieldAlt className="w-3 h-3 text-slate-500 dark:text-slate-300" />
                                        <span className="font-mono text-[11px] text-slate-500 dark:text-slate-300 tracking-wide">
                                            {cert.credentialId}
                                        </span>
                                    </div>

                                    <motion.a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200"
                                        style={{ background: color.light, color: color.dot }}
                                        whileHover={{
                                            scale: 1.04,
                                            background: `linear-gradient(135deg, ${color.from}, ${color.to})`,
                                            color: '#ffffff',
                                        }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        <HiOutlineBadgeCheck className="w-3.5 h-3.5" />
                                        <span>Verify</span>
                                        <FaExternalLinkAlt className="w-2 h-2 opacity-70" />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}

export default Certificates