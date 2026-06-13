
import { Layers, Terminal, BarChart3, Bot, Cpu, Radio, ShieldCheck, ArrowUpRight } from 'lucide-react';

// Production Mesh Background Assets Installed Here
import bgMeshWeb from '../assets/services/bluneon.png';
import bgMeshApi from '../assets/services/indneon.png';
import bgMeshAnalytics from '../assets/services/blueele.png';
import bgMeshAi from '../assets/services/tealgrad.png';

export default function Services() {
  return (
    <div className="w-full pt-20 bg-white py-2 relative overflow-hidden font-sans">
      
      {/* Global Background Ambient Glow Flares */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Header Block Container */}
      <div className="text-center mb-24 relative z-10 px-6">
        {/* <span className="inline-flex items-center justify-center mb-6 px-4 py-2 rounded-full bg-indigo-50 text-blue-950 border-indigo-200 text-sm text-[11px] font-bold uppercase tracking-[0.2em] border ">
          Capabilities Matrix
        </span> */}
        {/* <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight mt-5 max-w-3xl mx-auto leading-[1.1]">
          Engineered to Scale, <span className="bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 text-transparent">Automated to Lead</span>
        </h2> */}
         <h2 className="text-5xl font-bold text-slate-950"> Engineered to Scale,<span className="bg-clip-text bg-gradient-to-r from-indigo-800 to-blue-950 text-transparent">Automated to Lead</span> </h2>
        <p className="text-md text-slate-500 max-w-xl mx-auto mt-4 leading-relaxed">
          Transforming modern architectures with premium, high-fidelity technical systems built for ultimate performance and velocity.
        </p>
      </div>

      {/* Main 3-Column Bento Grid Matrix Configuration */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        
        {/* ROW 1 (Left + Center): CARD 1 — Web & Mobile App Architecture (Spans 2 Columns) */}
        <div className="md:col-span-2 bg-white border border-slate-200/70 rounded-[32px] shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[440px] group hover:shadow-xl hover:border-slate-300/80 transition-all duration-300">
          {/* Production Asset Mesh Render Layer */}
          <img src={bgMeshWeb} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.2] pointer-events-none group-hover:scale-102 transition-transform duration-500" />
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 pointer-events-none hidden lg:block" />
          
          <div className="p-8 md:p-10 max-w-md space-y-5 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/20">
              <Layers size={22} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                Web & Mobile App Architecture
                {/* <ArrowUpRight size={18} className="text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" /> */}
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mt-2">
                Building highly-scalable, production-hardened ecosystems for web and mobile interfaces—engineered to process deep architecture request velocities cleanly.
              </p>
            </div>
            <ul className="space-y-2.5 pt-2 text-sm font-semibold text-slate-700 border-t border-slate-100">
              <li className="flex items-center gap-2">Mobile App Development — <span className="text-slate-500 font-normal">Native & Flutter Ecosystems</span></li>
              <li className="flex items-center gap-2">Website & Web Apps — <span className="text-slate-500 font-normal">MERN / React / Next.js Production Core</span></li>
              <li className="flex items-center gap-2">Premium Custom Integrations — <span className="text-slate-500 font-normal">Secure Restful APIs & Plugins</span></li>
            </ul>
          </div>
          
          {/* Synthesia Window Console Code Box */}
          <div className="absolute -bottom-4 -right-4 w-[280px] h-[250px] bg-slate-950 rounded-tl-2xl p-4 shadow-2xl border-t border-l border-slate-800/80 hidden lg:block transform group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform duration-300 z-10">
            <div className="flex space-x-1.5 mb-3 border-b border-slate-900 pb-2">
              <div className="w-2 h-2 rounded-full bg-rose-500" />
              <div className="w-2 h-2 rounded-full bg-amber-500" />
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
            <pre className="text-[10px] font-mono text-cyan-400 leading-normal">
              <code>
{`const AtmikApp = ({ core }) => {
  return (
    <Stack load="high_velocity">
      <EdgeRoute cluster="active" />
      <Monitor state="secure" />
    </Stack>
  );
};`}
              </code>
            </pre>
          </div>
        </div>

        {/* ROW 1 (Right): CARD 2 — API & Plugin Systems (Spans 1 Column) */}
        <div className="bg-slate-900 text-white rounded-[32px] shadow-sm relative overflow-hidden p-8 md:p-10 flex flex-col justify-between min-h-[440px] group hover:shadow-xl transition-all duration-300">
          {/* Production Asset Mesh Render Layer */}
          <img src={bgMeshApi} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 via-slate-950 to-indigo-900/30 opacity-90 z-0 pointer-events-none" />

          <div className="space-y-5 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 text-purple-400 flex items-center justify-center backdrop-blur-md">
              <Terminal size={22} />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tight">API & Plugin Systems</h3>
              <p className="text-slate-400 text-md leading-relaxed">
                Extend core application functionality with heavily-versioned, highly secure micro-service pathways, unified gateway managers, and structured plug-and-play network adapters.
              </p>
            </div>
          </div>
          
          <div className="pt-6 border-t border-white/10 relative z-10 flex items-center justify-between text-xs font-mono text-purple-300">
            <span>// Gateway Operational</span>
            <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" />
          </div>
        </div>

        {/* ROW 2 (Left): CARD 3 — Analytics Insights (Spans 1 Column) */}
        <div className="bg-white border border-slate-200/70 rounded-[32px] shadow-sm relative overflow-hidden p-8 md:p-10 flex flex-col justify-between min-h-[380px] group hover:shadow-xl hover:border-slate-300/80 transition-all duration-300">
          {/* Production Asset Mesh Render Layer */}
          <img src={bgMeshAnalytics} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50/20 via-white to-blue-50/30 opacity-60 pointer-events-none" />
          
          <div className="space-y-5 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/10">
              <BarChart3 size={22} />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Analytics Insights</h3>
              <p className="text-slate-500 text-md leading-relaxed">
                Actionable data matrix views, custom tracking dashboards, and live analytical telemetry to monitor core operation health metrics and maximize conversion velocity.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-slate-50 border border-slate-100 p-4 rounded-2xl relative z-10 shadow-inner group-hover:bg-white group-hover:border-slate-200 transition-colors">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Conversion Velocity</span>
              <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-lg">+24.8%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div className="w-[78%] h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" />
            </div>
          </div>
        </div>

        {/* ROW 2 (Center + Right): CARD 4 — AI & Chatbot Ecosystems (Spans 2 Columns) */}
        <div className="md:col-span-2 bg-white border border-slate-200/70 rounded-[32px] shadow-sm relative overflow-hidden p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[380px] group hover:shadow-xl hover:border-slate-300/80 transition-all duration-300">
          {/* Production Asset Mesh Render Layer */}
          <img src={bgMeshAi} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none group-hover:scale-102 transition-transform duration-500" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-100 via-teal-100 to-indigo-50/20 pointer-events-none" />

          <div className="lg:col-span-6 space-y-5 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-600/10">
              <Bot size={22} />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">AI & Chatbot Ecosystems</h3>
              <p className="text-slate-500 text-md leading-relaxed">
                Formulating intelligent neural agents, specialized NLU classifications, and custom production MLOps automation layers that map natively onto core enterprise structures.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {['LLM Tuning', 'RAG Vector Database', 'Multilingual Support'].map((badge, idx) => (
                <span key={idx} className="text-[12px] font-bold bg-slate-100 text-slate-600 border border-slate-200/40 px-3 py-1 rounded-lg">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-950 rounded-2xl p-4 space-y-3.5 shadow-2xl border border-slate-800/80 relative z-10 transform group-hover:scale-[1.01] transition-transform duration-300">
            <div className="bg-indigo-600 text-white text-[11px] font-medium p-3 rounded-2xl rounded-tr-none max-w-[85%] ml-auto shadow-md">
              "Automate customer onboarding and deploy secure system protocols."
            </div>
            <div className="bg-slate-900 border border-slate-800 text-slate-200 text-[11px] p-3 rounded-2xl rounded-tl-none max-w-[85%] mr-auto shadow-md space-y-2.5">
              <div className="flex items-center gap-1.5 font-bold text-indigo-400">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                ⚡ Atmik Core Agent
              </div>
              <p className="text-slate-400 leading-relaxed text-[10px]">
                Deployment optimized. Standard system checks verified. Micro-gateways securely loaded across active operational cloud clusters.
              </p>
              <div className="text-[10px] bg-white text-slate-950 font-bold px-3 py-2 rounded-xl text-center hover:bg-slate-100 transition-colors cursor-pointer shadow-sm">
                View Live Deployment Streams
              </div>
            </div>
          </div>
        </div>

        {/* NEW PERFECT ALIGNMENT ROW LAYER BLOCK */}
        {/* ROW 3 (Left): CARD 5 — Custom Solutions (Spans 1 Column) */}
        <div className="bg-white border border-slate-200/70 rounded-[32px] shadow-sm relative overflow-hidden p-8 md:p-10 flex flex-col justify-between min-h-[380px] group hover:shadow-xl hover:border-slate-300/80 transition-all duration-300">
          {/* Subtle Ambient Background Gradient Placeholder Layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-white to-orange-200 opacity-80 pointer-events-none" />
          
          <div className="space-y-5 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center shadow-lg shadow-amber-600/10">
              <Cpu size={22} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">Custom Solutions</h3>
              <p className="text-slate-500 text-md leading-relaxed">
                Tailor-made, robust engineering blueprints created specifically to answer intricate system requirements with a focus on core structural durability and infrastructure balance.
              </p>
            </div>
          </div>
          
          <div className="pt-6 border-t border-slate-100 relative z-10 flex items-center gap-2 text-xs font-semibold text-slate-600">
            <ShieldCheck size={16} className="text-amber-600" />
            <span>100% Custom Tailored Architectures</span>
          </div>
        </div>

        {/* ROW 3 (Center + Right): CARD 6 — Wide Cloud Integration Banner (Spans 2 Columns) */}
        {/* CRITICAL ARCHITECTURAL CHANGE: Shifted from md:col-span-3 to md:col-span-2 to pull it up next to Card 5 */}
        <div className="md:col-span-2 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white p-8 md:p-10 rounded-[32px] shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[380px] border border-slate-800/60 group hover:shadow-xl transition-all duration-300">
          
          <div className="space-y-4 max-w-xl relative z-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-indigo-400 bg-indigo-500/10 border border-indigo-400/20 px-3 py-1 rounded-full">
              Deep Tech Enabled
            </span>
            <h3 className="text-2xl font-bold tracking-tight leading-none mt-2">
              Cloud Integration & Gateway Architectures
            </h3>
            <p className="text-slate-400 text-md leading-relaxed">
              Seamless cloud migrations, custom secure load-balancing gateway patterns, and elite high-performance AWS cloud network frameworks engineered to withstand heavily-scaled application parameters.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {['AWS Cloud Migration', 'Secure API Gateway', 'CI / CD Pipelines', 'Automated Observability'].map((pill, i) => (
                <span key={i} className="text-[12px] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors px-3 py-1.5 rounded-xl text-slate-300 font-semibold">
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Infrastructure Monitoring Network Card Node */}
          <div className="bg-slate-900/80 border border-slate-800/80 p-4 rounded-2xl flex items-center gap-5 relative z-10 w-full sm:w-max mt-4 backdrop-blur-md self-start lg:self-auto">
            <div className="flex items-center gap-3">
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </div>
              <div className="text-left">
                <div className="text-[12px] font-mono font-bold text-slate-100 tracking-wide">AWS-EAST-CLUSTER</div>
                <div className="text-[10px] font-mono text-slate-500 mt-0.5">Live operational socket link established</div>
              </div>
            </div>
            <Radio size={16} className="text-indigo-400 animate-pulse hidden sm:block" />
          </div>
          
          {/* Dynamic Corner Background Light Glow Flare */}
          <div className="absolute right-[-10%] bottom-[-20%] w-[350px] h-[350px] bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none z-0" />
        </div>

      </div>
    </div>
  );
}