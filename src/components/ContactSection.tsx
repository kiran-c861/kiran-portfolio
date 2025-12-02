import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Download } from 'lucide-react';
import { toast } from 'sonner';
import { TiltCard } from './TiltCard';
import { MagneticButton } from './MagneticButton';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'tgkiran444@gmail.com',
      href: 'mailto:tgkiran444@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-8618076622',
      href: 'tel:+918618076622',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mangalore, Karnataka',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/kiran-c-568119291',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/kiran-c861',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="hero-glow bg-primary/20 bottom-0 right-1/4" />
      <div className="hero-glow bg-secondary/15 top-1/4 left-0" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm uppercase tracking-widest text-primary mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl font-bold mb-8">Contact Information</h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/50 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(180_100%_50%_/_0.1)] transition-all group"
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <span className="font-body text-xs text-muted-foreground block">{item.label}</span>
                    <span className="font-body text-foreground">{item.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <h4 className="font-display text-lg font-bold mb-4">Connect With Me</h4>
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social) => (
                <MagneticButton
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-xl border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_20px_hsl(180_100%_50%_/_0.2)] transition-all"
                >
                  <social.icon className="w-6 h-6" />
                </MagneticButton>
              ))}
            </div>

            {/* Download Resume */}
            <MagneticButton
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-display uppercase tracking-wider hover:bg-primary/90 hover:shadow-[0_0_30px_hsl(180_100%_50%_/_0.3)] transition-all"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </MagneticButton>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <TiltCard className="border-gradient p-8 rounded-2xl">
              <form onSubmit={handleSubmit}>
                <h3 className="font-display text-2xl font-bold mb-6">Send a Message</h3>

                <div className="space-y-6">
                  <motion.div
                    animate={{
                      scale: focusedField === 'name' ? 1.02 : 1,
                    }}
                  >
                    <label className="font-body text-sm text-muted-foreground mb-2 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-[0_0_20px_hsl(180_100%_50%_/_0.1)] outline-none transition-all font-body text-foreground placeholder:text-muted-foreground"
                      placeholder="John Doe"
                    />
                  </motion.div>

                  <motion.div
                    animate={{
                      scale: focusedField === 'email' ? 1.02 : 1,
                    }}
                  >
                    <label className="font-body text-sm text-muted-foreground mb-2 block">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-[0_0_20px_hsl(180_100%_50%_/_0.1)] outline-none transition-all font-body text-foreground placeholder:text-muted-foreground"
                      placeholder="john@example.com"
                    />
                  </motion.div>

                  <motion.div
                    animate={{
                      scale: focusedField === 'message' ? 1.02 : 1,
                    }}
                  >
                    <label className="font-body text-sm text-muted-foreground mb-2 block">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-[0_0_20px_hsl(180_100%_50%_/_0.1)] outline-none transition-all font-body text-foreground placeholder:text-muted-foreground resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </motion.div>

                  <MagneticButton
                    onClick={() => {}}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground font-display uppercase tracking-wider hover:opacity-90 hover:shadow-[0_0_30px_hsl(180_100%_50%_/_0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <motion.span
                        className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </MagneticButton>
                </div>
              </form>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
