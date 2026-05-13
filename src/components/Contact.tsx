import { motion } from 'motion/react';
import { Send, Mail, Linkedin, Github, Phone, MessageCircle } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Backend Development',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Inquiry: ${formData.type} from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.type}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:sakshamsingh9192@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-12 bg-matte-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-electric-blue/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-warm-beige mb-4 block">
                Collaboration
              </span>
              <h2 className="text-4xl md:text-8xl font-display font-bold leading-none tracking-tighter mb-8 text-soft-white uppercase">
                Let's build <br />
                <span className="text-electric-blue">Together.</span>
              </h2>
              <p className="text-soft-white/60 text-lg max-w-md leading-relaxed mb-12">
                Have a project in mind? Let's discuss how we can build a scalable solution for your business. Usually responds within 24 hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full border border-soft-white/10 flex items-center justify-center group-hover:bg-soft-white group-hover:text-matte-black transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold opacity-30 block mb-1">Email Me</span>
                    <a href="mailto:sakshamsingh9192@gmail.com" className="text-xl font-display hover:text-electric-blue transition-colors underline underline-offset-4 decoration-soft-white/10 decoration-1">sakshamsingh9192@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full border border-soft-white/10 flex items-center justify-center group-hover:bg-soft-white group-hover:text-matte-black transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold opacity-30 block mb-1">Contact No.</span>
                    <a href="tel:+917679921085" className="text-xl font-display hover:text-electric-blue transition-colors underline underline-offset-4 decoration-soft-white/10 decoration-1">+91 7679921085</a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-16">
                 {[
                   { icon: Linkedin, href: 'https://www.linkedin.com/in/saksham-singh-02b8ab303' },
                   { icon: Github, href: 'https://github.com/Saksham-76' },
                   { icon: MessageCircle, href: 'https://wa.me/917679921085' }
                 ].map((social, i) => (
                    <a 
                      key={i} 
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-soft-white/5 bg-charcoal/30 flex items-center justify-center hover:bg-electric-blue transition-all"
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                 ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-sm border border-soft-white/10 relative glass"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 group">
                  <label className="text-[10px] tracking-tighter font-bold opacity-40 group-focus-within:opacity-100 group-focus-within:text-electric-blue transition-all uppercase">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe" 
                    className="w-full bg-transparent border-b border-soft-white/10 py-3 focus:outline-none focus:border-electric-blue transition-all font-sans text-sm"
                  />
                </div>
                <div className="space-y-2 group">
                  <label className="text-[10px] tracking-tighter font-bold opacity-40 group-focus-within:opacity-100 group-focus-within:text-electric-blue transition-all uppercase">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com" 
                    className="w-full bg-transparent border-b border-soft-white/10 py-3 focus:outline-none focus:border-electric-blue transition-all font-sans text-sm"
                  />
                </div>
              </div>
              <div className="space-y-2 group">
                <label className="text-[10px] tracking-tighter font-bold opacity-40 group-focus-within:opacity-100 group-focus-within:text-electric-blue transition-all uppercase">Inquiry Type</label>
                <select 
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full bg-transparent border-b border-soft-white/10 py-3 focus:outline-none focus:border-electric-blue transition-all font-sans text-sm appearance-none cursor-pointer"
                >
                  <option className="bg-matte-black">Backend Development</option>
                  <option className="bg-matte-black">Full-stack Project</option>
                  <option className="bg-matte-black">API Engineering</option>
                  <option className="bg-matte-black">Testing & QA</option>
                </select>
              </div>
              <div className="space-y-2 group">
                <label className="text-[10px] tracking-tighter font-bold opacity-40 group-focus-within:opacity-100 group-focus-within:text-electric-blue transition-all uppercase">Message</label>
                <textarea 
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or requirements..." 
                  className="w-full bg-transparent border-b border-soft-white/10 py-3 focus:outline-none focus:border-electric-blue transition-all font-sans text-sm resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="w-full py-5 bg-electric-blue hover:bg-white hover:text-matte-black transition-all duration-500 rounded-sm font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 group shadow-2xl"
              >
                Send Inquiry
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
