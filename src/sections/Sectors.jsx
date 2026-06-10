import { useState } from 'react'
import { TrendingUp, Briefcase, ShoppingCart, ShieldCheck, Database, Server, Smartphone } from 'lucide-react'

const sectorData = [
  {
    id: 's1',
    short: '01 Fast-Growth Startups',
    headline: 'Innovative Technology Platforms for Rapid Scale',
    paragraph:
      'Engineered for high-velocity tech startups to deploy clean code architecture and scalable database structures, shifting gracefully from initial MVP architectures toward reliable enterprise-grade system loads.',
    badges: ['SaaS Startups', 'AI/ML Innovations', 'EdTech Platforms', 'HealthTech Systems'],
    icon: TrendingUp,
  },
  {
    id: 's2',
    short: '02 SMEs & Industrial Units',
    headline: 'Digitizing Workflows and Operational Logistics',
    paragraph:
      'Streamline traditional business frameworks, optimize floor resource paths, and accelerate live industrial vendor communication. Implement automated digital tools that enhance daily corporate efficiency and lower running costs.',
    badges: ['SMEs and MSMEs', 'Manufacturing Plants', 'Logistics & Supply Chain', 'Real Estate Channels'],
    icon: Briefcase,
  },
  {
    id: 's3',
    short: '03 Retail & E-Commerce',
    headline: 'Conversational Commerce & Unified Retail Retention',
    paragraph:
      'Transform how brands communicate and transact with global audiences. Move order pipelines directly onto fast automated channels like WhatsApp, handling promotions, instant updates, and checkout paths natively.',
    badges: ['Retail Brands', 'E-Commerce Stores', 'FoodTech Portals', 'Hospitality Platforms'],
    icon: ShoppingCart,
  },
  {
    id: 's4',
    short: '04 GovTech & Public Utilities',
    headline: 'Secure Enterprise Systems for Public Services',
    paragraph:
      'Formulated using rigorous data protection rules and enterprise security backends. Providing robust tech solutions for citizen applications, tax departments, and municipal resource structures to increase speed and civic compliance.',
    badges: ['Government Departments', 'Public Utilities', 'Revenue & Tax', 'Citizen Services'],
    icon: ShieldCheck,
  },
]

const Pill = ({ children }) => (
  <span className="inline-block bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full">{children}</span>
)

const Sectors = () => {
  const [activeSector, setActiveSector] = useState(sectorData[0].id)

  const active = sectorData.find(s => s.id === activeSector)

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-extrabold mb-2">Sectors We Serve</h2>
        <p className="text-center text-sm text-slate-500 mb-8">Chosen by innovators to build smarter futures.</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Left navigation */}
          <aside className="md:col-span-1">
            <div className="sticky top-28 bg-white rounded-xl p-4 shadow">
              <nav className="flex flex-col gap-3">
                {sectorData.map((s, idx) => {
                  const Icon = s.icon
                  const isActive = s.id === activeSector
                  return (
                    <button
                      key={s.id}
                      onClick={() => setActiveSector(s.id)}
                      className={`relative flex items-center gap-3 w-full text-left rounded-lg px-3 py-3 transition-all ${
                        isActive ? 'bg-indigo-600 text-white shadow-md' : 'bg-transparent text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className={`w-0.5 h-8 mr-3 rounded ${isActive ? 'bg-indigo-400' : 'bg-transparent'}`} />
                      <div className="flex items-center gap-3">
                        <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-indigo-600'}`} />
                        <div>
                          <div className={`text-xs ${isActive ? 'text-indigo-100' : 'text-slate-400'}`}>{s.short.split(' ')[0]}</div>
                          <div className={`text-sm font-medium ${isActive ? 'text-white' : 'text-slate-700'}`}>{s.short.replace(/^[0-9]{2}\s*/,'')}</div>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </nav>
            </div>
          </aside>

          {/* Right content area */}
          <main className="md:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-500">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 transition-colors duration-300">{active.headline}</h3>
                  <p className="text-sm text-slate-600 mb-4">{active.paragraph}</p>

                  <div className="flex flex-wrap gap-3 mt-3">
                    {active.badges.map((b,i) => (
                      <Pill key={i}>{b}</Pill>
                    ))}
                  </div>

                  <div className="mt-6 space-y-3">
                    <a className="inline-flex items-center gap-2 text-indigo-600 font-medium" href="#contact">
                      Learn how we implement this <span className="ml-1">→</span>
                    </a>
                  </div>
                </div>

                <div className="w-full md:w-1/2 lg:w-2/5">
                  {/* Render different mock visuals per active id */}
                  {active.id === 's1' && (
                    <div className="bg-slate-50 rounded-lg p-4 h-64 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">App Builder</div>
                        <div className="text-xs text-slate-400">Live</div>
                      </div>
                      <div className="flex-1 flex items-center justify-center">
                        <div className="w-40 h-36 bg-white rounded-md shadow-inner border border-slate-100" />
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <div>Users: <strong className="text-slate-700">12.3k</strong></div>
                        <div>Health: <strong className="text-green-600">Good</strong></div>
                      </div>
                    </div>
                  )}

                  {active.id === 's2' && (
                    <div className="bg-slate-50 rounded-lg p-3 h-64 overflow-auto">
                      <div className="text-xs text-slate-400 mb-2">Supplier Tracker</div>
                      <div className="space-y-2">
                        {[1,2,3,4,5].map(i=> (
                          <div key={i} className="flex items-center justify-between bg-white p-2 rounded shadow-sm">
                            <div className="text-sm font-medium">Supplier #{i}</div>
                            <div className="text-xs text-slate-500">ETA: <strong>2h</strong></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {active.id === 's3' && (
                    <div className="bg-slate-50 rounded-lg p-3 h-64 flex flex-col justify-between">
                      <div className="text-xs text-slate-400">Mobile Checkout Preview</div>
                      <div className="mx-auto w-40 h-44 bg-white rounded-xl shadow flex flex-col">
                        <div className="flex-1 p-3 text-sm text-slate-700">Customer: Hi, I'd like to buy</div>
                        <div className="p-3 border-t text-sm text-slate-500 flex items-center justify-between">
                          <div className="flex items-center gap-2"><span className="h-2 w-2 bg-green-400 rounded-full"/> Verified</div>
                          <div className="text-indigo-600 font-semibold">Pay →</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {active.id === 's4' && (
                    <div className="bg-slate-50 rounded-lg p-4 h-64">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium">Admin Dashboard</div>
                        <div className="text-xs text-slate-400">Secure</div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white rounded p-3 shadow-sm">
                          <div className="text-xs text-slate-400">Active Sessions</div>
                          <div className="text-lg font-semibold">1,204</div>
                        </div>
                        <div className="bg-white rounded p-3 shadow-sm">
                          <div className="text-xs text-slate-400">Incidents</div>
                          <div className="text-lg font-semibold text-rose-500">2</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  )
}

export default Sectors