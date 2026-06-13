import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

const reviews = [
  {
    name: 'Nagendra',
    title: 'Assistant Commissioner, GST',
    stars: 5,
    text: "Atmik Bharat's team delivered a seamless mobile app for GST services. Their precision, reliability, and technical expertise made the process smooth and highly efficient.",
    avatar: null
  },
  {
    name: 'Pushpendra Kumar Meena',
    title: 'Commercial Tax Department',
    stars: 4.5,
    text: "The chatbot solution developed by Atmik Bharat transformed how we engage with taxpayers. It simplified processes and improved service delivery significantly.",
    avatar: null
  },
  {
    name: 'Ravi Shankar',
    title: 'IT Head, C.G. Government',
    stars: 5,
    text: "Working with Atmik Bharat has been a game-changer. Their innovative IT solutions and quick turnaround have helped us digitize key citizen services.",
    avatar: null
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1 }
}

const Reviews = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl text-center md:text-5xl font-bold text-slate-950">WHAT OUR CLIENTS SAY</h2>
          <p className="text-slate-500 mt-2">Genuine stories of trust, success, and satisfaction from our clients.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.article
              key={i}
              className="bg-white rounded-3xl p-6 shadow-lg border border-white/5"
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-semibold">{r.name.split(' ')[0][0]}</div>
                <div>
                  <div className="font-semibold text-slate-800">{r.name}</div>
                  <div className="text-sm text-slate-500">{r.title}</div>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-3" aria-hidden>
                {/* {Array.from({ length: 5 }).map((_, idx) => {
                  const filled = idx < Math.floor(r.stars)
                  const half = r.stars % 1 !== 0 && idx === Math.floor(r.stars)
                  return (
                    <span key={idx} className="text-amber-400">
                      {filled || half ? <Star className="w-4 h-4 inline-block" /> : <Star className="w-4 h-4 inline-block opacity-30" />}
                    </span>
                  )
                })} */}

                {Array.from({ length: 5 }).map((_, idx) => {
  const filled = idx < Math.floor(r.stars);
  const half = r.stars % 1 !== 0 && idx === Math.floor(r.stars);

  return (
    <span key={idx} className="inline-block text-amber-400">
      {filled ? (
        // 1. FULLY FILLED STAR: fill-amber-400 makes the inside solid colored
        <Star className="w-4 h-4 fill-amber-400 stroke-amber-400 inline-block" />
      ) : half ? (
        // 2. PERFECT HALF-FILLED STAR: Multi-layered clip-path frame
        <div className="relative w-4 h-4 inline-block">
          {/* Background Layer: The empty, faint bordered star base */}
          <Star size={16} className="absolute left-0 top-1 text-slate-200 fill-slate-200 stroke-slate-200" />
          {/* Foreground Layer: Clipped at exactly 50% width horizontally */}
          <div className="absolute -inset-1 left-0 top-1 overflow-hidden" style={{ width: '60%' }}>
            <Star size={16} className="text-amber-400 fill-amber-400 stroke-amber-400" />
          </div>
        </div>
      ) : (
        // 3. EMPTY STAR: Smoothly grayed out for unearned rating positions
        <Star className="w-4 h-4 text-slate-200 fill-slate-200 stroke-slate-200 inline-block" />
      )}
    </span>
  );
})}
                <div className="text-sm pt-1.5 text-slate-400 ml-2">{r.stars} / 5</div>
              </div>

              <blockquote className="text-slate-600 italic">“{r.text}”</blockquote>

              <div className="mt-4 text-sm text-slate-500">— <span className="font-semibold text-slate-700">{r.name}</span>, {r.title}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews