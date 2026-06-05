import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import AnimatedPage from '../components/AnimatedPage';

const socialLinks = {
  github: 'https://github.com/kounepallibalaji006',
  linkedin: 'https://www.linkedin.com/in/k-balaji-a502493a2/',
};

const Contact = () => {
  return (
    <AnimatedPage>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="mt-4 text-xl text-slate-500 dark:text-slate-400">
            Have a question or want to work together?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Info</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-full text-indigo-600 dark:text-indigo-400">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                    <a href="mailto:contact@example.com" className="text-lg font-medium text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400">
                      balajikounepalli006@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-full text-purple-600 dark:text-purple-400">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Phone</p>
                    <p className="text-lg font-medium text-slate-900 dark:text-white">
                      +91 7993657985
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-pink-100 dark:bg-pink-900/50 p-3 rounded-full text-pink-600 dark:text-pink-400">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
                    <p className="text-lg font-medium text-slate-900 dark:text-white">
                      India, Andhra Pradesh, palamaneru
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-full text-slate-700 dark:text-slate-300">
                    <FaGithub className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">GitHub</p>
                    <a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg font-medium text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      View GitHub Profile
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full text-blue-600 dark:text-blue-400">
                    <FaLinkedin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">LinkedIn</p>
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg font-medium text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      View LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="glass p-8 rounded-3xl shadow-lg space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="mt-1 block w-full px-4 py-3 bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-900 dark:text-white transition-colors"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="mt-1 block w-full px-4 py-3 bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-900 dark:text-white transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="mt-1 block w-full px-4 py-3 bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-900 dark:text-white transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30"
              >
                Send Message <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Contact;
