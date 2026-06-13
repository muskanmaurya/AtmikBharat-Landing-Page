import { motion } from 'framer-motion'
import { FaLinkedin } from 'react-icons/fa'

import shailendra from '../assets/team/aanad sir.webp'
import sazal from '../assets/team/sazal sir.webp'
import ashish from '../assets/team/ashish_sir.webp'
import amit from '../assets/team/amit.webp'
import kanchan from '../assets/team/kanchan.webp'
import lekheshwar from '../assets/team/Lucky.webp'
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
    linkedin: 'https://www.linkedin.com/in/shailendraanand/'
  },
  {
    name: 'Sazal Malhotra',
    title: 'Co-Founder & AI Product Head',
    img: sazal,
    desc: 'Driving the vision and development of AI-powered solutions to transform customer engagement and accelerate business growth.',
    linkedin: 'https://www.linkedin.com/in/sazal-malhotra-977120156/'
  }
]

const team = [
  { name: 'Ashish Shehadiya', role: 'Fullstack Developer', img: ashish, desc: 'Full Stack Developer and Branch Manager, leading teams and building scalable digital solutions.' },
  { name: 'Amit Banjare', role: 'Fullstack Developer', img: amit, desc: 'Robust API architecture and integrations specialist.' },
  { name: 'Kanchan Adil', role: 'Business Analyst', img: kanchan, desc: 'Conversational AI lead and conversion strategist.' },
  { name: 'Lucky', role: 'Frontend Developer', img: lekheshwar, desc: 'UI/UX and interaction design for delightful user experiences.' },
  { name: 'Neha Nand', role: 'Graphics Designer', img: neha, desc: 'Visual communication and brand design.' },
  { name: 'Ravindra Paswan', role: 'Frontend Developer', img: paswan, desc: 'Designing responsive user interfaces and accessibility.' },
  { name: 'Pitamber Sarway', role: 'Fullstack Developer', img: pitamber, desc: 'End-to-end API integration and backend engineering.' },
  { name: 'Rojalin Behera', role: 'Frontend Developer', img: rojalin, desc: 'UI/UX & Interaction Designer focused on usability.' }
]


//The real atmik bharat team content

// const founders = [
//   {
//     name: 'Shailendra Anand',
//     title: 'Founder', // Updated to exact text from screenshot
//     img: shailendra,
//     desc: 'As Founder, spearheading the design of scalable systems to streamline customer data management, enabling high lead conversion and sustained client relationships.',
//     linkedin: 'https://www.linkedin.com/in/shailendraanand/'
//   },
//   {
//     name: 'Sazal Malhotra',
//     title: 'Co-Founder', // Updated to exact text from screenshot
//     img: sazal,
//     desc: 'As Co-Founder, driving the vision and development of AI-powered no-code chatbot solutions to transform customer engagement and accelerate business growth.',
//     linkedin: 'https://www.linkedin.com/in/sazal-malhotra-977120156/'
//   }
// ]

// const team = [
//   { 
//     name: 'Ashish Sheladiya', // Fixed spelling of "Sheladiya" based on image
//     role: 'Fullstack Developer', 
//     img: ashish, 
//     desc: 'Full Stack Developer and Branch Manager, leading teams and building scalable digital solutions with a passion for innovation' 
//   },
//   { 
//     name: 'Pitamber Sarway', 
//     role: 'Fullstack Developer', 
//     img: pitamber, 
//     desc: 'Engineering end-to-end web solutions with seamless frontend, backend, and API integration to strengthen brand trust and maximize user engagement.' 
//   },
//   { 
//     name: 'Ravindra Paswan', 
//     role: 'Frontend Developer', 
//     img: paswan, 
//     desc: 'Designing responsive user interfaces and integrating backend functionality to deliver seamless digital experiences and measurable business impact.' 
//   },
//   { 
//     name: 'Amit Banjare', 
//     role: 'Fullstack Developer', 
//     img: amit, 
//     desc: 'Developing robust fullstack applications with a strong focus on secure backend architecture, API integration, and compliant data storage.' 
//   },
//   { 
//     name: 'Rojalin Behera', 
//     role: 'Frontend Developer', 
//     img: rojalin, 
//     desc: 'Creating dynamic user interfaces and integrating backend functionalities to scale customer engagement via broadcast and retargeting.' 
//   },
//   { 
//     name: 'Lekheshwar Das', // Swapped out placeholder 'Lucky' with exact name from image
//     role: 'Fullstack Developer', // Updated role to Fullstack Developer based on image
//     img: lekheshwar, 
//     desc: 'Developing robust frontend and backend systems with efficient API handling to enable large-scale broadcasts and precise customer retargeting.' 
//   },
//   { 
//     name: 'Kanchan Adil', // Retained out-of-frame asset configuration data from your base file
//     role: 'Business Analyst', 
//     img: kanchan, 
//     desc: 'Analyzing data-driven strategies to maximize customer reach through broadcasting and boost conversions with targeted retargeting insights.' 
//   },
//   { 
//     name: 'Neha Nand', // Retained out-of-frame asset configuration data from your base file
//     role: 'Graphics Designer', 
//     img: neha, 
//     desc: 'Visual communication and brand design.' 
//   }
// ]

const cardAnim = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }

const Team = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center my-15">
          <h2 className="text-4xl mt-4 text-center md:text-5xl font-bold text-slate-950">OUR LEADERSHIP & VISION</h2>
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

              <div className="w-32 sm:w-40 h-44 sm:h-56 rounded-md overflow-hidden flex-shrink-0 bg-slate-100">
                <img src={f.img} alt={f.name} className="w-full h-full object-cover" />
              </div>

              <div className="flex-1">
                <div>
                  <div className="text-xl font-semibold text-slate-800">{f.name}</div>
                  <div className="text-sm text-slate-500">{f.title}</div>
                </div>

                <blockquote className="mt-4 text-slate-600 italic">“{f.desc}”</blockquote>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center my-15">
            <h2 className="text-4xl mt-4 text-center md:text-5xl font-bold text-slate-950">OUR TEAM</h2>
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
              <motion.div key={i} className="group relative rounded-lg overflow-hidden border border-slate-100 shadow-sm bg-white w-32 sm:w-40 flex-shrink-0"
                initial="hidden" whileInView="show" viewport={{ once: true }} variants={cardAnim} transition={{ duration: 0.5, delay: (i%team.length) * 0.03 }}>
                <div className="relative">
                  <img src={m.img} alt={m.name} className="w-full h-44 sm:h-56 object-cover" />

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