import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ConstellationBackground } from '../components/ConstellationBackground';
import { useLanguage } from '../contexts/LanguageContext';

export const Home: React.FC = () => {
  const location = useLocation();
  const { t, language } = useLanguage();

  React.useEffect(() => {
    document.title = language === 'fr' 
      ? 'Développeur Web Freelance pour Agences – WordPress, React, VueJS'
      : 'Freelance Web Developer for Agencies – WordPress, React, VueJS';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', language === 'fr'
        ? 'Développeur freelance avec +13 ans d\'expérience. Spécialisé en WordPress, ReactJS, VueJS. Idéal pour renfort technique ou sous-traitance.'
        : 'Freelance developer with 13+ years of experience. Specialized in WordPress, ReactJS, VueJS. Ideal for technical support or subcontracting.'
      );
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', language === 'fr'
        ? 'Renfort Technique pour Agences – Développeur Freelance Web'
        : 'Technical Support for Agencies – Freelance Web Developer'
      );
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', language === 'fr'
        ? 'Besoin d\'un renfort fiable pour vos projets clients ? Sites performants, respect des délais, livrables pro.'
        : 'Need a reliable dev for your client projects? Fast websites, strict deadlines, professional delivery.'
      );
    }

    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', language === 'fr'
        ? 'Renfort Technique pour Agences – Développeur Freelance Web'
        : 'Technical Support for Agencies – Freelance Web Developer'
      );
    }

    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', language === 'fr'
        ? 'Besoin d\'un renfort fiable pour vos projets clients ? Sites performants, respect des délais, livrables pro.'
        : 'Need a reliable dev for your client projects? Fast websites, strict deadlines, professional delivery.'
      );
    }
  }, [language]);

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen relative overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/img/home.webp)',
            backgroundBlendMode: 'overlay',
            backgroundColor: 'rgba(38, 25, 57, 0.95)'
          }}
          aria-hidden="true"
          loading="eager"
        >
          <link rel="preload" href="/img/home.webp" as="image" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#261939]/80 via-transparent to-[#261939]/80" />
        
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <motion.div 
            className="text-center relative max-w-[90%] sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ zIndex: 2 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3 text-shadow title-neon">
              {t('home.title')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-medium text-shadow title-neon-subtle">
              {t('home.subtitle')}
            </p>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="flex justify-center mb-3 sm:mb-4"
            >
              <Icons.Code className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#e28d1d]" aria-hidden="true" />
            </motion.div>

            <div className="mb-4 sm:mb-6">
              <p className="text-sm sm:text-base md:text-lg text-white mb-4 max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed bg-[#261939]/30 backdrop-blur-sm p-3 sm:p-4 md:p-5 rounded-xl text-shadow">
                {t('home.description')}
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex items-center gap-1.5 text-white bg-[#261939]/30 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm">
                  <Icons.Coffee className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#e28d1d]" aria-hidden="true" />
                  <span className="text-shadow">500+ {t('about.stats.tea')}</span>
                </div>
                <div className="flex items-center gap-1.5 text-white bg-[#261939]/30 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm">
                  <Icons.Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#e28d1d]" aria-hidden="true" />
                  <span className="text-shadow">30+ {t('about.stats.clients')}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-shadow px-5 sm:px-6 py-2 sm:py-2.5 bg-[#e28d1d] text-shadow-ng rounded-full text-white font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow text-sm"
                >
                  {t('home.cta.work')} <Icons.ArrowRight className="w-4 h-4" aria-hidden="true" />
                </motion.button>
              </Link>
              <Link to="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 sm:px-6 py-2 sm:py-2.5 border-2 border-[#e28d1d] text-[#e28d1d] rounded-full font-semibold hover:bg-[#e28d1d] hover:text-white transition-colors text-sm"
                >
                  {language === 'fr' ? 'Voir mes projets' : 'View My Work'}
                </motion.button>
              </Link>
            </div>

            <div className="flex gap-2 sm:gap-3 justify-center">
              <motion.a
                href="https://github.com/elarion83"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-2 bg-[#261939] hexagon-shape text-gray-300 hover:text-[#e28d1d] transition-colors"
                aria-label="Personal GitHub Profile"
              >
                <Icons.Github className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              </motion.a>
              <motion.a
                href="https://calendly.com/gruwe-nicolas/30min"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-2 bg-[#261939] hexagon-shape text-gray-300 hover:text-[#e28d1d] transition-colors"
                aria-label="Schedule a meeting on Calendly"
              >
                <Icons.CalendarPlus2 className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              </motion.a>
              <motion.a
                href="https://github.com/gnicolas31"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-2 bg-[#261939] hexagon-shape text-gray-300 hover:text-[#e28d1d] transition-colors"
                aria-label="Professional GitHub Profile"
              >
                <Icons.Github className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/nicolas-gruwe-b4805587/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-2 bg-[#261939] hexagon-shape text-gray-300 hover:text-[#e28d1d] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Icons.Linkedin className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              </motion.a>
              <motion.a
                href={`mailto:${import.meta.env.VITE_EMAIL_USER}`}
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-2 bg-[#261939] hexagon-shape text-gray-300 hover:text-[#e28d1d] transition-colors"
                aria-label="Send email"
              >
                <Icons.Mail className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              </motion.a>
            </div>
          </motion.div>
        </div>
        <ConstellationBackground />
      </motion.div>
    </AnimatePresence>
  );
};