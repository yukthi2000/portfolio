import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModelingImage {
  id: number;
  src: string;
  alt: string;
  category?: string;
}

const ModelingGallery: React.FC = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<ModelingImage | null>(null);

  // Shuffle function to randomize array
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // All images from the modeling/me folder
  const imageFiles = [
    '482215604_1181449967324211_8086884874254002373_n.jpg',
    '483546521_1182273173908557_575021216575347793_n.jpg',
    '483595820_1181449803990894_8856190643085298434_n.jpg',
    'DSC07376.jpg',
    'DSC07378.jpg',
    'DSC07384.jpg',
    'IMG-20241013-WA0036.jpg',
    'IMG-20241013-WA0075.jpg',
    'IMG_4672.jpg',
    'KguqfbD8_4x.jpg',
    'photo_2024-06-15_18-02-43.jpg',
    'photo_2024-06-16_00-42-55.jpg',
    'photo_2024-06-16_00-43-04.jpg',
    'photo_2025-01-10_13-31-00.jpg',
    'photo_2025-02-20_11-35-41.jpg',
    'photo_2025-02-20_11-35-51.jpg',
    'photo_2025-02-20_11-36-10.jpg',
    'Untitled-52.jpg',
    'Untitled-75.jpg',
  ];

  // Create image objects and shuffle them
  const allImages: ModelingImage[] = imageFiles.map((filename, index) => ({
    id: index + 1,
    src: `/assets/modeling/me/${filename}`,
    alt: `Modeling photo ${index + 1}`,
    category: 'Portfolio'
  }));

  // Shuffle images for random display order
  const [images] = useState<ModelingImage[]>(() => shuffleArray(allImages));

  const handleBackToPortfolio = () => {
    navigate('/');
  };

  return (
    <>
      <Helmet>
        <title>Me | Yukthi Hettiarachchi</title>
        <meta 
          name="description" 
          content="Yukthi Hettiarachchi's personal photo gallery - Fashion, editorial, and portrait photography." 
        />
        <link rel="canonical" href="https://yukthihettiarachchi.onrender.com/me" />
      </Helmet>

      <div className="dark">
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          {/* Header with Back Button */}
          <header className="fixed top-0 left-0 right-0 z-40 bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <motion.button
                  onClick={handleBackToPortfolio}
                  className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-gray-800"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span className="font-medium">Back to Professional Portfolio</span>
                </motion.button>
                
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Me
                </h1>
              </div>
            </div>
          </header>

          {/* Main Gallery Content */}
          <main className="container mx-auto px-4 pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Yukthi Hettiarachchi
            </h2>
            <p className="text-xl text-gray-400">
              Personal Gallery
            </p>
          </motion.div>

          {/* Image Gallery Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
          >
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                onClick={() => setSelectedImage(image)}
                whileHover={{ scale: 1.03 }}
              >
                <div className="aspect-[3/4] relative bg-gray-700">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      {image.category && (
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                          {image.category}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State if no images */}
          {images.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-400">
                Gallery images coming soon...
              </p>
            </div>
          )}
        </main>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[90vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="border-t border-gray-700 bg-gray-900 py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400">
              © 2025 Yukthi Hettiarachchi. All rights reserved.
            </p>
          </div>
        </footer>
        </div>
      </div>
    </>
  );
};

export default ModelingGallery;
