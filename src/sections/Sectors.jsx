import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const SECTOR_DATA = [
  {
    id: "startups",
    num: "01",
    tabLabel: "Fast-Growth Startups",
    title: "Innovative Technology Platforms for Rapid Scale",
    desc: "Engineered for high-velocity tech startups to deploy clean code architecture and scalable database structures, shifting gracefully from initial MVP architectures toward reliable enterprise-grade system loads.",
    badges: ["SaaS Startups", "AI/ML Innovations", "EdTech Platforms", "HealthTech Systems"]
  },
  {
    id: "smes",
    num: "02",
    tabLabel: "SMEs & Industrial Units",
    title: "Digitizing Workflows and Operational Logistics",
    desc: "Streamline traditional business frameworks, optimize floor resource paths, and accelerate live industrial vendor communication. Implement automated digital tools that enhance daily corporate efficiency and lower running costs.",
    badges: ["SMEs and MSMEs", "Manufacturing Plants", "Logistics & Supply Chain", "Real Estate Channels"]
  },
  {
    id: "retail",
    num: "03",
    tabLabel: "Retail & E-Commerce",
    title: "Conversational Commerce & Unified Retail Retention",
    desc: "Transform how brands communicate and transact with global audiences. Move order pipelines directly onto fast automated channels like WhatsApp, handling promotions, instant updates, and checkout paths natively.",
    badges: ["Retail Brands", "E-Commerce Stores", "FoodTech Portals", "Hospitality Platforms"]
  },
  {
    id: "govtech",
    num: "04",
    tabLabel: "GovTech & Public Utilities",
    title: "Secure Enterprise Systems for Public Services",
    desc: "Formulated using rigorous data protection rules and enterprise security backends. Providing robust tech solutions for citizen applications, tax departments, and municipal resource structures to increase speed and civic compliance.",
    badges: ["Government Departments", "Public Utilities", "Revenue & Tax", "Citizen Services"]
  }
];

// Helper Component for Individual Tracking Cards
const SectorCard = ({ sector, onVisible }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the card is occupying the sweet spot of the viewport, update parent state
        if (entry.isIntersecting) {
          onVisible(sector.id);
        }
      },
      {
        // Adjust threshold and rootMargin so the tab swaps precisely when the container passes the top-middle screen area
        rootMargin: "-25% 0px -65% 0px",
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
      className="min-h-[70vh] flex flex-col justify-center scroll-mt-28 first:mt-0 last:mb-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white border border-slate-100 p-8 md:p-10 rounded-3xl shadow-sm">
        {/* Left: Copywriting Text Info */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
              {sector.num}
            </span>
            <h3 className="text-2xl font-bold text-slate-900 leading-tight">
              {sector.title}
            </h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              {sector.desc}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 pt-4">
            {sector.badges.map((badge, idx) => (
              <span key={idx} className="text-xs bg-slate-50 text-slate-600 border border-slate-100 px-3 py-1.5 rounded-xl font-medium">
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Premium Abstract UI Frames */}
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex items-center justify-center min-h-[300px]">
          <span className="text-xs font-mono text-slate-400">[ Premium {sector.tabLabel} Dashboard Mockup Frame ]</span>
        </div>
      </div>
    </div>
  );
};

export default function Sectors() {
  const [activeTab, setActiveTab] = useState("startups");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24 bg-[#fafafa]">
      <div className="text-center mb-24">
        <h2 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-3">Sectors We Serve</h2>
        <p className="text-3xl font-bold text-slate-950">Chosen by Innovators to Build Smarter Futures</p>
      </div>

      {/* Main Structural Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start relative">
        
        {/* STICKY LEFT COLUMN: Stays locked during vertical scroll tracks */}
        <div className="sticky top-32 flex flex-col space-y-1 border-l border-slate-200 pl-2">
          {SECTOR_DATA.map((sector) => {
            const isSelected = activeTab === sector.id;
            return (
              <button
                key={sector.id}
                onClick={() => {
                  setActiveTab(sector.id);
                  scrollToSection(sector.id);
                }}
                className={`group relative pl-6 py-3 text-left font-medium transition-all duration-300 outline-none ${
                  isSelected ? 'text-indigo-600 font-bold' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {/* Framer Motion Magic Track Indicator Line */}
                {isSelected && (
                  <motion.div
                    layoutId="activeStickyIndicator"
                    className="absolute left-[-9px] top-0 bottom-0 w-[3px] bg-indigo-600 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  />
                )}
                <span className="text-sm tracking-wide block font-mono text-xs opacity-60 mb-0.5">{sector.num}</span>
                <span className="text-sm tracking-wide">{sector.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* SCROLLING RIGHT COLUMN: Containers stack vertically */}
        <div className="md:col-span-3 space-y-12">
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