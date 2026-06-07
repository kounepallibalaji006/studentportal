import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import lakshmi from "../assets/lakshmi.jpeg";
import { GiH2O } from 'react-icons/gi';

const Home = () => {
  return (
    <AnimatedPage>
      <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        
        {/* Animated Background Blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:bg-purple-900/40"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:bg-indigo-900/40"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 dark:bg-pink-900/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between">
          
          {/* Left Section */}
          <motion.div
            className="md:w-1/2 text-center md:text-left pt-12 md:pt-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
           <h1 className="text-xl md:text-2xl font-medium text-indigo-600 dark:text-indigo-400 mb-4">
  Hello, I'm
</h1>

<h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
  KAREPPAGARI LAKSHMINARASIMHA
</h1>

<h4 className="text-2xl md:text-3xl font-bold gradient-text mb-6">
  Artificial Intelligence & Data Science Student & Full Stack Developer
</h4>

            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-lg mx-auto md:mx-0">
              Passionate about building scalable web applications and learning new technologies.
              I turn complex problems into beautiful, intuitive designs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-lg"
              >
                Contact Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              {/* Resume PDF should be inside public folder */}
              <a
                href="/lakshmi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 transition-all"
              >
                Download Resume
                <Download className="ml-2 h-5 w-5" />
              </a>

            </div>
          </motion.div>

          <motion.div
           className="md:w-1/2 mt-16 md:mt-0 flex justify-center md:ml-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
             src={lakshmi}
             alt="lakshmi"
             className="w-72 h-72 rounded-full object-cover border-4 border-blue-500 shadow-lg"
             />
          </motion.div>

        </div>
      </div>
    </AnimatedPage>
  );
};

export default Home;