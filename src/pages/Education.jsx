import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';

const Education = () => {
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
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="mt-4 text-xl text-slate-500 dark:text-slate-400">
            Academic background and achievements.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-indigo-200 dark:border-indigo-900 ml-3">
            {/* Timeline Item */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-10 ml-8 relative"
            >
              <div className="absolute -left-[41px] bg-indigo-500 h-6 w-6 rounded-full border-4 border-white dark:border-slate-950"></div>
              <div className="glass p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Bachelor of Technology</h3>
                <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-2">JNTU Ananthapuram</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">2024 - 2027</p>
                <p className="text-slate-600 dark:text-slate-300">
                  Focusing on software engineering, data structures, and web development. Active member of the Coding Club and participant in multiple college hackathons.
                </p>
              </div>
            </motion.div>

            {/* diploma*/}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-10 ml-8 relative"
            >
              <div className="absolute -left-[41px] bg-purple-500 h-6 w-6 rounded-full border-4 border-white dark:border-slate-950"></div>
              <div className="glass p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Diploma (Mechanical Engineering)</h3>
                <h4 className="text-lg font-medium text-purple-600 dark:text-purple-400 mb-2">DR.Y.C.JAMES YEN GOVT. POLYTECHNIC - KUPPAM  </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">2021 - 2024</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">67.65%</p>
              </div>
            </motion.div>
            {/* high school*/}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-10 ml-8 relative"
            >
              <div className="absolute -left-[41px] bg-purple-500 h-6 w-6 rounded-full border-4 border-white dark:border-slate-950"></div>
              <div className="glass p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">High School</h3>
                <h4 className="text-lg font-medium text-purple-600 dark:text-purple-400 mb-2">ZPHIGH SCHOOL, NIDIGUNTA, CHITTOOR DISTRICT </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">78%</p>
                
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Education;
