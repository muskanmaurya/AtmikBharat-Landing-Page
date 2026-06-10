import React from 'react'
import cggovt from '../assets/clients/cggovt.webp'
import deloitte from '../assets/clients/deloitte.webp'
import divy from '../assets/clients/Divy Solar Power.webp'
import kpmg from '../assets/clients/kpmg.webp'

const logos = [cggovt, deloitte, divy, kpmg]

const Clients = () => {
  const duration = 28 // seconds for full loop

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-center text-sm text-slate-500 mb-6">Trusted by leading enterprises, government bodies and growing startups</h3>

        <div className="overflow-hidden relative">
          <style>{`
            @keyframes marqueeLeft { from { transform: translateX(0); } to { transform: translateX(-50%); } }
            .marquee-track { animation: marqueeLeft ${duration}s linear infinite; }
            .marquee-track:hover { animation-play-state: paused; }
          `}</style>

          <div className="marquee-track flex items-center" style={{ gap: '1.5rem' }}>
            {[...logos, ...logos].map((src, i) => (
              <div key={i} style={{ flex: '0 0 25%' }} className="flex justify-center items-center">
                <img src={src} alt={`client-${i}`} className="max-h-14 object-contain opacity-95" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
