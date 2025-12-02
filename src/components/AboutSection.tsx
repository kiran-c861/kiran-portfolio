import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Code2, Briefcase, Sparkles } from 'lucide-react';

const stats = [
  { value: '8.02', label: 'CGPA', icon: GraduationCap },
  { value: '3+', label: 'Projects', icon: Code2 },
  { value: '3', label: 'Internships', icon: Briefcase },
  { value: '2025', label: 'Graduating', icon: Calendar },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Element */}
      <div className="hero-glow bg-secondary/20 top-1/2 left-1/4 -translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm uppercase tracking-widest text-primary mb-4 block">
            About Me
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            Who <span className="text-gradient">Am I?</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                I'm a <span className="text-primary font-semibold">BCA (CT) student</span> at Nitte Institute of Professional Education,
                Mangalore, with a strong passion for building web applications that make a difference.
              </p>
              
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                My journey in tech started with curiosity and has evolved into a deep love for
                <span className="text-secondary font-semibold"> full-stack development</span>. I specialize in creating
                responsive, user-friendly applications using modern technologies.
              </p>

              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to projects,
                and constantly learning to stay ahead in this ever-evolving field.
              </p>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="font-body text-xs text-muted-foreground block">Location</span>
                    <span className="font-body text-sm text-foreground">Mangalore, KA</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <span className="font-body text-xs text-muted-foreground block">Degree</span>
                    <span className="font-body text-sm text-foreground">BCA (CT)</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="font-body text-xs text-muted-foreground block">Batch</span>
                    <span className="font-body text-sm text-foreground">2023 - 2027</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="font-body text-xs text-muted-foreground block">Focus</span>
                    <span className="font-body text-sm text-foreground">Full Stack Dev</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="border-gradient p-6 rounded-2xl text-center group hover:glow-primary transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="font-display text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
