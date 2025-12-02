import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, MapPin, Calendar, ExternalLink } from 'lucide-react';

const experiences = [
  {
    company: 'Abhimo Technologies Private Limited',
    role: 'SDE (Full Stack)',
    location: 'Mangalore, Karnataka',
    period: 'June 2025 – July 2025',
    description: [
      'Developed multiple web applications including Appreciation Letter Generator, Invoice System, Billing System, Interview Feedback Platform, and Resume Builder.',
      'Built end-to-end solutions using HTML, CSS, JavaScript, PHP, and MySQL for dynamic content and secure data management.',
      'Automated business processes like invoicing, feedback collection, and resume generation to improve efficiency.',
      'Collaborated on full-stack projects from database design to frontend interactivity.',
    ],
    color: 'primary',
  },
  {
    company: 'Cognifyz Technologies',
    role: 'Web Developer',
    location: 'Remote',
    period: 'June 2025',
    description: [
      'Built and maintained responsive websites with interactive front-end features.',
      'Used HTML, CSS, and JavaScript ensuring smooth user experience across devices.',
    ],
    color: 'secondary',
  },
  {
    company: 'SystemTron',
    role: 'Web Developer & SQL',
    location: 'Remote',
    period: 'June 2025',
    description: [
      'Built responsive and interactive web applications using HTML, CSS, and JavaScript.',
      'Performed CRUD operations to manage and optimize databases.',
      'All projects and tasks showcased on LinkedIn.',
    ],
    color: 'accent',
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getColorClass = (color: string) => {
    switch (color) {
      case 'primary':
        return 'border-primary bg-primary';
      case 'secondary':
        return 'border-secondary bg-secondary';
      case 'accent':
        return 'border-accent bg-accent';
      default:
        return 'border-primary bg-primary';
    }
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="hero-glow bg-accent/15 top-1/3 left-0" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm uppercase tracking-widest text-primary mb-4 block">
            Career Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full ${getColorClass(exp.color)} md:-translate-x-1/2 -translate-x-1/2 z-10`} />

              {/* Content */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="border-gradient p-6 rounded-2xl transition-all duration-300"
                >
                  <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Building2 className={`w-5 h-5 ${exp.color === 'primary' ? 'text-primary' : exp.color === 'secondary' ? 'text-secondary' : 'text-accent'}`} />
                    <h3 className="font-display text-xl font-bold text-foreground">{exp.company}</h3>
                  </div>

                  <p className={`font-display text-lg text-gradient mb-2`}>{exp.role}</p>

                  <div className={`flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>

                  <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="font-body text-sm text-muted-foreground leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
