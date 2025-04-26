'use client';

import { motion } from 'framer-motion';

export default function TimelineItem({ 
  title, 
  subtitle, 
  period, 
  bullets, 
  icon = '💼',
  iconBg = 'bg-blue-50',
  iconHoverBg = 'group-hover:bg-blue-100',
  customBulletStyle = 'before:bg-blue-200'
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="relative pl-12 pb-8 group"
    >
      {/* Иконка с возможностью кастомизации фона */}
      <div className={`absolute left-0 top-1 flex items-center justify-center w-8 h-8 ${iconBg} rounded-full transition-colors duration-300 ${iconHoverBg}`}>
        <span className="text-lg">{icon}</span>
      </div>
      
      {/* Линия таймлайна */}
      <div className="absolute left-4 top-10 bottom-0 w-0.5 bg-gradient-to-b from-blue-100 to-transparent" />

      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-medium text-gray-900">{title}</h3>
        {subtitle && <p className="text-gray-600 font-light">{subtitle}</p>}
        <p className="text-sm text-blue-600 font-medium mt-1">{period}</p>
        
        {/* Список с кастомными буллетами */}
        <ul className="mt-3 space-y-2 text-gray-700">
          {bullets.map((b, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full ${customBulletStyle}`}
            >
              {b}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}