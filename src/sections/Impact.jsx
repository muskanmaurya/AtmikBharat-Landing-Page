import { Rocket } from 'lucide-react'
import { motion } from 'framer-motion'

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const Impact = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-slate-800">IMPACT WE'VE CREATED</h2>
          <p className="text-slate-500 mt-2">Showcasing measurable success, innovation and growth through our impactful solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Hero Metric spanning 2 columns */}
          <motion.div
            className="md:col-span-2 bg-slate-950 text-white p-8 rounded-3xl relative overflow-hidden"
            variants={statVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative z-10">
              <div className="text-5xl font-extrabold">₹12Cr+</div>
              <div className="mt-2 text-slate-300">Cost Saved via Automation</div>
            </div>

            {/* Decorative neon upward line (SVG) */}
            <svg className="absolute right-6 top-6 opacity-30" width="220" height="120" viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 100 L50 70 L90 80 L130 40 L170 50 L210 20" stroke="#34D399" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <filter id="glow1" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path d="M10 100 L50 70 L90 80 L130 40 L170 50 L210 20" stroke="#10B981" strokeWidth="2" strokeLinecap="round" filter="url(#glow1)" opacity="0.7" />
            </svg>
          </motion.div>

          {/* Card 2 - 150+ */}
          <motion.div
            className="bg-white border border-slate-100 p-6 rounded-3xl flex flex-col justify-between"
            variants={statVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <div>
              <div className="inline-flex items-center gap-3">
                <div className="bg-blue-600 text-white p-2 rounded-md"><Rocket className="w-4 h-4" /></div>
                <div className="text-2xl font-bold">150+</div>
              </div>
              <div className="text-sm text-slate-500 mt-2">Digital Projects Delivered</div>
            </div>
          </motion.div>

          {/* Card 3 - 4.8 ★ */}
          <motion.div
            className="bg-white border border-slate-100 p-6 rounded-3xl"
            variants={statVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-2xl font-bold">4.8 <span className="text-amber-400">★</span></div>
            <div className="text-sm text-slate-500 mt-2">Client Satisfaction</div>
            <div className="flex items-center gap-1 mt-4" aria-hidden>
              {[...Array(5)].map((_, i) => (
                <span key={i} className="w-4 h-4 inline-block text-amber-400">★</span>
              ))}
            </div>
          </motion.div>

          {/* Card 4 - 99.9% Uptime */}
          <motion.div
            className="bg-white border border-slate-100 p-6 rounded-3xl"
            variants={statVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="text-2xl font-bold">99.9%</div>
            <div className="text-sm text-slate-500 mt-2">Uptime Across Managed Apps</div>

            <div className="flex gap-2 mt-4" aria-hidden>
              {[...Array(8)].map((_, i) => (
                <span key={i} className="w-2 h-2 bg-emerald-500 rounded-full inline-block" />
              ))}
            </div>
          </motion.div>

          {/* Card 5 - 500+ APIs */}
          <motion.div
            className="bg-white border border-slate-100 p-6 rounded-3xl"
            variants={statVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-2xl font-bold">500+</div>
            <div className="text-sm text-slate-500 mt-2">APIs & Integrations Shipped</div>
          </motion.div>

          {/* Card 6 - 25M+ spans 2 columns */}
          <motion.div
            className="md:col-span-2 bg-slate-50 border border-slate-100 p-8 rounded-3xl flex justify-between items-center"
            variants={statVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="text-3xl font-extrabold text-slate-800">25M+</div>
              <div className="text-sm text-slate-600 mt-1">End-users Reached / Served</div>
            </div>

            {/* small network cluster SVG */}
            <svg width="84" height="56" viewBox="0 0 84 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <circle cx="14" cy="28" r="6" fill="#2563EB" />
              <circle cx="42" cy="14" r="6" fill="#06B6D4" />
              <circle cx="70" cy="28" r="6" fill="#34D399" />
              <circle cx="42" cy="42" r="6" fill="#F59E0B" />
              <path d="M20 28 L38 16 L64 28 L38 40 L20 28" stroke="#CBD5E1" strokeWidth="1" fill="none" opacity="0.6"/>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Impact