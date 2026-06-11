

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 bg-gradient-to-b from-[#eef6ff] to-[#f7fbff] shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3">
        <div className="flex items-center">
          <a href="#home" className="flex items-center gap-3 no-underline">
            <img src="/logo.jpg" alt="Atmik Bharat" className="w-10 h-10 object-cover rounded-md" />
            <span className="font-semibold text-slate-900 text-lg">atmikbharat</span>
          </a>
        </div>

        <nav className="flex-1 ml-8">
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

        <div className="flex items-center gap-4">
          <button className="text-xl bg-transparent border-0" aria-label="language">🌐</button>
          <a className="text-slate-600 text-sm" href="#login">Log in</a>
          <a className="text-slate-600 text-sm" href="#book">Book demo</a>
          <a className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold text-sm" href="#get-started">Get started →</a>
        </div>
      </div>
    </header>
  )
}

export default Navbar