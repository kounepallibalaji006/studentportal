import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';

const Home = () => {
  return (
    <AnimatedPage>
      <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:bg-purple-900/40"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:bg-indigo-900/40"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 dark:bg-pink-900/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 text-center md:text-left pt-12 md:pt-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-indigo-600 dark:text-indigo-400 mb-4">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
              KOUNEPALLI BALAJI
            </h1>
            <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-6">
              Artificial Intelligence & Data Science Student & Full Stack Developer
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-lg mx-auto md:mx-0">
              Passionate about building scalable web applications and learning new technologies. I turn complex problems into beautiful, intuitive designs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg transition-all shadow-lg hover:shadow-indigo-500/30"
              >
                Contact Me <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border-2 border-indigo-600 dark:border-indigo-400 text-base font-medium rounded-full text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 md:py-4 md:text-lg transition-all"
              >
                Download Resume <Download className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="md:w-1/2 mt-16 md:mt-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Profile" 
                className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Home;
