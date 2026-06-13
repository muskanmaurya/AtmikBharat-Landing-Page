const Hero = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-5xl mx-auto text-center px-4">
        <div className="inline-flex items-center justify-center mb-6 px-4 py-2 rounded-full bg-indigo-50 text-blue-950 text-sm">25M+ END USERS REACHED/SERVED</div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-slate-900 mb-6">
          Building Scalable IT Solutions <span className="bg-clip-text bg-gradient-to-r from-indigo-800 to-blue-950 text-transparent">for a Digital Future</span>
        </h1>

        <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto mb-8">
          We build everything from apps and websites to AI chatbots and automation—end-to-end IT solutions that empower SMEs, MSMEs, startups, and governments to grow smarter and faster
        </p>

        <div className="flex items-center justify-center gap-4">
          <a href="#contact" className="bg-blue-950 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-indigo-950 transition">Start a Project</a>
          <a href="#services" className="border border-slate-300 text-slate-800 px-5 py-3 rounded-lg hover:bg-slate-50 transition">Book demo</a>
        </div>

        <div className="mt-6 text-sm text-slate-500 flex items-center justify-center gap-6">
          <span className="inline-flex items-center gap-2 text-slate-400">● Rated 4.8/5</span>
        </div>
      </div>
    </section>
  )
}

export default Hero