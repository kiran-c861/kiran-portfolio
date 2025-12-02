import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Download } from 'lucide-react';
import { toast } from 'sonner';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      href: 'https://github.com/kiranc-861',
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
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/50 hover:border-primary/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
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
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 rounded-xl border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>

            {/* Download Resume */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-display uppercase tracking-wider hover:bg-primary/90 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.button>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="border-gradient p-8 rounded-2xl">
              <h3 className="font-display text-2xl font-bold mb-6">Send a Message</h3>

              <div className="space-y-6">
                <div>
                  <label className="font-body text-sm text-muted-foreground mb-2 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body text-foreground placeholder:text-muted-foreground"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="font-body text-sm text-muted-foreground mb-2 block">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body text-foreground placeholder:text-muted-foreground"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="font-body text-sm text-muted-foreground mb-2 block">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body text-foreground placeholder:text-muted-foreground resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground font-display uppercase tracking-wider hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
