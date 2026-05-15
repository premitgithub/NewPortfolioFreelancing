import { motion } from "motion/react";
import {
  ShieldCheck,
  Bug,
  Terminal,
  Database,
  CheckCircle2,
} from "lucide-react";

const testingSkills = [
  {
    name: "Functional Testing",
    icon: CheckCircle2,
    desc: "End-to-end user workflow validation.",
  },
  {
    name: "Regression Testing",
    icon: ShieldCheck,
    desc: "Ensuring stability across software updates.",
  },
  {
    name: "Integration Testing",
    icon: Terminal,
    desc: "Validating seamless interaction between services.",
  },
  {
    name: "API Testing",
    icon: Bug,
    desc: "Rigorous validation of REST endpoints using Postman.",
  },
  {
    name: "Test Case Design",
    icon: Database,
    desc: "Structured documentation for maximum coverage.",
  },
  {
    name: "Defect Tracking",
    icon: ShieldCheck,
    desc: "Precise identification and resolution workflows.",
  },
];

export default function TestingQA() {
  return (
    <section
      id="testing"
      className="py-32 px-6 md:px-12 bg-charcoal border-b border-soft-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-soft-silver mb-4 block">
              Quality Assurance
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-bold leading-none tracking-tighter">
              RELIABILITY <br />
              <span className="text-electric-blue">FIRST.</span>
            </h2>
          </div>
          <p className="mt-8 md:mt-0 text-soft-white/40 max-w-75 text-xs uppercase tracking-[0.2em] leading-relaxed">
            A quality-first mindset focused on delivering defect-free,
            high-performance systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testingSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 bg-matte-black/40 border border-soft-white/5 rounded-sm hover:border-electric-blue/40 transition-all group"
            >
              <skill.icon className="w-8 h-8 text-electric-blue mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-display font-bold mb-4">
                {skill.name}
              </h3>
              <p className="text-sm text-soft-white/40 font-sans leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
