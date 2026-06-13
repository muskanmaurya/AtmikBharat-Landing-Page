import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa'
import { Phone, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#071120] text-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid  grid-cols-1 md:grid-cols-4 gap-8">
          <div>

            {/* THE BRAND BOX CONTAINER: Vertically stacked layout with controlled max-width */}
<div className="flex items-start mb-4 flex-col gap-3 max-w-sm select-none">
  
  {/* LINE 1: INLINE LOGO + TEXT TRACK (Replicating Synthesia's signature alignment) */}
  <div className="flex items-center gap-2">
    {/* Explicit height definition prevents layout shifts during image loading */}
    <img 
      src="/src/assets/no-bg-logo.png" 
      alt="Atmik Bharat Logo" 
      className="h-10 sm:h-12 w-auto object-contain brightness-100" 
    />
    
    {/* Company Name sitting perfectly flush horizontally with the logo center */}
    <span className="text-white font-bold text-xl tracking-tight leading-none pt-[1px]">
      Atmik Bharat
    </span>
  </div>

  {/* LINE 2: SUBSIDIARY DESIGNATION METADATA TEXT */}
  <div className="text-sm font-bold uppercase tracking-wider -py-8 text-slate-200 font-mono">
    Industries Private Limited
  </div>

  {/* LINE 3: DESCRIPTION BLOCK (Breaks cleanly to its own line without warping your logo row) */}
  <p className="text-sm text-slate-300 leading-relaxed font-normal">
    Your partner in building innovative, reliable, and scalable technology for startups, enterprises, and government.
  </p>

</div>

            <div className="flex items-center gap-3 mt-4">
              <a href="#" aria-label="twitter" className="p-2 rounded-full border border-white/10 hover:bg-white/5">
                {/* <FaTwitter className="w-5 h-5 text-slate-200" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30" color="white" fill="currentColor">
                  <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                </svg>
              </a>
              <a href="#" aria-label="facebook" className="p-2 rounded-full border border-white/10 hover:bg-white/5">
                <FaFacebook className="w-5 h-5 text-slate-200" />
              </a>
              <a href="#" aria-label="instagram" className="p-2 rounded-full border border-white/10 hover:bg-white/5">
                <FaInstagram className="w-5 h-5 text-slate-200" />
              </a>
              <a href="#" aria-label="linkedin" className="p-2 rounded-full border border-white/10 hover:bg-white/5">
                <FaLinkedin className="w-5 h-5 text-slate-200" />
              </a>
              <a href="#" aria-label="youtube" className="p-2 rounded-full border border-white/10 hover:bg-white/5">
                <FaYoutube className="w-5 h-5 text-slate-200" />
              </a>
              <a href="#" aria-label="github" className="p-2 rounded-full border border-white/10 hover:bg-white/5">
                <FaGithub className="w-5 h-5 text-slate-200" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-100 font-semibold mb-3">Useful Links</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#Home" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About us</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Terms of service</a></li>
              <li><a href="#" className="hover:text-white">Privacy policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-100 font-semibold mb-3">Our Services</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white">Web Design</a></li>
              <li><a href="#" className="hover:text-white">Web Development</a></li>
              <li><a href="#" className="hover:text-white">Product Management</a></li>
              <li><a href="#" className="hover:text-white">AI & Automation</a></li>
              <li><a href="#" className="hover:text-white">Cloud Integration</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-100 font-semibold mb-3">Contact Us</h4>
            <div className="text-sm text-slate-300 space-y-2">
              <div>H.O.- Block 86, Nehru Nagar</div>
              <div>East-490020, Bhilai</div>
              <div>Chhattisgarh, India</div>
              <div className="mt-3 flex items-center gap-2"><Phone className="w-4 h-4" /> <a href="tel:+917218077740" className="hover:text-white">+91-7218077740</a></div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> <a href="mailto:info@atmikbharat.com" className="hover:text-white">info@atmikbharat.com</a></div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/6 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-400">
            <div>© {new Date().getFullYear()} Atmik Bharat. All rights reserved.</div>
            <div className="mt-3 md:mt-0">Designed with care • <a href="#" className="hover:text-white">Privacy</a> • <a href="#" className="hover:text-white">Security</a></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer