import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FireIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// Components
import Hero from '../components/Hero';
import Features from '../components/Features';
import CategoryMenu from '../components/CategoryMenu';
import StreamerSection from '../components/StreamerSection';
import ToolPromoSection from '../components/ToolPromoSection';
import BlogSection from '../components/BlogSection';
import BrandSlider from '../components/BrandSlider';

// Data
import { categories } from '../data/categories';

const HomePage: React.FC = () => {
  return (
    <main className="home-page bg-[#E3E7F0]">
      {/* Главный слайдер */}
      <Hero />
      
      {/* Блок преимуществ */}
      <Features />
      
      {/* Категории товаров */}
      <CategoryMenu categories={categories} />
      
      {/* Хиты продаж */}
      <section className="py-6 md:py-10 lg:py-16 bg-[#E3E7F0]">
        <motion.div 
          className="container px-4 md:px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="flex justify-between items-center mb-4 md:mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <FireIcon className="h-5 w-5 md:h-6 md:w-6 text-primary mr-2" />
              </motion.div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary font-century">Хиты продаж</h2>
            </div>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/catalog/hot" className="text-primary hover:text-primary/80 flex items-center text-xs md:text-sm font-medium transition-colors group">
                <span className="group-hover:mr-1 transition-all">Смотреть все</span>
                <ChevronRightIcon className="h-4 w-4 md:h-5 md:w-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Здесь должен быть компонент ProductSlider для хитов продаж */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-center text-gray-500">Компонент с товарами</p>
          </div>
          
        </motion.div>
      </section>
      
      {/* Секция со стримерами */}
      <StreamerSection />
      
      {/* Секция с инструментом для подбора */}
      <ToolPromoSection />
      
      {/* Блог */}
      <BlogSection />

      <BrandSlider />
    </main>
  );
};

export default HomePage;