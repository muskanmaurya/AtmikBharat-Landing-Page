import {motion} from 'framer-motion';
import { Rocket, Milestone, Star, Users, Activity } from 'lucide-react';

export default function Impact() {

  const statVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}
  return (
    // 1. CHOPPED VERTICAL PADDING: Shrunk from py-28 to py-14 to instantly save major fold height
    <div className="w-full bg-[#fafafa] py-14 relative overflow-hidden font-sans">
      
      {/* Structural Typography Header Section (Tightened margin-bottom from mb-20 to mb-10) */}
      <div className="text-center mb-10 px-6">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-950 bg-indigo-50 border border-indigo-300 px-3 py-1 rounded-full">
          Proven Metrics
        </span>
          <h2 className="text-4xl mt-4 text-center md:text-5xl font-bold text-slate-950">IMPACT WE'VE CREATED</h2>

        <p className="text-md text-slate-500 max-w-xl mx-auto mt-2 leading-relaxed">
          Showcasing measurable success, innovation, and growth through our impactful solutions.
        </p>
      </div>

      {/* 2. TIGHTENED BENTO GRID MATRIX: Reduced max-width to max-w-5xl and dropped gap from 8 to 5 */}
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
        
        {/* ROW 1: 1. ₹12Cr+ Cost Saved (Spans 2 Columns — Tightened p-8 to p-6) */}
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
        {/* ROW 1: 2. 150+ Projects Shipped (Spans 1 Column — Tightened padding) */}
        <div className="bg-blue-100/30 border border-blue-100/50 rounded-[24px] p-6 flex flex-col justify-between gap-4 group hover:border-blue-200/70 hover:shadow-md transition-all duration-300">
          <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/10">
            <Rocket size={16} />
          </div>
          <div className="space-y-0.5">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">150+</h3>
            <p className="text-slate-500 text-[11px] font-medium">Digital Projects Delivered</p>
          </div>
        </div>

        {/* ROW 2: 3. 4.8 Client Satisfaction */}
        <div className="bg-amber-100/30 border border-amber-100/50 rounded-[24px] p-6 flex flex-col justify-between gap-4 group hover:border-amber-200/70 hover:shadow-md transition-all duration-300">
          <div className="space-y-0.5">
            <div className="flex items-baseline gap-1">
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">4.8</h3>
              <span className="text-[10px] font-bold text-amber-600">/ 5.0</span>
            </div>
            <p className="text-slate-500 text-[11px] font-medium">Client Satisfaction Rating</p>
          </div>

          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4].map((star) => (
              <Star key={star} size={13} className="fill-amber-400 stroke-amber-400" />
            ))}
            <div className="relative w-3.5 h-3.5">
              <Star size={13} className="absolute inset-0 text-slate-200 fill-slate-200 stroke-slate-200" />
              <div className="absolute inset-0 overflow-hidden" style={{ width: '75%' }}>
                <Star size={13} className="text-amber-400 fill-amber-400 stroke-amber-400" />
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: 4. 99.9% Application Uptime */}
        <div className="bg-emerald-100/30 border border-emerald-100/50 rounded-[24px] p-6 flex flex-col justify-between gap-4 group hover:border-emerald-200/70 hover:shadow-md transition-all duration-300">
          <div className="space-y-0.5">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">99.9%</h3>
            <p className="text-slate-500 text-[11px] font-medium">Uptime Across Managed Apps</p>
          </div>
          
          <div className="flex items-center gap-1">
            {[...Array(8)].map((_, i) => (
              <span key={i} className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-sm" />
            ))}
          </div>
        </div>

        {/* ROW 2: 5. 500+ APIs Shipped */}
        <div className="bg-purple-100/30 border border-purple-100/50 rounded-[24px] p-6 flex flex-col justify-between gap-4 group hover:border-purple-200/70 hover:shadow-md transition-all duration-300">
          <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-md shadow-purple-600/10">
            <Milestone size={16} />
          </div>
          <div className="space-y-0.5">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">500+</h3>
            <p className="text-slate-500 text-[11px] font-medium">APIs & Integrations Shipped</p>
          </div>
        </div>

        {/* ROW 3: 6. 25M+ End-users Reached (Spans 3 Columns — Reduced padding from p-10 to p-5) */}
        <div className="md:col-span-3 bg-gradient-to-r from-indigo-50/20 via-white to-sky-50/10 border border-slate-200/70 rounded-[24px] p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group hover:shadow-lg hover:border-slate-300/80 transition-all duration-300 relative overflow-hidden">
          
          <div className="space-y-1 relative z-10 flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md hidden sm:flex">
              <Users size={18} />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight">
                25M+
              </h3>
              <p className="text-slate-500 text-[11px] font-medium">
                End-users Reached / Served Successfully Ecosystem-Wide
              </p>
            </div>
          </div>

          {/* Network Tracking Node Badge */}
          <div className="bg-white border border-slate-200/60 px-3 py-2 rounded-xl flex items-center gap-2.5 relative z-10 shadow-sm backdrop-blur-sm self-stretch sm:self-auto justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-[9px] font-mono font-bold text-slate-700 tracking-wide">NETWORK CONSOLE LINK</span>
            </div>
            <Activity size={12} className="text-indigo-600 animate-bounce" />
          </div>
          
          <div className="absolute right-0 bottom-0 w-60 h-60 bg-indigo-500/5 rounded-full blur-[60px] pointer-events-none z-0" />
        </div>

      </div>
    </div>
  );
}