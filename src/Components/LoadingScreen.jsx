import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const LoadingScreen = ({ onComplete = () => { } }) => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer)
                    return 100
                }
                return prev + 10
            })
        }, 100)

        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        if (progress >= 100) {
            // allow exit animation to play before unmount
            const t = setTimeout(() => onComplete(), 600)
            return () => clearTimeout(t)
        }
    }, [progress, onComplete])

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white to-slate-100"
        >
            <div className="text-center px-6">
                <motion.h1
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl md:text-7xl mb-8 font-extrabold text-slate-900"
                >
                    PORTFOLIO
                </motion.h1>

                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '300px' }}
                    transition={{ duration: 2 }}
                    className="relative h-2 bg-gray-800 rounded-full overflow-hidden mx-auto mb-4"
                >
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-cyan-300"
                        style={{ width: `${progress}%` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-slate-700 text-lg"
                >
                    Initializing System... {progress}%
                </motion.p>
            </div>
        </motion.div>
    )
}

export default LoadingScreen
