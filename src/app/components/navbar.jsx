'use client';

import { motion } from 'framer-motion';
const links = [
  { id: 'home', label: 'Home' },
  { id: 'resume', label: 'Resume' },
  { id: 'extracurricular', label: 'Activities' },
  { id: 'publications', label: 'Research' },
  { id: 'skills', label: 'Skills' },
  { id: 'links', label: 'Contact' },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="font-semibold text-gray-900"
          >
            Almas Asset
          </motion.span>
          <div className="flex gap-6">
            {links.map((l) => (
              <motion.a
                key={l.id}
                href={`#${l.id}`}
                whileHover={{ scale: 1.05 }}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors relative px-2 py-1"
              >
                {l.label}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 origin-left scale-x-0"
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}