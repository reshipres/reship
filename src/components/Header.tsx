import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCartIcon, UserIcon, MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setCartOpen } from '../store/slices/cartSlice';

// Компоненты
import CartSidebar from './CartSidebar';
import MobileMenu from './MobileMenu';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  
  const { itemCount } = useSelector((state: RootState) => state.cart);
  
  // Отслеживаем скролл для изменения вида шапки
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const openCart = () => {
    dispatch(setCartOpen(true));
  };
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <>
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Логотип */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary font-century">ReShip</span>
            </Link>
            
            {/* Навигация - видима только на больших экранах */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                to="/catalog/all"
                className={`text-secondary hover:text-primary text-sm font-medium transition-colors ${
                  location.pathname.includes('/catalog') ? 'text-primary' : ''
                }`}
              >
                Каталог
              </Link>
              <Link
                to="/discount"
                className={`text-secondary hover:text-primary text-sm font-medium transition-colors ${
                  location.pathname === '/discount' ? 'text-primary' : ''
                }`}
              >
                Скидки
              </Link>
              <Link
                to="/players"
                className={`text-secondary hover:text-primary text-sm font-medium transition-colors ${
                  location.pathname.includes('/players') ? 'text-primary' : ''
                }`}
              >
                Игроки
              </Link>
              <Link
                to="/blog"
                className={`text-secondary hover:text-primary text-sm font-medium transition-colors ${
                  location.pathname.includes('/blog') ? 'text-primary' : ''
                }`}
              >
                Блог
              </Link>
              <Link
                to="/delivery"
                className={`text-secondary hover:text-primary text-sm font-medium transition-colors ${
                  location.pathname === '/delivery' ? 'text-primary' : ''
                }`}
              >
                Доставка
              </Link>
              <Link
                to="/contacts"
                className={`text-secondary hover:text-primary text-sm font-medium transition-colors ${
                  location.pathname === '/contacts' ? 'text-primary' : ''
                }`}
              >
                Контакты
              </Link>
            </nav>
            
            {/* Иконки действий */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <Link to="/search" className="p-2 text-secondary hover:text-primary transition-colors">
                <MagnifyingGlassIcon className="h-5 w-5" />
              </Link>
              
              <Link to="/account" className="p-2 text-secondary hover:text-primary transition-colors">
                <UserIcon className="h-5 w-5" />
              </Link>
              
              <button 
                onClick={openCart}
                className="p-2 text-secondary hover:text-primary transition-colors relative"
              >
                <ShoppingCartIcon className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute top-0 right-0 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
              
              {/* Мобильное меню - видимо только на малых экранах */}
              <button 
                className="p-2 text-secondary hover:text-primary transition-colors lg:hidden"
                onClick={toggleMobileMenu}
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Мобильное меню */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      
      {/* Корзина */}
      <CartSidebar />
    </>
  );
};

export default Header;