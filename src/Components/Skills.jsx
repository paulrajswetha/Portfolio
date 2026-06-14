import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skills } from '../data/constants'

const categoryConfig = [
  {
    name: 'Frontend',
    data: skills.frontend,
    gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    iconColor: '#3b82f6',
    lightBg: 'rgba(59,130,246,0.07)',
    border: 'rgba(59,130,246,0.18)',
    hoverBorder: '#3b82f6',
  },
  {
    name: 'Backend',
    data: skills.backend,
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    iconColor: '#10b981',
    lightBg: 'rgba(16,185,129,0.07)',
    border: 'rgba(16,185,129,0.18)',
    hoverBorder: '#10b981',
  },
  {
    name: 'Databases',
    data: skills.databases,
    gradient: 'linear-gradient(135deg, #f59e0b, #f97316)',
    iconColor: '#f59e0b',
    lightBg: 'rgba(245,158,11,0.07)',
    border: 'rgba(245,158,11,0.18)',
    hoverBorder: '#f59e0b',
  },
  {
    name: 'Tools & Others',
    data: skills.tools,
    gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    iconColor: '#8b5cf6',
    lightBg: 'rgba(139,92,246,0.07)',
    border: 'rgba(139,92,246,0.18)',
    hoverBorder: '#8b5cf6',
  },
]

const SkillPill = ({ skill, iconColor, lightBg, border, hoverBorder, delay }) => {
  return (
    <motion.div
      className="flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 cursor-default"
      style={{
        background: lightBg,
        borderColor: border,
      }}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay }}
      whileHover={{
        scale: 1.04,
        borderColor: hoverBorder,
        boxShadow: `0 4px 18px ${hoverBorder}22`,
      }}
    >
      <skill.icon
        style={{ color: iconColor, width: 22, height: 22, flexShrink: 0 }}
      />
      <span className="text-sm font-medium text-gray-800 dark:text-gray-100 whitespace-nowrap">
        {skill.name}
      </span>
    </motion.div>
  )
}

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="section-container" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Tech Stack
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {categoryConfig.map((category, catIdx) => (
          <motion.div
            key={category.name}
            className="relative rounded-2xl p-6 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 overflow-hidden"
            style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            whileHover={{ boxShadow: `0 8px 32px ${category.iconColor}1a`, y: -3 }}
          >
            {/* Top accent bar */}
            <div
              className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
              style={{ background: category.gradient }}
            />

            {/* Category heading */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: category.gradient }}
              >
                <span className="text-white text-xs font-bold">
                  {category.name.charAt(0)}
                </span>
              </div>
              <h3
                className="text-lg font-bold bg-clip-text text-transparent"
                style={{ backgroundImage: category.gradient }}
              >
                {category.name}
              </h3>
            </div>

            {/* Skill pills */}
            <div className="flex flex-wrap gap-2">
              {category.data.map((skill, skillIdx) => (
                <SkillPill
                  key={skill.name}
                  skill={skill}
                  iconColor={category.iconColor}
                  lightBg={category.lightBg}
                  border={category.border}
                  hoverBorder={category.hoverBorder}
                  delay={catIdx * 0.1 + skillIdx * 0.05}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Skills