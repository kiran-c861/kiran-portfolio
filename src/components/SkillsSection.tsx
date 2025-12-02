import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', level: 85 },
      { name: 'Python', level: 75 },
      { name: 'SQL', level: 80 },
      { name: 'C (Basics)', level: 60 },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'React.js', level: 70 },
      { name: 'Responsive Design', level: 85 },
      { name: 'UI/UX', level: 75 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'PHP', level: 80 },
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 65 },
      { name: 'Node.js', level: 60 },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git/GitHub', level: 80 },
      { name: 'VS Code', level: 90 },
      { name: 'Linux', level: 65 },
      { name: 'Cloud (Azure/AWS)', level: 55 },
    ],
  },
];

const techStack = [
  { name: 'React', icon: '⚛️' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'Python', icon: '🐍' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'PHP', icon: '🐘' },
  { name: 'HTML5', icon: '📄' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'Git', icon: '📦' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Node.js', icon: '💚' },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="hero-glow bg-primary/15 top-0 right-0" />
      <div className="hero-glow bg-accent/15 bottom-0 left-0" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm uppercase tracking-widest text-primary mb-4 block">
            My Arsenal
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all cursor-pointer"
            >
              <span className="text-3xl">{tech.icon}</span>
              <span className="font-body text-xs text-muted-foreground">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.1 }}
              className="border-gradient p-6 rounded-2xl"
            >
              <h3 className="font-display text-xl font-bold text-primary mb-6">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-body text-sm text-foreground">{skill.name}</span>
                      <span className="font-display text-sm text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className="skill-bar"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="font-display text-2xl font-bold mb-8">Certifications & Learning</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'JavaScript - Let\'s Upgrade',
              'Data Science - Let\'s Upgrade',
              'SQL - Let\'s Upgrade',
              'Azure AZ-900 (Planned)',
              'AWS (Planned)',
              'MERN - Udemy (In Progress)',
            ].map((cert, index) => (
              <motion.span
                key={cert}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
                className="px-4 py-2 rounded-full bg-card border border-border text-sm font-body text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors cursor-default"
              >
                {cert}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
