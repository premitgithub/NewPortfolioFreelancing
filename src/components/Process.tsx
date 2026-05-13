import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    title: "Understanding Requirements",
    description: "In-depth analysis of your business needs, goals, and target audience to define the project scope."
  },
  {
    number: "02",
    title: "Planning UI & Architecture",
    description: "Designing modern interfaces and mapping out scalable backend systems before writing code."
  },
  {
    number: "03",
    title: "Development & API Integration",
    description: "Iterative building phase with clean, maintainable code and seamless third-party integrations."
  },
  {
    number: "04",
    title: "Testing & Optimization",
    description: "Rigorous debugging, speed optimization, and security audits to ensure a production-ready system."
  },
  {
    number: "05",
    title: "Deployment",
    description: "Smooth launch to production servers with proper CI/CD pipelines and zero downtime."
  },
  {
    number: "06",
    title: "Ongoing Improvements",
    description: "Continuous monitoring, updates, and scaling as your business grows and users evolve."
  }
];

export default function Process() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-charcoal/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-electric-blue mb-4 block">Workflow</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter">
            My Development <span className="text-soft-white/20">Process.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative">
          {/* Timeline Connectors for Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-px bg-white/5 -z-10" />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="text-[12rem] font-display font-black leading-none opacity-[0.03] absolute -top-16 -left-8 pointer-events-none group-hover:opacity-[0.06] transition-opacity">
                {step.number}
              </div>
              <div className="relative z-10 pt-12">
                <div className="w-8 h-8 rounded-full bg-electric-blue flex items-center justify-center text-[10px] font-black text-white mb-8 border-4 border-matte-black outline-1 outline-electric-blue/30">
                  {step.number}
                </div>
                <h3 className="text-xl font-display font-bold mb-4 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-soft-white/40 text-sm leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
