import { useEffect, useState } from 'react'
import img1 from '../assets/gallery/VS1.jpg'
import img2 from '../assets/gallery/Vs2.jpg'
import img3 from '../assets/gallery/VsSol4.png'
import img4 from '../assets/gallery/Vshome.png'
import img5 from '../assets/gallery/VsSol.png'
import img6 from '../assets/gallery/VsSol2.png'
import img7 from '../assets/gallery/VsSol3.png'
import { motion, AnimatePresence } from 'framer-motion';

const SCREENSHOTS = [
  { id: 1, title: "AI Analytics Suite", url: img1 },
  { id: 2, title: "WhatsApp CRM Router", url: img2 },
  { id: 3, title: "GovTech Control Panel", url: img3 },
  { id: 4, title: "Automation Engine Logs", url: img4 },
  { id: 5, title: "AI Analytics Suite", url: img5 },
  { id: 6, title: "WhatsApp CRM Router", url: img6 },
  { id: 7, title: "GovTech Control Panel", url: img7 }
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SCREENSHOTS.length);
    }, 4500);
    return () => clearInterval(slideTimer);
  }, []);

  // Structural Framer Motion Configurations
  const cardVariants = {
    incoming: {
      y: "100%", // Starts completely hidden off the bottom of the frame
      scale: 1,
      opacity: 1
    },
    active: {
      y: "0%", // Glides smoothly to lock at center origin
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60, // Slightly tuned up from 20 for a snappier response
        damping: 18,   
        mass: 1.2      // Lowered mass from 5.2 so it doesn't feel sluggish
      }
    },
    exiting: {
      y: "-15%",   // Subtler upward drift for background stacking depth
      scale: 0.95, // Subtly shrinks into the background layer
      opacity: 0.4, 
      transition: {
        duration: 0.6, // Adjusted from 10 to a fast, production-ready scale
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-5 bg-white">
      
      {/* Structural Header Layout */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-slate-950">Enterprise Software <span className="bg-clip-text bg-gradient-to-r from-indigo-800 to-blue-950 text-transparent">Built for Performance</span></h2>
      </div>

      {/* THE VIEWPORT STAGE: Strictly hides overflowing card movements */}
      <div className="relative aspect-[9/16] sm:aspect-[16/10] md:aspect-[16/9] w-full bg-slate-900 rounded-[32px] border border-slate-200/80 p-3 shadow-2xl overflow-hidden group">
        
        {/* Sleek Inner Browser Chrome Header Frame */}
        <div className="absolute top-0 inset-x-0 h-12 bg-slate-950/80 backdrop-blur-md z-30 px-6 flex items-center justify-between border-b border-b-slate-800">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="text-[11px] font-mono tracking-wide text-slate-500 select-none bg-slate-900 px-4 py-1 rounded-lg border border-slate-800/60">
            atmikbharat.com/solutions/preview
          </div>
          <div className="w-12" />
        </div>

        {/* STACKING CARDS ENCLOSURE CANVAS */}
        <div className="relative w-full h-full pt-12 overflow-hidden rounded-2xl">
          {/* NOTICE: We remove mode="wait" so incoming and exiting render together */}
          <AnimatePresence initial={false}>
            {SCREENSHOTS.map((slide, idx) => {
              const isCurrent = idx === currentIndex;
              const isPrevious = idx === (currentIndex - 1 + SCREENSHOTS.length) % SCREENSHOTS.length;

              // High-performance optimization: Skip rendering stagnant hidden cards
              if (!isCurrent && !isPrevious) return null;

              return (
                <motion.div
                  key={slide.id}
                  variants={cardVariants} // HERE is where your object is read!
                  initial="incoming"      // Links directly to cardVariants.incoming
                  animate={isCurrent ? "active" : "exiting"} // Toggles configuration strings dynamically
                  style={{ zIndex: isCurrent ? 20 : 10 }}     // Forces incoming card over previous card
                  className="absolute inset-0 w-full h-full p-2 origin-top"
                >
                  <div className="w-full h-full rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-950 relative group shadow-lg">
                    <img 
                      src={slide.url} 
                      alt={slide.title} 
                      className="w-full h-full object-cover select-none pointer-events-none"
                    />

                    <div className="absolute bottom-6 left-6 bg-slate-950/80 backdrop-blur-md border border-slate-800 px-4 py-2 rounded-xl">
                      <span className="text-xs font-medium text-slate-300 tracking-wide">{slide.title}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Navigation Step Indicators Footer */}
      <div className="flex justify-center space-x-2.5 mt-8">
        {SCREENSHOTS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'w-8 bg-indigo-950' : 'w-2 bg-slate-200 hover:bg-slate-300'
            }`}
            aria-label={`go-to-${idx}`}
          />
        ))}
      </div>

    </div>
  );
}