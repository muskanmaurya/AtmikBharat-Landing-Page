       import React from 'react'
       
       const ContactForm = () => {
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
           <>
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
           </>
         )
       }
       
       export default ContactForm
       
       
       
       
      