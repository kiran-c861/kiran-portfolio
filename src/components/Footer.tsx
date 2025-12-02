import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-border">
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#home"
            className="font-display text-2xl font-bold text-gradient"
            whileHover={{ scale: 1.05 }}
          >
            KIRAN<span className="text-primary">_C</span>
          </motion.a>

          {/* Copyright */}
          <p className="font-body text-sm text-muted-foreground flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-accent fill-accent" /> by Kiran C © {new Date().getFullYear()}
          </p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-xl border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
