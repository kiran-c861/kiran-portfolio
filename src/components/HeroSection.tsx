import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import kiranPhoto from '@/assets/kiran-photo.jpg';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient Orbs */}
      <div className="hero-glow bg-primary/40 top-1/4 -left-20" />
      <div className="hero-glow bg-secondary/30 bottom-1/4 -right-20" />
      <div className="hero-glow bg-accent/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-body text-sm text-primary">Available for opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
            >
              <span className="text-foreground">LET'S</span>
              <br />
              <span className="text-gradient">BUILD</span>
              <br />
              <span className="text-foreground">TOGETHER</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed"
            >
              I'm <span className="text-primary font-semibold">Kiran C</span>, a passionate
              Full Stack Developer & BCA Student crafting digital experiences with modern
              web technologies. Let's turn ideas into reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 text-muted-foreground mb-8 justify-center lg:justify-start"
            >
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-body">Mangalore, Karnataka</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px hsl(180 100% 50% / 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-display text-sm uppercase tracking-wider hover:bg-primary/90 transition-all"
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg border border-primary/30 text-primary font-display text-sm uppercase tracking-wider hover:bg-primary/10 transition-all"
              >
                View Projects
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 mt-10 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: 'https://github.com/kiranc-861', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/kiran-c-568119291', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:tgkiran444@gmail.com', label: 'Email' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow Effect Behind Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 blur-3xl scale-110 rounded-full" />
              
              {/* Main Image Container */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[500px]">
                  {/* Decorative Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-rotate-slow" style={{ borderRadius: '40% 60% 55% 45% / 55% 45% 60% 40%' }} />
                  
                  {/* Image */}
                  <img
                    src={kiranPhoto}
                    alt="Kiran C - Full Stack Developer"
                    className="w-full h-full object-cover object-top"
                    style={{
                      maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                    }}
                  />
                  
                  {/* Floating Tech Icons */}
                  <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -left-4 top-1/4 w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center glow-primary"
                  >
                    <span className="text-2xl">⚛️</span>
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                    className="absolute -right-4 top-1/3 w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center glow-secondary"
                  >
                    <span className="text-2xl">🐍</span>
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    className="absolute -left-8 bottom-1/3 w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center glow-accent"
                  >
                    <span className="text-2xl">🗄️</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="font-body text-xs uppercase tracking-wider">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
