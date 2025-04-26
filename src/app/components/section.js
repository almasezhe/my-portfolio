'use client';

import { motion } from 'framer-motion';

export default function Section({ id, children, bg = 'white' }) {
  return (
    <section id={id} className={`py-20 bg-${bg}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-4xl mx-auto px-6"
      >
        {children}
      </motion.div>
    </section>
  );
}