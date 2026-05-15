import { motion } from "motion/react";
import { SKILLS } from "../constants";

const categories = [
  "Programming Languages",
  "Backend Development",
  "Frontend Development",
  "Databases",
  "Software Testing",
  "Authentication & Security",
  "Tools & Platforms",
  "Concepts",
];

export default function Skills() {
  const repeatedSkills = [...SKILLS, ...SKILLS];

  return (
    <section
      id="skills"
      className="py-32 bg-charcoal relative overflow-hidden border-y border-soft-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <span className="text-xs uppercase tracking-[0.3em] font-bold text-soft-silver mb-4 block">
          Expertise
        </span>
        <h2 className="text-5xl md:text-7xl font-display font-bold leading-none tracking-tighter">
          TECHNICAL <br />
          <span className="text-electric-blue">ARSENAL.</span>
        </h2>
      </div>

      <div className="flex flex-col gap-12 relative">
        <div className="flex overflow-hidden group">
          <motion.div
            className="flex whitespace-nowrap gap-16 items-center py-6"
            animate={{ x: [0, -1500] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {repeatedSkills.map((skill, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter text-transparent [webkit-text-stroke:1px_rgba(255,255,255,0.1)] hover:[webkit-text-stroke:1px_rgba(74,144,226,0.5)] transition-all cursor-default">
                  {skill.name}
                </span>
                <div className="w-4 h-4 bg-electric-blue rounded-full opacity-40 mx-4" />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full">
          {categories.map((category) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-sm bg-matte-black/40 border border-soft-white/5 backdrop-blur-sm hover:border-electric-blue/30 transition-all group"
            >
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-electric-blue mb-6 group-hover:text-white transition-colors">
                {category}
              </h3>
              <ul className="space-y-3">
                {SKILLS.filter((s) => s.category === category).map((skill) => (
                  <li
                    key={skill.name}
                    className="text-sm text-soft-white/60 font-sans flex items-center gap-3"
                  >
                    <div className="w-1 h-1 bg-soft-white/20 rounded-full" />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
