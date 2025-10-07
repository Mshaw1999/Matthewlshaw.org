import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, FileText, Clock, MessageSquare, Github, Linkedin, Mail } from 'lucide-react';
import HomePage from './components/HomePage';
import ResumesPage from './components/ResumesPage';
import TimelinePage from './components/TimelinePage';
import ContactPage from './components/ContactPage';

type Page = 'home' | 'resumes' | 'timeline' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'resumes', label: 'Resumes', icon: FileText },
    { id: 'timeline', label: 'Timeline', icon: Clock },
    { id: 'contact', label: 'Contact', icon: MessageSquare },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'resumes':
        return <ResumesPage />;
      case 'timeline':
        return <TimelinePage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Header Navigation */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full bg-zinc-900/90 backdrop-blur-md z-50 border-b border-zinc-800"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-lg flex items-center justify-center">
                <span className="text-zinc-900 text-lg">M</span>
              </div>
              <span className="text-xl text-white">Matthew Lynn Shaw</span>
            </motion.div>

            {/* Navigation */}
            <nav className="flex space-x-8">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id as Page)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                      currentPage === item.id
                        ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-zinc-900'
                        : 'hover:bg-zinc-800 text-zinc-300 hover:text-white'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </motion.button>
                );
              })}
            </nav>

            {/* Social Links */}
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-2 rounded-lg hover:bg-zinc-800 transition-colors"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="p-2 rounded-lg hover:bg-zinc-800 transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:your-email@example.com"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-2 rounded-lg hover:bg-zinc-800 transition-colors"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="bg-zinc-950 border-t border-zinc-800 py-8"
      >
        <div className="max-w-7xl mx-auto px-6 text-center text-zinc-400">
          <p>&copy; 2025 Matthew Lynn Shaw. All rights reserved.</p>
          <p className="mt-2">IT Systems Engineer | Building the future, one system at a time</p>
        </div>
      </motion.footer>
    </div>
  );
}