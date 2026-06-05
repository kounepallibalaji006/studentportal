import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import AnimatedPage from '../components/AnimatedPage';

const projectsData = [
  {
    title: 'AI Powered Notes Summarizer',
    description: 'A full-stack application that leverages AI to automatically summarize long lecture notes into concise bullet points.',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'Tailwind CSS', 'Python', 'Django', 'NLP'],
    github: 'https://github.com/kounepallibalaji006/ai-notes-summarizer',
    demo: '#'
  },
  {
    title: 'Student Management System',
    description: 'A comprehensive dashboard for managing student records, attendance, and grades with secure authentication.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tech: ['HTML', 'CSS', 'JavaScript', 'SQL', 'PHP'],
    github: 'https://github.com/kounepallibalaji006/student-lms',
    demo: '#'
  },
  // {
  //   title: 'E-Commerce Website',
  //   description: 'A responsive e-commerce platform with a shopping cart, payment gateway integration, and product filtering.',
  //   image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  //   tech: ['React', 'Node.js', 'Express', 'MongoDB'],
  //   github: '#',
  //   demo: '#'
  // },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and Framer Motion to showcase my skills and projects.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    github: '#',
    demo: '#'
  }
];

const Projects = () => {
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-xl text-slate-500 dark:text-slate-400">
            Some of my recent work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-48 sm:h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex space-x-4">
                    <a href={project.github} className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors">
                      <FaGithub className="w-5 h-5" />
                    </a>
                    <a href={project.demo} className="p-2 bg-indigo-600 rounded-full text-white hover:bg-indigo-700 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 text-sm font-medium bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Projects;
