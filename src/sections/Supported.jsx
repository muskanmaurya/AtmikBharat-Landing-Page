import ngis from '../assets/supported/ngis_logo.webp'
import nit from '../assets/supported/nit.webp'
import rubi from '../assets/supported/rubi.webp'
import sfc from '../assets/supported/sfc.webp'
import deloitte from '../assets/clients/deloitte.webp'
import iitd from '../assets/supported/iitd.webp'
import salesforce from '../assets/clients/salesforce.png'
import meta from '../assets/supported/meta.png'

// 1. CLEAN SINGLE BASE LIST (Each item appears exactly once)
const UNIQUE_LOGOS = [ngis, deloitte, sfc, rubi, nit, iitd, salesforce, meta];

const Supported = () => {
  // 18s duration gives a perfectly smooth, professional luxury brand pace
  const duration = 18; 

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
       <h2 className="text-4xl text-center md:text-5xl font-bold text-slate-950">SUPPORTED BY</h2>
        <p className="text-center text-md text-slate-500 mt-3 mb-10">Trusted by leading companies worldwide for reliability and excellence.</p>

        {/* Outer Marquee Viewport Enclosure */}
        <div className="relative w-full overflow-hidden my-4 py-4 mask-gradient">
          <style>{`
            /* CRITICAL FIX: Translate to exactly -33.333% to align with our triple clone array math */
            @keyframes marqueeLeft { 
              from { transform: translateX(0); } 
              to { transform: translateX(-33.3333%); } 
            }
            .supported-track { 
              animation: marqueeLeft ${duration}s linear infinite; 
            }
            .supported-track:hover { 
              animation-play-state: paused; 
            }
            /* Adds a high-end fade blur overlay to the left and right screen borders */
            .mask-gradient {
              -webkit-mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
              mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
            }
          `}</style>

          {/* THE TRACK: Tripling the unique array ensures an endless line of trailing elements */}
          <div className="supported-track flex items-center" style={{ gap: '3.5rem' }}>
            {[...UNIQUE_LOGOS, ...UNIQUE_LOGOS, ...UNIQUE_LOGOS].map((src, i) => (
              <div 
                key={i} 
                // Using flex-none prevents the browser from squeezing or stretching your image boxes
                className="flex-none w-40 h-16 flex justify-center items-center"
              >
                <img 
                  src={src} 
                  alt={`supported-logo-${i}`} 
                  className="max-h-20 object-contain opacity-95"                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Supported;