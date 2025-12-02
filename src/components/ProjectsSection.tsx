import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Code2, Database, Globe } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { MagneticButton } from './MagneticButton';

const projects = [
  {
    title: 'Customer Relationship Management',
    description: 'Created an interactive user dashboard to manage customer data efficiently with a secure MySQL database for reliable data handling.',
    tech: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    icon: Database,
    date: 'April 2024',
    color: 'primary',
  },
  {
    title: 'Abhimo Apperception Letter Generator',
    description: 'Integrated PHP with MySQL for secure data storage and dynamic content generation. Designed a responsive interface that simplifies user interaction.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    icon: Code2,
    date: 'June 2025',
    color: 'secondary',
  },
  {
    title: 'Portfolio Websites',
    description: 'Developed responsive and interactive portfolio websites with modern UI/UX practices, animations, smooth navigation, and device-friendly layouts.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    icon: Globe,
    date: 'July 2025',
    color: 'accent',
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getColorClass = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary bg-primary/10 border-primary/30';
      case 'secondary':
        return 'text-secondary bg-secondary/10 border-secondary/30';
      case 'accent':
        return 'text-accent bg-accent/10 border-accent/30';
      default:
        return 'text-primary bg-primary/10 border-primary/30';
    }
  };

  const getGlowClass = (color: string) => {
    switch (color) {
      case 'primary':
        return 'hover:shadow-[0_0_30px_hsl(180_100%_50%_/_0.3)]';
      case 'secondary':
        return 'hover:shadow-[0_0_30px_hsl(280_100%_60%_/_0.3)]';
      case 'accent':
        return 'hover:shadow-[0_0_30px_hsl(330_100%_60%_/_0.3)]';
      default:
        return 'hover:shadow-[0_0_30px_hsl(180_100%_50%_/_0.3)]';
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="hero-glow bg-secondary/20 top-1/2 -translate-y-1/2 right-0" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm uppercase tracking-widest text-primary mb-4 block">
            My Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <TiltCard className={`border-gradient p-6 rounded-2xl transition-all duration-300 h-full ${getGlowClass(project.color)}`}>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <motion.div 
                    className={`w-14 h-14 rounded-xl flex items-center justify-center ${getColorClass(project.color)}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <project.icon className="w-7 h-7" />
                  </motion.div>
                  <span className="font-body text-xs text-muted-foreground">{project.date}</span>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1 rounded-full bg-muted text-xs font-body text-muted-foreground cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <MagneticButton className="flex items-center gap-2 text-sm font-body text-primary hover:text-primary/80 transition-colors">
                    <Github className="w-4 h-4" />
                    Code
                  </MagneticButton>
                  <MagneticButton className="flex items-center gap-2 text-sm font-body text-primary hover:text-primary/80 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </MagneticButton>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <MagneticButton
            href="https://github.com/kiran-c861"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/30 text-primary font-display text-sm uppercase tracking-wider hover:bg-primary/10 transition-all"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
