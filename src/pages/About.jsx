import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';

const About = () => {
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
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="mt-4 text-xl text-slate-500 dark:text-slate-400">
            Get to know more about my background and interests.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Personal Introduction
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Hello, my name is Balaji. I am an Artificial Intelligence and Data Science (AI&DS) student with a strong interest in Full Stack Development. I have experience working with HTML, CSS, JavaScript, React, Python, Django, and SQL to build responsive and user-friendly web applications. I enjoy learning new technologies, solving real-world problems, and developing innovative software solutions. My goal is to become a skilled Full Stack Developer and contribute to impactful technology projects.

            </p>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Career Objective
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Seeking an entry-level web development position where I can utilize my skills in React, Node.js, and Python to contribute to innovative projects while continuing to learn and grow in a dynamic environment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass p-6 rounded-2xl shadow-lg border-l-4 border-indigo-500">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Education Summary</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Currently pursuing a Bachelor of Technology in Artificial Intelligence And Data Science at University JNTU Ananthapuram (2026-2027). Consistently maintaining a high CGPA and actively participating in technical clubs.
              </p>
            </div>
            
            <div className="glass p-6 rounded-2xl shadow-lg border-l-4 border-purple-500">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Personal Interests</h4>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2">
                <li>Contributing to Open Source projects</li>
                <li>Participating in hackathons and coding challenges</li>
                <li>Reading about AI and machine learning advancements</li>
                <li>Playing chess and strategic video games</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default About;
