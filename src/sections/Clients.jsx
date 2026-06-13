import cggovt from '../assets/clients/cggovt.webp'
import deloitte from '../assets/clients/deloitte.webp'
import divy from '../assets/clients/Divy Solar Power.webp'
import kpmg from '../assets/clients/kpmg.webp'
import salesforce from '../assets/clients/salesforce.png'

const logos = [cggovt, deloitte, divy, kpmg, salesforce, cggovt, deloitte, divy, kpmg, salesforce]

const Clients = () => {
  const duration = 10 // seconds for full loop

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
       <h2 className="text-4xl text-center md:text-5xl font-bold text-slate-950">OUR CLIENTS</h2>
        <h3 className="text-center text-md text-slate-500 mb-6">Trusted by leading enterprises, government bodies and growing startups</h3>

        <div className="overflow-hidden relative">
          <style>{`
            @keyframes marqueeLeft { from { transform: translateX(0); } to { transform: translateX(-50%); } }
            .marquee-track { animation: marqueeLeft ${duration}s linear infinite; }
            .marquee-track:hover { animation-play-state: paused; }
          `}</style>

          <div className="marquee-track pt-5 flex items-center" style={{ gap: '1.5rem' }}>
            {[...logos, ...logos].map((src, i) => (
              <div key={i} className="flex justify-center items-center flex-shrink-0 w-1/3 sm:w-1/4 md:w-1/6">
                <img src={src} alt={`client-${i}`} className="max-h-12 sm:max-h-16 md:max-h-20 object-contain opacity-95" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
