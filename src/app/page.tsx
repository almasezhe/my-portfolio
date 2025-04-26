'use client';
import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiLinkedin, FiGlobe } from 'react-icons/fi';
import {
  objective,
  experience,
  education,
  extracurricular,
  publications,
  awards,
  skillsCategories,
  links,
} from '@/app/data/resume';
import Navbar from "@/app/components/navbar";
import Section from "@/app/components/section";
import TimelineItem from "@/app/components/timelineitem";


export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const animateGradient = () => {
      document.documentElement.style.setProperty(
        '--gradient-pos',
        `${Math.random() * 100}%`
      );
    };
    const interval = setInterval(animateGradient, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-900 relative font-inter">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 origin-left z-50"
        style={{ scaleX }}
      />

      <Navbar />

      {/* Home Section */}
      <Section id="home" bg="gray-50">
        <div className="flex flex-col items-center text-center space-y-8 px-4">
          <motion.div 
            className="relative group"
            whileHover="hover"
            initial="initial"
            animate="animate"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-purple-100/50 opacity-50 rounded-full blur-2xl transition-opacity duration-500 group-hover:opacity-70" 
                 style={{ backgroundPosition: 'var(--gradient-pos, 50%) 50%' }} />
            <motion.img
              src="/profile.jpg"
              alt="profile"
              className="w-48 h-48 rounded-full object-cover shadow-lg z-10 relative border-4 border-white/50 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </motion.div>
          
          <div className="space-y-4">
            <h1 className="text-5xl font-playfair font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Almas Asset
            </h1>
            <motion.p 
              className="mt-2 max-w-2xl text-gray-600 text-lg leading-relaxed font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {objective}
            </motion.p>
          </div>
        </div>
      </Section>
  
        {/* Education */}
        <Section id="resume" bg="white">
        <div className="space-y-12">
        <h3 className="text-2xl font-semibold mt-12 mb-6">Education</h3>
        <div className="border-l-2 border-blue-500">
          {education.map((edu, idx) => (
            <TimelineItem
              key={idx}
              title={edu.school}
              subtitle=""
              period={edu.year}
              bullets={[edu.note]}
            />
          ))}
        </div>
        </div>
        </Section>
      {/* Experience Section */}
      <Section id="resume" bg="white">
        <div className="space-y-12">
          <h2 className="text-3xl font-playfair font-semibold text-gray-900 mb-8">Professional Journey</h2>
          {experience.map((exp, idx) => (
            <TimelineItem
              key={idx}
              title={exp.title}
              subtitle={exp.role}
              period={exp.period}
              bullets={exp.bullets}
              icon={idx === 0 ? '🚀' : '💼'}
            />
          ))}
        </div>
      </Section>

          
      {/* EXTRACURRICULAR */}
      <Section id="extracurricular">
        <h2 className="text-3xl font-bold mb-8 text-center">Extracurricular Activities</h2>
        <div className="border-l-2 border-green-500">
          {extracurricular.map((item, idx) => (
            <TimelineItem
              key={idx}
              title={item.title}
              subtitle={item.role}
              period={item.period}
              bullets={item.bullets}
            />
          ))}
        </div>
      </Section>

           {/* PUBLICATIONS */}
           <Section id="publications" bg="gray-50">
        <h2 className="text-3xl font-bold mb-6 text-center">Publications</h2>
        <ul className="space-y-4">
          {publications.map((pub, idx) => (
            <li key={idx}>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 hover:underline"
              >
                {pub.title}
              </a>
              <p className="text-gray-700 text-sm">{pub.journal}</p>
            </li>
          ))}
        </ul>
      </Section>
      
      {/* Awards Section */}
      <Section id="awards" bg="gray-50">
        <div className="space-y-8">
          <h2 className="text-3xl font-playfair font-semibold text-gray-900">Honors & Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((a, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <span className="text-blue-600">🏆</span>
                  </div>
                  <div className="text-blue-600 text-sm font-medium">{a.year}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{a.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{a.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

    {/* Skills Section */}
<Section id="skills" bg="white">
  <div className="space-y-12">
    <h2 className="text-3xl font-playfair font-semibold text-gray-900">Technical Arsenal</h2>
    
    {Object.entries(skillsCategories).map(([category, items], catIdx) => (
      <div key={category} className="space-y-5">
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: catIdx * 0.1 }}
          className="text-xl font-playfair font-medium text-gray-800 border-l-4 border-blue-200 pl-3"
        >
          {category}
        </motion.h3>
        
        <div className="flex flex-wrap gap-3">
          {items.map((skill, idx) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: catIdx * 0.2 + idx * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 text-sm shadow-sm hover:border-blue-300 hover:text-blue-700 transition-all flex items-center gap-2"
            >
              <span className="text-blue-500">▹</span>
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    ))}
  </div>
</Section>

      {/* Links Section */}
      <Section id="links" bg="gray-50">
        <div className="flex flex-col items-center space-y-8">
          <h2 className="text-3xl font-playfair font-semibold text-gray-900">Let's Connect</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(links).map(([name, url]) => (
              <motion.a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-blue-300 flex items-center gap-2 transition-all hover:shadow-md"
              >
                {name === 'linkedin' && <FiLinkedin className="text-blue-600 w-5 h-5" />}
                {name === 'github' && <FiGithub className="text-gray-800 w-5 h-5" />}
                {name === 'portfolio' && <FiGlobe className="text-purple-600 w-5 h-5" />}
                <span className="font-medium capitalize">{name}</span>
                <FiArrowUpRight className="text-gray-400" />
              </motion.a>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}