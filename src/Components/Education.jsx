import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { education } from '../data/constants'
import { HiAcademicCap } from 'react-icons/hi'
import { FaCalendar, FaMapMarkerAlt } from 'react-icons/fa'


const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="section-container" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>

        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Timeline Dot */}
            <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-5 h-5">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-ping opacity-25"></div>
              <div className="relative w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-900"></div>
            </div>

            {/* Content */}
            <div className={`w-full md:w-5/12 ${
              index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
            } pl-16 md:pl-0`}>
              <motion.div
                className="group relative p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                whileHover={{ scale: 1.02, y: -5 }}
              >
               
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white mr-4">
                    <HiAcademicCap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1">
                      <FaCalendar className="w-4 h-4 mr-1" />
                      <span>{edu.startYear} - {edu.endYear}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <FaMapMarkerAlt className="w-4 h-4 mr-1" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 dark:text-white text-gray-900">{edu.institution}</h3>
                <h4 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-2">
                  {edu.degree} in {edu.field}
                </h4>
                <p className="dark:text-gray-400 text-gray-600">{edu.description}</p>

                {/* Achievement Badge */}
                <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm">
                  <span>{edu.gpa}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Education