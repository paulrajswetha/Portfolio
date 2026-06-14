import React from 'react'
import { motion } from 'framer-motion'

const BackgroundDesign = () => {
    return (
        <div
            className="fixed inset-0 -z-10 overflow-hidden"
            style={{ background: '#04112b' }}
        >
            {/* Main gradient blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Top-right purple blob */}
                <motion.div
                    className="absolute -top-60 -right-60 w-[600px] h-[600px] bg-[#0b2a4a] rounded-full filter blur-[140px] opacity-32"
                    animate={{
                        x: [0, 60, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Bottom-left blue blob */}
                <motion.div
                    className="absolute -bottom-60 -left-60 w-[600px] h-[600px] bg-[#083049] rounded-full filter blur-[140px] opacity-28"
                    animate={{
                        x: [0, -50, 0],
                        y: [0, 60, 0],
                        scale: [1, 1.15, 1]
                    }}
                    transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />

                {/* Center accent blob */}
                <motion.div
                    className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#062a48] rounded-full filter blur-[100px] opacity-18"
                    animate={{
                        x: [0, 30, -30, 0],
                        y: [0, -30, 30, 0],
                        scale: [1, 0.9, 1.1, 1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                />

                {/* Bottom-right accent blob */}
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#07364f] rounded-full filter blur-[120px] opacity-14"
                    animate={{
                        x: [0, -40, 40, 0],
                        y: [0, 40, -40, 0],
                        scale: [1, 1.05, 0.95, 1]
                    }}
                    transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                />
            </div>

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(99, 102, 241, 0.1) 25%, rgba(99, 102, 241, 0.1) 26%, transparent 27%, transparent 74%, rgba(99, 102, 241, 0.1) 75%, rgba(99, 102, 241, 0.1) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(99, 102, 241, 0.1) 25%, rgba(99, 102, 241, 0.1) 26%, transparent 27%, transparent 74%, rgba(99, 102, 241, 0.1) 75%, rgba(99, 102, 241, 0.1) 76%, transparent 77%, transparent)
          `,
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-[#1b6fff] opacity-36"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, Math.random() * 20 - 10, 0],
                            opacity: [0.2, 0.8, 0.2],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: i * 0.2,
                        }}
                    />
                ))}
            </div>

            {/* Radial gradient overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(ellipse 80% 80% at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.05) 100%)`,
                }}
            />

            {/* Top border accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent dark:via-indigo-700 opacity-50" />

            {/* Decorative corner elements */}
            <motion.div
                className="absolute top-10 left-10 w-20 h-20 border border-indigo-200 dark:border-indigo-800 rounded-lg opacity-20"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
                className="absolute bottom-20 right-20 w-32 h-32 border border-purple-200 dark:border-purple-800 rounded-full opacity-10"
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            />
        </div>
    )
}

export default BackgroundDesign
