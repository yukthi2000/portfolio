// src/components/Sections/About.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Mail, Phone } from 'lucide-react';
import { personalInfo, skills } from '../../data/portfolio';

const About: React.FC = () => {
  const skillCategories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    tools: skills.filter(skill => skill.category === 'tools'),
    other: skills.filter(skill => skill.category === 'other'),
  };

  const SkillBar: React.FC<{ skill: typeof skills[0] }> = ({ skill }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="mb-4"
    >
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium">
          {skill.name}
        </span>
        <span className="text-gray-500 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-primary-600 h-2 rounded-full"
        />
      </div>
    </motion.div>
  );

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
                alt={personalInfo.name}
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">👋</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              {personalInfo.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              {personalInfo.bio}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Mail size={20} className="mr-3 text-primary-600" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Phone size={20} className="mr-3 text-primary-600" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin size={20} className="mr-3 text-primary-600" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <motion.a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors shadow-lg"
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-12 text-center">
            Skills & Technologies
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skillCategories).map(([category, categorySkills]) => (
              <div key={category} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 capitalize">
                  {category}
                </h4>
                {categorySkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;