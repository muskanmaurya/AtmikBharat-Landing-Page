import { MapPin, Mail, Phone, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react';


const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null); // 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    const formData = new FormData(e.target);

    // YOUR LIVE ACCESS KEY INJECTED HERE
    formData.append("access_key", "3416cbe0-42d1-4f8a-81d8-eaefe6982c9d");

    // Premium customization elements for your inbound notifications
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
        e.target.reset(); // Safely clear fields upon successful execution
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
    <motion.section
      className="bg-white py-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* LEFT: Map + Metadata */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <div className="text-sm uppercase text-slate-500">Get In Touch</div>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">Let's Build Something Exceptional Together</h2>
          </div>

          <div className="aspect-video rounded-3xl overflow-hidden border border-slate-100 shadow-sm bg-gradient-to-br from-slate-50 to-white">
            {/* Placeholder map graphic */}
            <div className="w-full h-full flex items-center justify-center text-slate-300">
              <svg width="220" height="140" viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
                <rect x="0" y="0" width="220" height="140" rx="16" fill="#F8FAFC" />
                <path d="M30 100 C50 80, 90 90, 110 70 C130 50, 170 60, 190 40" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 6" />
                <circle cx="110" cy="70" r="8" fill="#0ea5a4" />
              </svg>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100"><MapPin className="w-5 h-5 text-slate-600" /></div>
              <div>
                <div className="text-sm text-slate-900 font-semibold">Location</div>
                <div className="text-sm text-slate-500">H.O. - Block 86, Nehru Nagar East, Bhilai, Chhattisgarh, India</div>
                <div className="text-sm text-slate-500 mt-1">B.O. - B116, Devan Apartment No 1, Navghar, Vasai, Maharashtra</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100"><Mail className="w-5 h-5 text-slate-600" /></div>
              <div>
                <div className="text-sm text-slate-900 font-semibold">Email</div>
                <div className="text-sm text-slate-500">info@atmikbharat.com</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100"><Phone className="w-5 h-5 text-slate-600" /></div>
              <div>
                <div className="text-sm text-slate-900 font-semibold">Call</div>
                <div className="text-sm text-slate-500">+91-7218077740 / 30</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100"><Clock className="w-5 h-5 text-slate-600" /></div>
              <div>
                <div className="text-sm text-slate-900 font-semibold">Open Hours</div>
                <div className="text-sm text-slate-500">Monday - Saturday: 10AM - 7PM</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Form Card */}
        <div className="lg:col-span-7">
        <div className="bg-white border border-slate-100 p-8 md:p-10 rounded-3xl shadow-sm space-y-6 max-w-xl mx-auto">
      
      {/* Premium Notification Banners */}
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
          className="w-full bg-slate-950 text-white font-medium py-4 rounded-xl hover:bg-slate-900 transition-all shadow-sm active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed text-sm"
        >
          {isSubmitting ? "Processing Request..." : "Schedule an Appointment"}
        </button>

      </form>
    </div>
      </div>
          </div> 
    </motion.section>
  )
}

export default Contact
























