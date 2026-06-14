import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MdOutlineCode } from 'react-icons/md'
import { FaJava, FaDatabase } from 'react-icons/fa'
import { SiPython } from 'react-icons/si'
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

const badges = [
  {
    label: 'Problem Solving',
    icon: MdOutlineCode,
    stars: 4,
    color: '#38bdf8',
    active: true,
  },
  {
    label: 'Java',
    icon: FaJava,
    stars: 4,
    color: '#f97316',
    active: false,
  },
  {
    label: 'Python',
    icon: SiPython,
    stars: 3,
    color: '#34d399',
    active: false,
  },
  {
    label: 'SQL',
    icon: FaDatabase,
    stars: 4,
    color: '#facc15',
    active: false,
  },
]

const HexBadge = ({ badge, index }) => {
  const Icon = badge.icon
  return (
    <motion.div
      className="flex flex-col items-center gap-3 min-w-[135px]"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="relative"
        whileHover={{ scale: 1.08, y: -3 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div
          className="w-20 h-20 flex items-center justify-center rounded-[18px]"
          style={{
            background: `linear-gradient(145deg, ${badge.color}15, ${badge.color}22)`,
            border: `2px solid ${badge.color}`,
          }}
        >
          <Icon
            style={{ width: 32, height: 32, color: badge.active ? '#38bdf8' : '#94a3b8' }}
          />
        </div>
      </motion.div>
      <span className="text-xs font-semibold text-slate-200 text-center leading-tight">{badge.label}</span>
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`block w-2.5 h-2.5 rounded-full ${i < badge.stars ? 'bg-amber-400' : 'bg-slate-600'}`}
          />
        ))}
      </div>
    </motion.div>
  )
}

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

      <div className="max-w-6xl mx-auto mb-10 rounded-3xl border border-slate-700/70 bg-slate-950/80 p-6">
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-[0.3em] text-sky-400/80 font-semibold">Badge Highlights</p>
          <h3 className="text-2xl font-semibold text-white mt-3">Most valuable strengths, shown first</h3>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {badges.map((badge, index) => (
            <HexBadge key={badge.label} badge={badge} index={index} />
          ))}
        </div>
      </div>

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