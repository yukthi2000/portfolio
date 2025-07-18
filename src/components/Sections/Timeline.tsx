// src/components/Sections/Timeline.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { timeline } from '../../data/portfolio';

const Timeline: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <Briefcase size={20} />;
      case 'education':
        return <GraduationCap size={20} />;
      case 'achievement':
        return <Award size={20} />;
      default:
        return <Briefcase size={20} />;
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'bg-blue-500';
      case 'education':
        return 'bg-green-500';
      case 'achievement':
        return 'bg-purple-500';
      default:
        return 'bg-blue-500';
    }
  };

  return (
    <section id="timeline" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            My Journey
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A timeline of my academic and professional journey
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline icon */}
                <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 ${getIconColor(item.type)} rounded-full flex items-center justify-center text-white z-10`}>
                  {getIcon(item.type)}
                </div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                        {item.period}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        item.type === 'work' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400' :
                        item.type === 'education' ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400' :
                        'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400'
                      }`}>
                        {item.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <h4 className="text-lg text-primary-600 dark:text-primary-400 mb-3">
                      {item.organization}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block md:w-2/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;