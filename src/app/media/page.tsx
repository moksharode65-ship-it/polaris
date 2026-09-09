"use client"
import Link from "next/link"
import { Play, Image as ImageIcon } from "lucide-react"

export default function Media() {
  const mediaData = [
    {
      id: "m1",
      title: "Aurora Borealis Time-lapse",
      year: 2023,
      type: "video",
      image: "/aurora-thumb.jpg"
    },
    {
      id: "m2",
      title: "Glacier Calving Event",
      year: 2022,
      type: "image",
      image: "/glacier-calving.jpg"
    },
    {
      id: "m3",
      title: "Polar Research Team",
      year: 2024,
      type: "image",
      image: "/research-team.jpg"
    }
  ]

  return (
    <section className="py-24 bg-polaris-navy min-h-screen relative overflow-hidden">
      <div className="absolute top-[20%] left-[-10%] w-[800px] h-[800px] bg-polaris-indigo/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-polaris-cyan" />
              <span className="text-polaris-cyan font-mono text-sm tracking-widest uppercase">Visual Archive</span>
            </div>
            <h2 className="text-5xl font-extrabold text-polaris-ice mb-6">
              Media Gallery
            </h2>
            <p className="text-xl text-polaris-muted max-w-2xl">
              Immersive photos and video documentation from polar research expeditions.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button className="px-5 py-2 rounded-full glass-light text-polaris-cyan border-polaris-cyan/50 text-sm font-medium">All Media</button>
            <button className="px-5 py-2 rounded-full glass text-polaris-muted hover:text-polaris-ice hover:border-polaris-border text-sm font-medium transition-colors">Photos</button>
            <button className="px-5 py-2 rounded-full glass text-polaris-muted hover:text-polaris-ice hover:border-polaris-border text-sm font-medium transition-colors">Videos</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaData.map((item, i) => (
            <div key={item.id} className="group relative rounded-3xl overflow-hidden glass border-white/5 transition-all duration-500 hover:glow-border-hover cursor-pointer">
              <div className="relative aspect-square w-full overflow-hidden bg-polaris-navy">
                <div className={`absolute inset-0 gradient-placeholder-${(i % 3) + 1}`} />
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100 mix-blend-overlay"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                
                {/* Center Play Icon for Video */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-polaris-ice shadow-[0_0_30px_rgba(56,189,248,0.3)] group-hover:scale-110 group-hover:text-polaris-cyan transition-all duration-300">
                      <Play className="w-6 h-6 ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}
                
                <div className="absolute top-4 right-4 z-20">
                  <div className="w-10 h-10 rounded-full glass-light flex items-center justify-center text-polaris-ice backdrop-blur-md">
                    {item.type === 'video' ? <Play className="w-4 h-4" /> : <ImageIcon className="w-4 h-4" />}
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-8 pt-24 bg-gradient-to-t from-polaris-navy via-polaris-navy/80 to-transparent z-10 transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="text-polaris-cyan font-mono text-xs mb-2 block">{item.year}</span>
                  <h3 className="text-2xl font-bold text-polaris-ice group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}