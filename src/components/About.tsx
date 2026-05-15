import { motion } from "motion/react";
import { ACHIEVEMENTS } from "../constants";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 px-6 md:px-12 bg-charcoal relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-electric-blue mb-4 block">
              The Mission
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8">
              Scalable <span className="italic">Solutions</span> for{" "}
              <span className="text-soft-silver">Modern Businesses</span>.
            </h2>
            <div className="space-y-6 text-soft-white/70 text-lg leading-relaxed max-w-xl font-sans">
              <p>
                I am a Full Stack Developer specialized in helping startups and
                established businesses build robust, scalable, and
                high-performance web applications. My focus is on creating value
                through clean architecture, real-time capabilities, and
                efficient backend systems.
              </p>
              <p>
                With a deep understanding of Java Spring Boot, MERN Stack, and
                Enterprise-grade API engineering, I bridge the gap between
                complex business requirements and production-ready software
                solutions.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-12">
              {ACHIEVEMENTS.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-electric-blue mb-2">
                    {stat.title}
                  </span>
                  <span className="text-5xl font-display font-bold text-soft-white mb-2">
                    {stat.value}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-soft-white/40">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2 relative group">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-16/10 bg-matte-black rounded-sm overflow-hidden border border-soft-white/10">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070"
                alt="Code Workspace"
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-electric-blue/30 -z-10 rounded-full animate-pulse" />
          </motion.div>
        </div>
      </div>

      <div className="absolute -right-20 top-0 text-[15vw] font-display font-black text-white/5 pointer-events-none select-none -rotate-90">
        ENGINEER
      </div>
    </section>
  );
}
