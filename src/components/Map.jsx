export default function ContactMap() {
  // Exact Bhilai headquarters address URL-encoded for safety
  const address = "ATMIK BHARAT, H.O, Block-86, Plot-2, Nehru Nagar East, Bhilai, Chhattisgarh 490020";
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=16&ie=UTF8&iwloc=B&output=embed`;

  return (
    <div className="w-full relative rounded-[28px] overflow-hidden border border-slate-200/60 shadow-inner bg-slate-50 group min-h-[350px] md:min-h-[400px]">
      
      {/* Dynamic Asynchronous Loading Overlay State */}
      <div className="absolute inset-0 flex items-center justify-center bg-slate-50 text-slate-400 font-mono text-xs pointer-events-none z-0">
        Initializing Secure Satellite Link...
      </div>

      {/* Production Google Maps Embed Core */}
      <iframe
        title="Atmik Bharat Bhilai Headquarters Location Map"
        src={mapEmbedUrl}
        className="absolute inset-0 w-full h-full border-0 z-10 opacity-95 group-hover:opacity-100 transition-opacity duration-300"
        allowFullScreen=""
        loading="lazy" // Critical for production performance: defers loading until scrolled into view
        referrerPolicy="no-referrer-when-downgrade"
      />
      
    </div>
  );
}