import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import ScrollToTop from './components/UI/ScrollToTop';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Projects from './components/Sections/Projects';
import Publications from './components/Sections/Publications';
import Timeline from './components/Sections/Timeline';
import Testimonials from './components/Sections/Testimonials';
import Contact from './components/Sections/Contact';
import ScrollProgress from './components/UI/ScrollProgress';
import ModelingGallery from './pages/ModelingGallery';
import './scrollbar.css';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          {/* Main Professional Portfolio Route */}
          <Route path="/" element={
            <>
              <Helmet>
                <title>Yukthi Hettiarachchi | Full Stack Developer Portfolio</title>
                <meta 
                  name="description" 
                  content="Full Stack Developer specializing in React, TypeScript, and modern web technologies. View my projects, publications, and professional experience." 
                />
                <meta 
                  name="keywords" 
                  content="Yukthi Hettiarachchi, Full Stack Developer, React Developer, TypeScript, Web Developer, Portfolio, Software Engineer, JavaScript, Node.js" 
                />
                <link rel="canonical" href="https://yukthihettiarachchi.onrender.com/" />
                
                {/* Open Graph */}
                <meta property="og:title" content="Yukthi Hettiarachchi | Full Stack Developer Portfolio" />
                <meta property="og:description" content="Full Stack Developer specializing in React, TypeScript, and modern web technologies." />
                <meta property="og:url" content="https://yukthihettiarachchi.onrender.com/" />
                <meta property="og:type" content="website" />
                
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Yukthi Hettiarachchi | Full Stack Developer Portfolio" />
                <meta name="twitter:description" content="Full Stack Developer specializing in React, TypeScript, and modern web technologies." />
              </Helmet>
              
              <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
                <Header />
                <main>
                  <Hero />
                  <About />
                  <Projects />
                  <Publications />
                  <Timeline />
                  <Testimonials />
                  <Contact />
                </main>
                <Footer />
                <ScrollToTop />
                <ScrollProgress />
              </div>
            </>
          } />

          {/* Modeling Gallery Route */}
          <Route path="/me" element={<ModelingGallery />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;