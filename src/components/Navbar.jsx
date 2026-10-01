import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import NeumorphicSwitch from './ui/NeumorphicSwitch';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showRedirectPopup, setShowRedirectPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Programs' },
    { path: '/case-studies', label: 'Case Studies' },
    { path: '/events', label: 'Event Gallery' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 md:px-6 pt-4 md:pt-6 pointer-events-none">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto w-full max-w-6xl transition-all duration-300 rounded-full border ${
            scrolled
              ? 'bg-white/80 backdrop-blur-xl shadow-premium border-white/60'
              : 'bg-white/40 backdrop-blur-md shadow-sm border-white/30'
          }`}
        >
          <div className="flex items-center justify-between h-14 px-4 md:px-6">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-2.5 group shrink-0">
              <img
                src="/assets/tranferentlogo.png"
                alt="CareerCraftly"
                className="w-auto h-8 md:h-10 object-contain transition-transform group-hover:scale-105 duration-300"
              />
              <span className="font-display font-bold text-lg text-gray-900 tracking-tight hidden sm:block">
                CareerCraftly
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                      isActive ? 'bg-gray-100/80 text-gray-900' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0 shadow-[0_0_8px_rgba(37,99,235,0.6)]" />}
                    {link.label}
                  </Link>
                );
              })}
              
              <div className="h-6 w-px bg-gray-200 mx-2"></div>
              
              <div className="flex items-center gap-4 pl-2">
                <div
                  onMouseEnter={() => setShowRedirectPopup(true)}
                  onMouseLeave={() => setShowRedirectPopup(false)}
                  className="cursor-pointer"
                >
                  <NeumorphicSwitch
                    onChange={(checked) => {
                      if (checked) {
                        setTimeout(() => {
                          window.open('https://www.fluxmindstudios.com/', '_blank');
                        }, 1000)
                      }
                    }}
                  />
                </div>
                
                <button
                  onClick={() => navigate('/contact')}
                  className="flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold text-white bg-gray-900 transition-all duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.25)] hover:-translate-y-0.5"
                >
                  <Phone size={14} />
                  Book a Call
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 -mr-2 text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed top-24 left-4 right-4 z-50 lg:hidden rounded-2xl p-4 bg-white/95 backdrop-blur-xl shadow-2xl border border-white"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 py-3 px-4 text-sm font-semibold rounded-xl transition-all ${
                        isActive ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />}
                      {link.label}
                    </Link>
                  );
                })}
                <div className="h-px bg-gray-100 my-2"></div>
                <button 
                  onClick={() => { navigate('/contact'); setMobileMenuOpen(false); }}
                  className="w-full flex justify-center items-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-blue-600 shadow-md"
                >
                  <Phone size={14} /> Book a Free Call
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Flux Mind Studios Info Popup */}
      <AnimatePresence>
        {showRedirectPopup && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 right-8 z-[100] w-80 glass-card bg-white/95 border-gray-100 p-6 shadow-xl"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-12 h-1 rounded-br-full rounded-tl-2xl bg-gradient-to-r from-blue-500 to-indigo-500" />

              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Flux Mind Studios
              </h3>

              <p className="text-sm leading-relaxed text-gray-600 mb-5">
                Our parent company for client projects, digital services, and premium solutions.
              </p>

              <a
                href="https://www.fluxmindstudios.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gray-50 text-gray-900 border border-gray-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300"
              >
                Visit Website <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
