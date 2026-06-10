import { useEffect, useState, useRef } from 'react'
import img1 from '../assets/image.png'
import img2 from '../assets/image copy.png'
import img3 from '../assets/image copy 2.png'
import img4 from '../assets/image copy 3.png'

const images = [img1, img2, img3, img4]

const Gallery = () => {
  const [index, setIndex] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    startAuto()
    return stopAuto
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function startAuto() {
    stopAuto()
    intervalRef.current = setInterval(() => {
      setIndex(i => (i + 1) % images.length)
    }, 3000)
  }

  function stopAuto() {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  function goTo(i) {
    setIndex(i)
    startAuto()
  }

  return (
    <section id="gallery" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative w-full h-[420px] md:h-[520px] rounded-2xl overflow-hidden shadow-lg bg-gradient-to-b from-slate-50 to-white">
          {images.map((src, i) => {
            const active = i === index
            return (
              <img
                key={i}
                src={src}
                alt={`gallery-${i}`}
                className={`absolute inset-0 m-auto w-[92%] h-[88%] object-cover rounded-xl transition-all duration-700 ease-in-out transform ${
                  active ? 'opacity-100 translate-y-0 scale-100 z-20' : 'opacity-0 translate-y-6 scale-95 z-10'
                }`}
                style={{ left: '4%', right: '4%', top: '6%', bottom: '6%' }}
                onMouseEnter={stopAuto}
                onMouseLeave={startAuto}
              />
            )
          })}

          <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex items-center gap-3">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-3 h-3 rounded-full transition-all ${i === index ? 'bg-indigo-600 w-4 h-4' : 'bg-slate-300'}`}
                aria-label={`go-to-${i}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery

