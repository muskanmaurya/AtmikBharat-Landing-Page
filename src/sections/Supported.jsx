import ngis from '../assets/supported/ngis_logo.webp'
import nit from '../assets/supported/nit.webp'
import rubi from '../assets/supported/rubi.webp'
import sfc from '../assets/supported/sfc.webp'
import deloitte from '../assets/clients/deloitte.webp'
import iitd from '../assets/supported/iitd.webp'

const logos = [ngis, deloitte, sfc, rubi, nit, iitd]

const Supported = () => {
  const duration = 10 // seconds for full loop

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-center text-lg font-semibold text-slate-700 mb-2">SUPPORTED BY</h3>
        <p className="text-center text-sm text-slate-500 mb-6">Trusted by leading companies worldwide for reliability and excellence.</p>

        <div className="overflow-hidden relative">
          <style>{`
            @keyframes marqueeLeft { from { transform: translateX(0); } to { transform: translateX(-50%); } }
            .supported-track { animation: marqueeLeft ${duration}s linear infinite; }
            .supported-track:hover { animation-play-state: paused; }
          `}</style>

          <div className="supported-track flex items-center" style={{ gap: '2.0rem' }}>
            {[...logos, ...logos].map((src, i) => (
              <div key={i} style={{ flex: '0 0 20%' }} className="flex justify-center items-center">
                <img src={src} alt={`supported-${i}`} className="max-h-16 object-contain opacity-95" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Supported
