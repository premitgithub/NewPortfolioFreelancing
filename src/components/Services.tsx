import { motion } from "motion/react";
import { Layout, Server, Zap, Cpu, Database, Bug } from "lucide-react";

const services = [
  {
    title: "Full Stack Web Development",
    description:
      "Backend-focused scalable applications using Java Spring Boot alongside modern MERN Stack development",
    icon: Layout,
  },
  {
    title: "Backend API Development",
    description:
      "Secure, optimized, production-ready REST APIs and backend systems.",
    icon: Server,
  },
  {
    title: "Real-Time Applications",
    description:
      "Scalable real-time applications featuring live updates, messaging systems, and tracking workflows.",
    icon: Zap,
  },
  {
    title: "AI Integration",
    description:
      "Smart workflow automation and intelligent system integration designed to simplify complex operations, improve scalability, and enhance user experience across modern web applications.",
    icon: Cpu,
  },
  {
    title: "Database Architecture",
    description: "MongoDB and MySQL schema design and optimization.",
    icon: Database,
  },
  {
    title: "Bug Fixing & Optimization",
    description:
      "Application debugging, backend optimization, and performance improvements.",
    icon: Bug,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 md:py-32 px-6 md:px-12 bg-matte-black relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-electric-blue mb-4 block">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter">
            What I Can <span className="text-soft-white/20">Build.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-sm border border-soft-white/5 bg-charcoal/30 hover:border-electric-blue/50 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-sm bg-matte-black border border-soft-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-electric-blue group-hover:border-electric-blue transition-all duration-500">
                  <service.icon className="w-5 h-5 text-soft-white group-hover:text-white" />
                </div>
                <h3 className="text-xl font-display font-bold mb-4 group-hover:text-electric-blue transition-colors tracking-tight">
                  {service.title}
                </h3>
                <p className="text-soft-white/40 text-sm leading-relaxed font-sans mb-4 group-hover:text-soft-white/60 transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
