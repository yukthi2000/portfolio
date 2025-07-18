// src/components/Sections/Publications.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, Calendar, Users } from 'lucide-react';
import { publications, articles } from '../../data/portfolio';

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Publications & Articles
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Research publications and technical articles I've authored
          </p>
        </motion.div>

        {/* Research Publications */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-800 dark:text-white mb-8"
          >
            Research Publications
          </motion.h3>

          <div className="space-y-6">
            {publications.map((publication, index) => (
              <motion.div
                key={publication.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {publication.title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {publication.year}
                      </div>
                      <div className="flex items-center">
                        <FileText size={16} className="mr-1" />
                        {publication.venue}
                      </div>
                      <div className="flex items-center">
                        <Users size={16} className="mr-1" />
                        {publication.authors.join(', ')}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {publication.abstract}
                </p>

                <div className="flex space-x-4">
                  {publication.pdfUrl && (
                    <motion.a
                      href={publication.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                    >
                      <FileText size={16} className="mr-1" />
                      PDF
                    </motion.a>
                  )}
                  {publication.doiUrl && (
                    <motion.a
                      href={publication.doiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      DOI
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Blog Articles */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-800 dark:text-white mb-8"
          >
            Technical Articles
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-all"
              >
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    {article.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>{new Date(article.publishedDate).toLocaleDateString()}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <motion.a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                  >
                    Read Article
                    <ExternalLink size={16} className="ml-1" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;