
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-b from-[#bfd3ea] to-[#c7dbee] shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center">
          <a href="#home" className="flex items-center gap-3 no-underline">
            <img src="/src/assets/no-bg-logo.png" alt="Atmik Bharat" className="w-10 sm:w-12 md:w-14 object-contain rounded-md" />
            <span className="font-semibold text-slate-900 text-sm sm:text-lg">Atmik Bharat</span>
          </a>
        </div>

        <nav className="flex-1 ml-4">
          <ul className="hidden md:flex gap-6 items-center">
            <li className="relative group">
              <button className="text-slate-600 text-sm px-2 py-1 flex items-center gap-2">Platform <span className="text-xs">▾</span></button>
              <ul className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white rounded-lg shadow-lg min-w-[180px] py-1 z-50">
                <li><a className="block px-3 py-2 text-sm text-slate-800 hover:bg-gray-50" href="#">Overview</a></li>
                <li><a className="block px-3 py-2 text-sm text-slate-800 hover:bg-gray-50" href="#">Features</a></li>
                <li><a className="block px-3 py-2 text-sm text-slate-800 hover:bg-gray-50" href="#">Integrations</a></li>
              </ul>
            </li>

            <li className="relative group">
              <button className="text-slate-600 text-sm px-2 py-1 flex items-center gap-2">Solutions <span className="text-xs">▾</span></button>
              <ul className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white rounded-lg shadow-lg min-w-[160px] py-1 z-50">
                <li><a className="block px-3 py-2 text-sm text-slate-800 hover:bg-gray-50" href="#">By Industry</a></li>
                <li><a className="block px-3 py-2 text-sm text-slate-800 hover:bg-gray-50" href="#">By Use Case</a></li>
              </ul>
            </li>

            <li className="relative group">
              <button className="text-slate-600 text-sm px-2 py-1 flex items-center gap-2">Resources <span className="text-xs">▾</span></button>
              <ul className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white rounded-lg shadow-lg min-w-[160px] py-1 z-50">
                <li><a className="block px-3 py-2 text-sm text-slate-800 hover:bg-gray-50" href="#">Docs</a></li>
                <li><a className="block px-3 py-2 text-sm text-slate-800 hover:bg-gray-50" href="#">Blog</a></li>
                <li><a className="block px-3 py-2 text-sm text-slate-800 hover:bg-gray-50" href="#">Help Center</a></li>
              </ul>
            </li>

            <li><a className="text-slate-600 text-sm px-2 py-1" href="#pricing">Pricing</a></li>
            <li><a className="text-slate-600 text-sm px-2 py-1" href="#enterprise">Enterprise</a></li>
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-xl bg-transparent border-0" aria-label="language">🌐</button>
          <a className="text-slate-600 text-sm" href="#login">Log in</a>
          <a className="text-slate-600 text-sm" href="#book">Book demo</a>
          <a className="bg-indigo-950 text-white px-4 py-2 rounded-lg font-semibold text-sm" href="#get-started">Get started →</a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="menu" className="p-2 rounded-md bg-white/60 backdrop-blur border border-slate-200">
            <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} /></svg>
          </button>
        </div>

        {/* Mobile menu overlay */}
        {open && (
          <div className="fixed inset-0 bg-black/40 z-50 md:hidden" onClick={() => setOpen(false)}>
            <div className="absolute right-4 top-16 w-[86%] max-w-xs bg-white rounded-xl shadow-lg p-4" onClick={(e)=>e.stopPropagation()}>
              <nav className="flex flex-col gap-2">
                <a href="#services" className="py-2 px-3 rounded hover:bg-slate-50">Services</a>
                <a href="#sectors" className="py-2 px-3 rounded hover:bg-slate-50">Sectors</a>
                <a href="#results" className="py-2 px-3 rounded hover:bg-slate-50">Impact</a>
                <a href="#reviews" className="py-2 px-3 rounded hover:bg-slate-50">Reviews</a>
                <a href="#teams" className="py-2 px-3 rounded hover:bg-slate-50">Team</a>
                <a href="#contact" className="py-2 px-3 rounded bg-indigo-950 text-white text-center font-semibold">Get started →</a>
              </nav>
            </div>
          </div>
        )}

      </div>
    </header>
  )
}

export default Navbar