import { motion } from 'framer-motion'
import { FaLinkedin } from 'react-icons/fa'

import shailendra from '../assets/team/aanad sir.webp'
import sazal from '../assets/team/sazal sir.webp'
import ashish from '../assets/team/ashish_sir.webp'
import amit from '../assets/team/amit.webp'
import kanchan from '../assets/team/kanchan.webp'
import lucky from '../assets/team/Lucky.webp'
import neha from '../assets/team/neha.webp'
import paswan from '../assets/team/paswan sir.webp'
import pitamber from '../assets/team/pitamber sir.webp'
import rojalin from '../assets/team/Rojalin.webp'

const founders = [
  {
    name: 'Shailendra Anand',
    title: 'Founder & Chief Systems Architect',
    img: shailendra,
    desc: 'Spearheading the design of scalable systems to streamline customer data management, enabling high lead conversion and sustained client relationships.',
    linkedin: '#'
  },
  {
    name: 'Sazal Malhotra',
    title: 'Co-Founder & AI Product Head',
    img: sazal,
    desc: 'Driving the vision and development of AI-powered solutions to transform customer engagement and accelerate business growth.',
    linkedin: '#'
  }
]

const team = [
  { name: 'Ashish Shehadiya', role: 'Fullstack Developer', img: ashish, desc: 'Full Stack Developer and Branch Manager, leading teams and building scalable digital solutions.' },
  { name: 'Amit Banjare', role: 'Fullstack Developer', img: amit, desc: 'Robust API architecture and integrations specialist.' },
  { name: 'Kanchan Adil', role: 'Business Analyst', img: kanchan, desc: 'Conversational AI lead and conversion strategist.' },
  { name: 'Lucky', role: 'Frontend Developer', img: lucky, desc: 'UI/UX and interaction design for delightful user experiences.' },
  { name: 'Neha Nand', role: 'Graphics Designer', img: neha, desc: 'Visual communication and brand design.' },
  { name: 'Ravindra Paswan', role: 'Frontend Developer', img: paswan, desc: 'Designing responsive user interfaces and accessibility.' },
  { name: 'Pitamber Sarway', role: 'Fullstack Developer', img: pitamber, desc: 'End-to-end API integration and backend engineering.' },
  { name: 'Rojalin Behera', role: 'Frontend Developer', img: rojalin, desc: 'UI/UX & Interaction Designer focused on usability.' }
]

const cardAnim = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }

const Team = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-slate-800">OUR LEADERSHIP & VISION</h2>
          <p className="text-slate-500 mt-2">Driven by system innovation and generative scale.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {founders.map((f, i) => (
            <motion.div key={i} className="bg-white rounded-2xl border border-slate-100 p-6 flex gap-6 items-center shadow-sm relative overflow-hidden"
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={cardAnim} transition={{ duration: 0.5, delay: i * 0.08 }}>
              <div className="absolute right-4 top-4">
                <a href={f.linkedin} aria-label={`LinkedIn ${f.name}`} className="text-slate-600 hover:text-sky-600">
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>

              <div className="w-40 h-56 rounded-md overflow-hidden flex-shrink-0 bg-slate-100">
                <img src={f.img} alt={f.name} className="w-full h-full object-cover" />
              </div>

              <div className="flex-1">
                <div>
                  <div className="text-lg font-semibold text-slate-800">{f.name}</div>
                  <div className="text-sm text-slate-500">{f.title}</div>
                </div>

                <blockquote className="mt-4 text-slate-600 italic">“{f.desc}”</blockquote>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-slate-800">OUR TEAM</h3>
          <p className="text-slate-500 mt-1">The engineering force powering our innovation.</p>
        </div>

        <div className="overflow-hidden relative">
          <style>{`
            @keyframes marqueeLeftTeam { from { transform: translateX(0); } to { transform: translateX(-50%); } }
            .team-track { animation: marqueeLeftTeam 28s linear infinite; display:flex; gap:1rem; align-items:center }
            .team-track:hover { animation-play-state: paused }
          `}</style>

          <div className="team-track">
            {[...team, ...team].map((m, i) => (
              <motion.div key={i} className="group relative rounded-lg overflow-hidden border border-slate-100 shadow-sm bg-white w-40 flex-shrink-0"
                initial="hidden" whileInView="show" viewport={{ once: true }} variants={cardAnim} transition={{ duration: 0.5, delay: (i%team.length) * 0.03 }}>
                <div className="relative">
                  <img src={m.img} alt={m.name} className="w-full h-56 object-cover" />

                  <div className="absolute left-0 right-0 bottom-0 p-3 bg-white/30 backdrop-blur-md">
                    <div className="font-semibold text-slate-900 text-sm">{m.name}</div>
                    <div className="text-xs text-slate-700">{m.role}</div>
                  </div>

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4 text-center">
                    <div className="text-white text-sm">{m.desc}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team