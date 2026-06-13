import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, Smartphone, Shield, Layers, 
  CreditCard, HeartPulse, GraduationCap, ShoppingBag, Cpu,
  Truck, Building2, Store, Palmtree, Landmark, Scale, FileText, Bus 
} from 'lucide-react';

// Unified Comprehensive Production Data Array (Featuring explicit structural style mappings)
const SECTOR_DATA = [
  {
    id: "startups",
    num: "01",
    tabLabel: "Fast-Growth Startups",
    title: "Innovative Technology Platforms for Rapid Scale",
    desc: "Engineered for high-velocity tech startups to deploy clean code architecture and scalable database structures, shifting gracefully from initial MVP architectures toward reliable enterprise-grade system loads.",
    
    // Dynamic Global Theme Color Variables for Fast-Growth Startups (Blue Palette)
    themeGradient: "from-blue-600/10 via-blue-500/5 to-transparent",
    iconColor: "text-blue-600 bg-blue-50",
    hoverIconBg: "group-hover:bg-blue-600",
    hoverText: "group-hover:text-blue-600",
    borderGlow: "group-hover:border-blue-200/80",
    
    subCards: [
      {
        title: "Fintech",
        desc: "Automate customer onboarding, loan updates and secure payments through WhatsApp, ensuring faster transactions and better user trust.",
        icon: CreditCard,
        color: "bg-blue-50/20 border-blue-100/50",
        isLarge: true,
        extraUi: (
          <div className="mt-4 bg-white/80 backdrop-blur border border-blue-100/60 p-3 rounded-xl shadow-sm space-y-2 font-mono text-[10px] text-slate-600">
            <div className="flex justify-between border-b border-slate-100 pb-1.5 text-[9px] font-bold text-slate-400">
              <span>TRANSACTION ID</span>
              <span>STATUS</span>
            </div>
            <div className="flex justify-between items-center text-slate-800">
              <span className="font-semibold">#TXN-9021-ATMIK</span>
              <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded-md text-[9px]">SUCCESS</span>
            </div>
          </div>
        )
      },
      {
        title: "HealthTech",
        desc: "Enable appointment booking, teleconsultations, reminders and instant lab report sharing to deliver seamless digital healthcare experiences.",
        icon: HeartPulse,
        color: "bg-blue-50/20 border-blue-100/50",
        isLarge: false
      },
      {
        title: "EdTech",
        desc: "Share study material, conduct tests and provide instant student support—making learning more interactive and accessible.",
        icon: GraduationCap,
        color: "bg-blue-50/20 border-blue-100/50",
        isLarge: false
      },
      {
        title: "FoodTech",
        desc: "Streamline ordering, confirmations and delivery updates while improving retention with personalized offers via WhatsApp.",
        icon: Store,
        color: "bg-blue-50/20 border-blue-100/50",
        isLarge: false
      },
      {
        title: "SaaS & AI/ML Startups",
        desc: "Provide instant onboarding, subscription reminders and AI-driven support to scale B2B customer success.",
        icon: Cpu,
        color: "bg-blue-50/20 border-blue-100/50",
        isLarge: false
      }
    ]
  },
  {
    id: "smes",
    num: "02",
    tabLabel: "SMEs & Industrial Units",
    title: "Digitizing Workflows and Operational Logistics",
    desc: "Streamline traditional business frameworks, optimize floor resource paths, and accelerate live industrial vendor communication. Implement automated digital tools that enhance daily corporate efficiency and lower running costs.",
    
    // Dynamic Global Theme Color Variables for SMEs & Industrial (Green Palette)
    themeGradient: "from-emerald-600/10 via-emerald-500/5 to-transparent",
    iconColor: "text-emerald-600 bg-emerald-50",
    hoverIconBg: "group-hover:bg-emerald-600",
    hoverText: "group-hover:text-emerald-600",
    borderGlow: "group-hover:border-emerald-200/80",
    
    subCards: [
      {
        title: "Retail & E-commerce",
        desc: "Retailers and e-commerce brands can sell smarter on WhatsApp, simplify order handling, and boost customer loyalty with targeted, personalized promotions.",
        icon: ShoppingBag,
        color: "bg-emerald-50/15 border-emerald-100/40",
        isLarge: true,
        extraUi: (
          <div className="mt-4 bg-white/80 backdrop-blur border border-emerald-100/50 p-3 rounded-xl shadow-sm flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium text-slate-700 text-xs">WhatsApp Broadcast Engine</span>
            </div>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">98.4% Open Rate</span>
          </div>
        )
      },
      {
        title: "Manufacturing & Industrial Units",
        desc: "Digitize workflows, track operations in real time, and enable seamless vendor communication on WhatsApp to accelerate production.",
        icon: Layers,
        color: "bg-emerald-50/15 border-emerald-100/40",
        isLarge: false
      },
      {
        title: "Logistics & Supply Chain",
        desc: "Enable shipment tracking, delivery updates and automated notifications for improved supply chain transparency.",
        icon: Truck,
        color: "bg-emerald-50/15 border-emerald-100/40",
        isLarge: false
      },
      {
        title: "Real Estate & Construction",
        desc: "Showcase properties, book site visits, and deliver real-time project updates directly to buyers using intelligent WhatsApp chatbots.",
        icon: Building2,
        color: "bg-emerald-50/15 border-emerald-100/40",
        isLarge: false
      },
      {
        title: "Hospitality & Travel",
        desc: "Simplify booking confirmations, customer queries and personalized promotions, while offering 24/7 WhatsApp support to travelers.",
        icon: Palmtree,
        color: "bg-emerald-50/15 border-emerald-100/40",
        isLarge: false
      }
    ]
  },
  {
    id: "retail",
    num: "03",
    tabLabel: "Retail & E-Commerce",
    title: "Conversational Commerce & Unified Retail Retention",
    desc: "Transform how brands communicate and transact with global audiences. Move order pipelines directly onto fast automated channels like WhatsApp, handling promotions, instant updates, and checkout paths natively.",
    
    // Dynamic Global Theme Color Variables for Retail & E-Commerce (Indigo Palette)
    themeGradient: "from-indigo-600/10 via-indigo-500/5 to-transparent",
    iconColor: "text-indigo-600 bg-indigo-50",
    hoverIconBg: "group-hover:bg-indigo-600",
    hoverText: "group-hover:text-indigo-600",
    borderGlow: "group-hover:border-indigo-200/80",
    
    subCards: [
      {
        title: "Conversational Checkouts",
        desc: "Deploy native end-to-end cart catalog modules directly inside chat channels, letting buyers browse items, edit arrays, and finalize purchase steps in-app.",
        icon: ShoppingBag,
        color: "bg-indigo-50/15 border-indigo-100/40",
        isLarge: true,
        extraUi: (
          <div className="mt-4 bg-indigo-950 text-white p-3 rounded-xl flex items-center justify-between font-mono text-[10px]">
            <span className="text-slate-400">// WhatsApp Store Active</span>
            <span className="text-indigo-300 font-bold">Cart synced with CRM</span>
          </div>
        )
      },
      {
        title: "Retail Brands",
        desc: "Provide immersive brand loyalty updates, tailored dynamic discount coupon tags, and instant transactional feedback pipelines.",
        icon: Store,
        color: "bg-indigo-50/15 border-indigo-100/40",
        isLarge: false
      },
      {
        title: "E-Commerce Stores",
        desc: "Completely eliminate cart abandonment loops by deploying automated message dispatch chains and flash-sale retention flows.",
        icon: Smartphone,
        color: "bg-indigo-50/15 border-indigo-100/40",
        isLarge: false
      },
      {
        title: "FoodTech Portals",
        desc: "Incorporate synchronous real-time location coordinate mapping tracking, rapid order validation points, and interactive menus.",
        icon: Layers,
        color: "bg-indigo-50/15 border-indigo-100/40",
        isLarge: false
      },
      {
        title: "Hospitality Platforms",
        desc: "Handle automated room/table booking arrangements, digital confirmation documents, and contextual instant support triggers.",
        icon: Palmtree,
        color: "bg-indigo-50/15 border-indigo-100/40",
        isLarge: false
      }
    ]
  },
  {
    id: "govtech",
    num: "04",
    tabLabel: "GovTech & Public Utilities",
    title: "Secure Enterprise Systems for Public Services",
    desc: "Formulated using rigorous data protection rules and enterprise security backends. Providing robust tech solutions for citizen applications, tax departments, and municipal resource structures to increase speed and civic compliance.",
    
    // Dynamic Global Theme Color Variables for GovTech (Slate/Navy Palette)
    themeGradient: "from-slate-700/10 via-slate-500/5 to-transparent",
    iconColor: "text-slate-800 bg-slate-100",
    hoverIconBg: "group-hover:bg-slate-800",
    hoverText: "group-hover:text-slate-800",
    borderGlow: "group-hover:border-slate-400/50",
    
    subCards: [
      {
        title: "Public Utilities",
        desc: "Send usage alerts, bill notifications and outage updates, while offering real-time grievance redressal and enabling instant digital payments on WhatsApp.",
        icon: Landmark,
        color: "bg-slate-100/40 border-slate-200/60",
        isLarge: true,
        extraUi: (
          <div className="mt-4 bg-slate-50 border border-slate-200/60 p-3 rounded-xl flex items-center justify-between text-[10px]">
            <div className="flex items-center gap-2 text-slate-700">
              <Shield size={12} className="text-slate-800" />
              <span className="font-semibold font-mono">ENCRYPTED CITIZEN PORTAL</span>
            </div>
            <span className="text-slate-400 font-mono">SSL Secure Connection</span>
          </div>
        )
      },
      {
        title: "Revenue & Tax Departments",
        desc: "Simplify tax reminders, filing assistance, payment alerts and grievance resolution to boost compliance and efficiency.",
        icon: FileText,
        color: "bg-slate-100/40 border-slate-200/60",
        isLarge: false
      },
      {
        title: "Citizen Services",
        desc: "provide access to birth/death certificates, status tracking, license renewals and permits directly through WhatsApp.",
        icon: Scale,
        color: "bg-slate-100/40 border-slate-200/60",
        isLarge: false
      },
      {
        title: "Education Departments",
        desc: "Support form registrations, exam result checks, reminder notifications and center location details—making education services more accessible on WhatsApp.",
        icon: GraduationCap,
        color: "bg-slate-100/40 border-slate-200/60",
        isLarge: false
      },
      {
        title: "Transport & Mobility",
        desc: "Provide ticket booking, pass renewals, traffic updates, and complaint redressal with automated WhatsApp services.",
        icon: Bus,
        color: "bg-slate-100/40 border-slate-200/60",
        isLarge: false
      }
    ]
  }
];

const SectorCard = ({ sector, onVisible }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible(sector.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0
      }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [sector.id, onVisible]);

  return (
    <div 
      id={sector.id} 
      ref={cardRef}
      className="min-h-screen flex flex-col justify-start pt-16 pb-24 scroll-mt-24 border-b border-slate-100 last:border-none"
    >
      {/* 1. Primary Copywriting Intro Box */}
      <div className="bg-white border border-slate-200/60 p-8 md:p-10 rounded-[32px] shadow-sm relative overflow-hidden mb-8 transition-all duration-300 hover:shadow-md">
        {/* subtle theme gradient overlay (keeps typography and layout unchanged) */}
        <div className={`absolute inset-0 bg-gradient-to-br ${sector.themeGradient} pointer-events-none z-0`} />

        <div className="max-w-2xl space-y-4 relative z-10">
          <div className="flex items-center gap-3">
            <span className={`text-[11px] font-mono font-bold px-3 py-1 rounded-full ${sector.iconColor}`}>
              {sector.num}
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-sans">
              Market Segment Focus
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-950 tracking-tight leading-tight">
            {sector.title}
          </h3>
          <p className="text-slate-500 leading-relaxed text-xs md:text-sm">
            {sector.desc}
          </p>
        </div>
      </div>

      {/* 2. THE HIGH-CONTRAST SECTOR SUB-CARD MATRIX */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sector.subCards.map((sub, idx) => {
          const SubIcon = sub.icon;
          return (
            <div
              key={idx}
              // subtle theme gradient behind each sub-card (no typography/layout changes)
              className={`rounded-3xl border p-6 md:p-7 flex flex-col justify-between transition-all duration-300 relative overflow-hidden hover:shadow-lg group ${
                sub.isLarge ? 'md:col-span-2 lg:col-span-2 min-h-[220px]' : 'min-h-[200px]'
              } ${sub.color} ${sector.borderGlow}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${sector.themeGradient} pointer-events-none z-0`} />
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  {/* ICON BOX LAYER: Inverts style tokens perfectly upon reaching general card hover states */}
                  <div className={`w-10 h-10 rounded-xl bg-white border border-slate-200/80 text-slate-800 flex items-center justify-center shadow-sm group-hover:text-white ${sector.hoverIconBg} transition-all duration-300`}>
                    <SubIcon size={18} />
                  </div>
                  <ArrowUpRight size={16} className={`text-slate-300 opacity-0 group-hover:opacity-100 ${sector.hoverText} transition-all duration-300`} />
                </div>
                
                <div className="space-y-1.5">
                  {/* TEXT HEADER LAYER: Shifts color smoothly using sector.hoverText context properties */}
                  <h4 className={`text-base font-bold text-slate-900 tracking-tight ${sector.hoverText} transition-colors`}>
                    {sub.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {sub.desc}
                  </p>
                </div>
              </div>

              {/* Dynamic UI Engine Placeholder Wrapper Injection */}
              {sub.extraUi && (
                <div className="w-full pt-2 relative z-10">
                  {sub.extraUi}
                </div>
              )}
            </div>
          );
        })}


      </div>

    </div>
  );
};

export default function Sectors() {
  const [activeTab, setActiveTab] = useState("startups");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 pt-28  bg-[#fafafa]">
      
      {/* Structural Master Title Header */}
      <div className="text-center mb-28">
     <p className="text-4xl md:text-5xl font-bold text-slate-950 tracking-tight">
          Chosen by Innovators to Build <br/>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-800 to-blue-950">
            Smarter Futures
          </span>
        </p>
      </div>

      {/* Primary Scrollspy Interface Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start relative">
        
        {/* LEFT COLUMN: Sticky Navigation Sidebar (Locked on scroll) */}
        <div className="sticky top-36 flex flex-col space-y-2.5 border-l border-slate-200 pl-3 md:col-span-1 hidden md:flex">
          {SECTOR_DATA.map((sector) => {
            const isSelected = activeTab === sector.id;
            return (
              <button
                key={sector.id}
                onClick={() => {
                  setActiveTab(sector.id);
                  scrollToSection(sector.id);
                }}
                className={`group relative pl-5 py-3.5 text-left font-medium transition-all duration-300 outline-none select-none ${
                  isSelected ? 'text-indigo-900 font-bold' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {/* Framer Motion Layout Line Tracking Dot */}
                {isSelected && (
                  <motion.div
                    layoutId="activeStickyIndicator"
                    className="absolute left-[-14px] top-0 bottom-0 w-[3px] bg-indigo-600 rounded-full shadow-sm shadow-indigo-600/30"
                    transition={{ type: "spring", stiffness: 320, damping: 26 }}
                  />
                )}
                <span className="text-[10px] font-mono font-semibold tracking-wider block opacity-50 mb-0.5">{sector.num}</span>
                <span className="text-xs lg:text-sm tracking-wide">{sector.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* RIGHT COLUMN: The Comprehensive, Dynamic Vertical Layout Block Stack */}
        <div className="col-span-1 md:col-span-3 space-y-4">
          {SECTOR_DATA.map((sector) => (
            <SectorCard 
              key={sector.id} 
              sector={sector} 
              onVisible={(id) => setActiveTab(id)} 
            />
          ))}
        </div>

      </div>
      
    </div>
  );
}