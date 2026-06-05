import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass border-t border-white/20 dark:border-slate-800/50 mt-auto transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold gradient-text">Portfolio</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Building modern web experiences.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-indigo-500 transition-colors">
              <span className="sr-only">GitHub</span>
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-indigo-500 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-indigo-500 transition-colors">
              <span className="sr-only">Twitter</span>
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="mailto:contact@example.com" className="text-slate-400 hover:text-indigo-500 transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-center text-sm text-slate-500 dark:text-slate-400">
          <p>&copy; {currentYear} Student Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
