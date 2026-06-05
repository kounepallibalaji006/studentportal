import { motion } from 'framer-motion';
import { Award, CalendarDays, ExternalLink } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import dataEngineer from "../assets/data engineer.jpeg";
import articalPentopodium from "../assets/artical pen to podium.jpeg";
import healthManagement from "../assets/health management.jpeg";
// import BalajiNptelcertificate from "../assets/Balaji Nptel Certificate.pdf";

const certifications = [
  {
    title: 'Health Management',
    issuer: 'Health Management Program',
    date: '2025',
    description:
      'Successfully completed Health Management certification covering healthcare systems and management principles.',
    credential: '/certificates/health-management.jpg',
    image:healthManagement,
  },

//   {
//   title: 'NPTEL Online Certification',
//   issuer: 'NPTEL',
//   date: '2025',
//   description:
//     'Completed the NPTEL certification on Introduction to Industry 4.0 and Industrial Internet of Things (IIoT).',
//   credential: '/certificates/Balaji-Nptel-Certificate.pdf',
//   image: '/certificates/nptel.jpg',
// }

  {
    title: 'Future Perspectives in Innovations and Sustainable Technologies',
    issuer: 'MITS',
    date: '2025',
    description:
      'Secured 3rd Prize in the National Level Article Presentation "Pen to Podium".',
    credential: '/certificates/Pen-To-Podium.pdf',
    image:articalPentopodium,
  },

  {
  title: 'Data Engineering Virtual Internship',
  issuer: 'EduSkills',
  date: '2025',
  description: 'Completed a virtual internship in Data Engineering.',
  credential: '/certificates/internship.jpg',
  image: dataEngineer,
}
];
// const certifications = [
//    {
//     title: 'Health Management',
    
    
//     description: '',
//     credential: '#',
  
//     image: "c:\Users\K BALAJI\Downloads\Balaji Nptel Certificate.pdf",
//   },
//   {
//     title: 'NPTEL ONLINE CERTIFICATION',
//     certification :' Elite',
//     description: 'Completed the NPTEL certification on Introduction to Industry 4.0 and Industrial Internet of Things (IIoT), covering smart manufacturing, IoT technologies, automation, cyber-physical systems, and digital transformation in modern industries.',
//     credential: '#',
//     image: "c:\Users\K BALAJI\Downloads\Balaji Nptel Certificate.pdf",
//   },
//   {
//     title: 'future perspectives in innovations and sustainable technologies',
    
    
//     description: 'proud to have secued 3rd prize in the National level artical presentation  "pen to podium" organized departement of computer science&engineering mits',
//     credential: '#',
//     image: 'c:\Users\K BALAJI\Downloads\pen to podium.pdf',
//   },
//   {
//     title: 'Data Engineering virtual internship',
   
//     description: '',
//     credential: '#',
//     image: '"C:\Users\K BALAJI\Downloads\eduskills-virtual internship.jpeg"',
//   },
// ];

const Certifications = () => {
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
            My <span className="gradient-text">Certifications</span>
          </h2>
          <p className="mt-4 text-xl text-slate-500 dark:text-slate-400">
            Courses and credentials that support my development skills.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((certification, index) => (
            <motion.article
              key={certification.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass overflow-hidden rounded-3xl shadow-lg border-t-4 border-indigo-500"
            >
              <div className="aspect-[16/10] bg-slate-100 dark:bg-slate-900 overflow-hidden">
                <img
                  src={certification.image}
                  alt={`${certification.title} certificate preview`}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-2xl text-indigo-600 dark:text-indigo-400">
                    <Award className="h-7 w-7" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {certification.title}
                    </h3>
                    <p className="mt-1 text-lg text-indigo-600 dark:text-indigo-400">
                      {certification.issuer}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                  <CalendarDays className="h-4 w-4" />
                  <span>{certification.date}</span>
                </div>

                <p className="mt-5 text-slate-600 dark:text-slate-300 leading-7">
                  {certification.description}
                </p>

                <a
                  href={certification.credential}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  View Credential
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Certifications;
