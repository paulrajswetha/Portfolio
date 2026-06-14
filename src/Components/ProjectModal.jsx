import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaTimes, FaExternalLinkAlt, FaCalendar, FaUser } from 'react-icons/fa'

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                style={{ backgroundColor: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(6px)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="relative bg-white dark:bg-gray-900 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-100 dark:border-gray-700"
                    style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.3)' }}
                    initial={{ scale: 0.92, opacity: 0, y: 30 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.92, opacity: 0, y: 30 }}
                    transition={{ type: 'spring', damping: 28, stiffness: 320 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                        <h2
                            className="text-xl font-bold bg-clip-text text-transparent"
                            style={{ backgroundImage: 'linear-gradient(to right, #3b82f6, #9333ea)' }}
                        >
                            {project.name}
                        </h2>
                        <motion.button
                            onClick={onClose}
                            className="p-2 rounded-full text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Close modal"
                        >
                            <FaTimes className="w-4 h-4" />
                        </motion.button>
                    </div>

                    {/* Body */}
                    <div className="px-6 py-6 space-y-6">
                        {/* Banner */}
                        <div
                            className="h-44 rounded-xl relative overflow-hidden flex items-center justify-center"
                            style={{
                                backgroundImage: project.image
                                    ? `url(${project.image})`
                                    : 'linear-gradient(135deg, #3b82f6 0%, #9333ea 100%)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="absolute inset-0 bg-black/40" />
                            <span className="relative text-white text-lg font-semibold tracking-wide opacity-90">
                                {project.name}
                            </span>
                        </div>

                        {/* Description */}
                        <div>
                            <h3
                                className="text-sm font-semibold uppercase tracking-widest mb-2 bg-clip-text text-transparent"
                                style={{ backgroundImage: 'linear-gradient(to right, #3b82f6, #9333ea)' }}
                            >
                                Description
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                                {project.fullDesc}
                            </p>
                        </div>

                        {/* Tech Tags */}
                        <div>
                            <h3
                                className="text-sm font-semibold uppercase tracking-widest mb-3 bg-clip-text text-transparent"
                                style={{ backgroundImage: 'linear-gradient(to right, #3b82f6, #9333ea)' }}
                            >
                                Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techTags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-white text-xs font-medium rounded-full"
                                        style={{ backgroundImage: 'linear-gradient(to right, #3b82f6, #9333ea)' }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Meta */}
                        <div className="grid grid-cols-2 gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                                <FaCalendar className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                                <span>Completed: 2024</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                                <FaUser className="w-3.5 h-3.5 text-purple-500 flex-shrink-0" />
                                <span>Role: Lead Developer</span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3">
                            <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 dark:bg-gray-700 text-white text-sm font-medium rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <FaGithub className="w-4 h-4" />
                                <span>View Code</span>
                            </motion.a>
                            <motion.a
                                href={project.liveDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-white text-sm font-medium rounded-xl transition-colors"
                                style={{ backgroundImage: 'linear-gradient(to right, #3b82f6, #9333ea)' }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <FaExternalLinkAlt className="w-3.5 h-3.5" />
                                <span>Live Demo</span>
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default ProjectModal