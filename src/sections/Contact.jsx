import { MapPin, Mail, Phone, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react';
import Map from '../components/Map';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null); // 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    const formData = new FormData(e.target);
    formData.append("access_key", "3416cbe0-42d1-4f8a-81d8-eaefe6982c9d");
    formData.append("from_name", "Atmik Bharat Inbound Engine");
    formData.append("subject", `New Project Inquiry: ${formData.get("product_type")}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setSubmitResult("success");
        e.target.reset();
      } else {
        setSubmitResult("error");
      }
    } catch (error) {
      console.error("Form transmission fault:", error);
      setSubmitResult("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2 className="text-5xl bg-white mt-20 py-4 text-center md:text-5xl font-bold text-slate-950">Let's Build Something <span className="bg-clip-text bg-gradient-to-r from-indigo-800 to-blue-950 text-transparent">Exceptional Together</span></h2>
    <motion.section
      className="bg-white py-24 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
    >
      {/* 1. Added items-stretch to force equal height capacities on large display states */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

        {/* LEFT: Map + Metadata */}
        {/* 2. Changed to flex flex-col h-full so its contents can share and scale across the height vector dynamically */}
        <div className="lg:col-span-5 flex flex-col h-full justify-between gap-6 lg:gap-0">
          <div>
            {/* <div className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full inline-block">
              Get In Touch
            </div> */}
          </div>

          {/* MAP WRAPPER CONTAINER SLOT */}
          {/* 3. Removed aspect-video and added flex-1 to allow it to dynamically expand up and down */}
          <div className="flex-1 min-h-[300px] lg:my-6 rounded-3xl overflow-hidden border border-slate-200/60 shadow-sm relative z-10 bg-slate-50">
            <Map />
          </div>

          {/* Contact Details Stack */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/50 flex-none"><MapPin className="w-5 h-5 text-slate-600" /></div>
              <div>
                <div className="text-sm text-slate-900 font-bold tracking-tight">Location</div>
                <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">H.O. - Block 86, Nehru Nagar East, Bhilai, Chhattisgarh, India</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">B.O. - B116, Devan Apartment No 1, Navghar, Vasai, Maharashtra</div>
              </div>
            </div>
          
          <div className="flex items-start gap-3"> 
            <div className="flex items-start gap-3">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/50 flex-none"><Mail className="w-5 h-5 text-slate-600" /></div>
              <div>
                <div className="text-sm text-slate-900 font-bold tracking-tight">Email</div>
                <div className="text-xs text-slate-500 mt-0.5">info@atmikbharat.com</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/50 flex-none"><Phone className="w-5 h-5 text-slate-600" /></div>
              <div>
                <div className="text-sm text-slate-900 font-bold tracking-tight">Call</div>
                <div className="text-xs text-slate-500 mt-0.5 font-mono">+91-7218077740 / 30</div>
              </div>
            </div>
          </div>

            <div className="flex items-start gap-3">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/50 flex-none"><Clock className="w-5 h-5 text-slate-600" /></div>
              <div>
                <div className="text-sm text-slate-900 font-bold tracking-tight">Open Hours</div>
                <div className="text-xs text-slate-500 mt-0.5">Monday - Saturday: 10AM - 7PM</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Form Card */}
        {/* 4. Removed the limiting max-w-xl and mx-auto so it natively fills its col-span-7 allocations */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="bg-white border border-slate-200/60 p-8 md:p-10 rounded-[32px] shadow-sm space-y-6 w-full">
            
            {/* Notification Banners */}
            {submitResult === "success" && (
              <div className="p-4 bg-emerald-50 border border-emerald-100 text-emerald-800 text-sm font-medium rounded-xl">
                ✓ Appointment Scheduled! Our engineering team will review your parameters shortly.
              </div>
            )}
            {submitResult === "error" && (
              <div className="p-4 bg-rose-50 border border-rose-100 text-rose-800 text-sm font-medium rounded-xl">
                ✕ Connection anomaly. Please try again or reach out to info@atmikbharat.com directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name & Email Group */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required
                    placeholder="e.g., John Doe" 
                    className="w-full bg-slate-50/50 border border-slate-200/80 rounded-xl px-4 py-3.5 outline-none focus:bg-white focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Your Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    required
                    placeholder="name@company.com" 
                    className="w-full bg-slate-50/50 border border-slate-200/80 rounded-xl px-4 py-3.5 outline-none focus:bg-white focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all text-sm"
                  />
                </div>
              </div>

              {/* Contact Number */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Contact Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required
                  placeholder="+91 XXXXX XXXXX" 
                  className="w-full bg-slate-50/50 border border-slate-200/80 rounded-xl px-4 py-3.5 outline-none focus:bg-white focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all text-sm"
                />
              </div>

              {/* Product Type Dropdown Selector */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Product Interested In</label>
                <select 
                  name="product_type" 
                  className="w-full bg-slate-50/50 border border-slate-200/80 rounded-xl px-4 py-3.5 outline-none focus:bg-white focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all text-sm cursor-pointer"
                >
                  <option value="" disabled selected>Select a product</option>
                  <option value="AI & Chatbot Development">AI & Chatbot Development</option>
                  <option value="Web & Mobile Engineering">Web & Mobile Engineering</option>
                  <option value="Process Automation">Process Automation</option>
                  <option value="Cloud Integration">Cloud Integration</option>
                  <option value="Custom Enterprise Solutions">Custom Enterprise Solutions</option>
                </select>
              </div>

              {/* Query Input Area */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Write your Query</label>
                <textarea 
                  name="message" 
                  required
                  rows={4}
                  placeholder="Tell us about your system scale parameters..." 
                  className="w-full bg-slate-50/50 border border-slate-200/80 rounded-xl px-4 py-3.5 outline-none focus:bg-white focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all text-sm resize-none"
                />
              </div>

              {/* Hidden Honeypot Spam Protection Field */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

              {/* Action Button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-slate-950 text-white font-medium py-4 rounded-xl hover:bg-slate-900 transition-all shadow-sm active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed text-sm font-sans"
              >
                {isSubmitting ? "Processing Request..." : "Schedule an Appointment"}
              </button>

            </form>
          </div>
        </div>

      </div> 
    </motion.section>
  </div>
  )
}

export default Contact;