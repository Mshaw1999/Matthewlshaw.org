import React from 'react';
import { motion } from 'motion/react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'resumes', label: 'Resumes' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full flex items-center justify-center">
            <span className="text-black text-sm font-bold">MS</span>
          </div>
          <span className="text-white text-lg">Matthew Shaw®</span>
        </motion.div>

        <nav className="flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`relative px-4 py-2 transition-colors ${
                currentPage === item.id
                  ? 'text-cyan-400'
                  : 'text-gray-300 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              {currentPage === item.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400"
                  layoutId="activeTab"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </nav>

        <motion.button 
          className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 rounded-full"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 211, 238, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentPage('contact')}
        >
          Get in touch
        </motion.button>
      </div>
    </motion.header>
  );
}