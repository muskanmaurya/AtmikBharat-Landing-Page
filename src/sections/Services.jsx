
import heroMock from '../assets/hero.png'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import kpmg from '../assets/clients/kpmg.webp'
import deloitte from '../assets/clients/deloitte.webp'

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-extrabold mb-4">Our Expertise</h2>
        <p className="text-center text-sm text-slate-500 mb-10">Transforming businesses with innovative technology solutions to scale faster, automate smarter, and stay ready for tomorrow.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Row 1: Digital Engineering Bento Block */}
          <div className="md:col-span-2 rounded-xl bg-gradient-to-b from-white to-slate-50 p-6 shadow">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">Web & Mobile App Architecture</h3>
                <p className="text-sm text-slate-600 mb-4">Building scalable, maintainable platforms for web and mobile — from concept to production.</p>
                <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
                  <li><strong>Mobile App Development</strong> — Native & Flutter</li>
                  <li><strong>Website & Web App Development</strong> — MERN / React / Next</li>
                  <li><strong>Custom Integrations</strong> — APIs, Webhooks, Plugins</li>
                </ul>
              </div>

              <div className="w-full md:w-56 bg-white rounded-lg shadow-inner p-2 flex items-center justify-center">
                <img src={heroMock} alt="ui-mock" className="object-cover rounded-md" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-xl bg-white p-4 shadow flex-1">
              <h4 className="font-semibold">API & Plugin Systems</h4>
              <p className="text-sm text-slate-600 mt-2">Extend app functionality with secure, versioned APIs and plugin systems for partners and customers.</p>
            </div>

            <div className="rounded-xl bg-white p-4 shadow flex-1">
              <h4 className="font-semibold">Custom Solutions</h4>
              <p className="text-sm text-slate-600 mt-2">Tailor-made systems to meet specific business requirements with a focus on usability and scale.</p>
            </div>
          </div>
        </div>

        {/* Row 2: Intelligence & Automation Bento Block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 items-stretch">
          <div className="flex flex-col gap-6">
            <div className="rounded-xl bg-white p-4 shadow">
              <h4 className="font-semibold">Analytics</h4>
              <p className="text-sm text-slate-600 mt-2">Actionable dashboards and metrics to drive product and growth decisions.</p>
              <div className="mt-3 h-12 bg-slate-50 rounded flex items-center px-3">
                <div className="h-6 w-24 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded" />
                <div className="ml-3 text-xs text-slate-400">Monthly metrics</div>
              </div>
            </div>

            <div className="rounded-xl bg-white p-4 shadow">
              <h4 className="font-semibold">Automation</h4>
              <p className="text-sm text-slate-600 mt-2">Smart workflows that remove manual toil and increase throughput.</p>
            </div>
          </div>

          <div className="md:col-span-2 rounded-xl bg-gradient-to-b from-white to-slate-50 p-6 shadow">
            <h3 className="text-xl font-bold mb-3">AI & Chatbot Ecosystems</h3>
            <p className="text-sm text-slate-600 mb-4">Designing conversational agents, NLU pipelines and MLOps-ready models that integrate with enterprise systems.</p>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
                  <li>AI Chatbots & Virtual Assistants</li>
                  <li>Custom ML Models & Deployment</li>
                  <li>Conversational Flows & Multilingual Support</li>
                </ul>
              </div>

              <div className="w-full md:w-64 bg-white rounded-lg shadow p-3">
                <div className="text-xs text-slate-400 mb-2">WhatsApp — Automation preview</div>
                <div className="bg-slate-50 rounded-lg p-3 h-36 overflow-auto">
                  <div className="text-sm text-slate-700">User: I need to reset my password</div>
                  <div className="mt-3 text-sm text-indigo-700 font-semibold">Bot: I can help — click here to verify your account.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: Infrastructure & Scalability Bento Block */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white p-6 relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">Deep Tech Enabled</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold">Cloud Integration & Gateway Architectures</h3>
              <p className="text-sm text-slate-200 mt-3">Seamless cloud migration, secure gateway patterns, and high-performance AWS integrations to support scaled workloads.</p>

              <ul className="flex flex-wrap gap-3 mt-4">
                <li className="bg-white/10 px-3 py-1 rounded-full text-sm">Cloud Migration</li>
                <li className="bg-white/10 px-3 py-1 rounded-full text-sm">API Gateway</li>
                <li className="bg-white/10 px-3 py-1 rounded-full text-sm">CI / CD</li>
                <li className="bg-white/10 px-3 py-1 rounded-full text-sm">Observability</li>
              </ul>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="grid grid-cols-3 gap-3 bg-white/6 p-3 rounded-lg">
                <img src={reactLogo} alt="react" className="h-8 w-8" />
                <img src={viteLogo} alt="vite" className="h-8 w-8" />
                <img src={kpmg} alt="kpmg" className="h-8 w-8 object-contain" />
                <img src={deloitte} alt="deloitte" className="h-8 w-8 object-contain col-span-2" />
              </div>
              <div className="text-xs text-slate-200">Tech partners & infra</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services