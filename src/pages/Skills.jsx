import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';

const skillsData = [
  { name: 'HTML', level: 95 },
  { name: 'CSS / Tailwind', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 80 },
  { name: 'Python', level: 90 },
  { name: 'Django', level: 70 },
  { name: 'SQL', level: 75 },
  { name: 'Git & GitHub', level: 80 },
];

const Skills = () => {
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
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="mt-4 text-xl text-slate-500 dark:text-slate-400">
            Technologies and tools I work with.
          </p>
        </motion.div>

        <div className="glass p-8 md:p-12 rounded-3xl shadow-xl max-w-4xl mx-auto">
          <div className="space-y-8">
            {skillsData.map((skill, index) => (
              <div key={skill.name} className="relative">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-medium text-slate-700 dark:text-slate-300">
                    {skill.name}
                  </span>
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                  <motion.div
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Skills;
