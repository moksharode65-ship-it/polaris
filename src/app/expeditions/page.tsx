"use client"
import Link from "next/link"
import { Compass, Calendar, MapPin } from "lucide-react"

export default function Expeditions() {
  const expeditionsData = [
    {
      id: "e1",
      title: "Polaris 2023 Arctic Expedition",
      dates: "June 15 - August 30, 2023",
      location: "Arctic Ocean",
      status: "Completed",
      image: "/expedition-hero-1.jpg"
    },
    {
      id: "e2",
      title: "Antarctic Research 2022-2023",
      dates: "November 2022 - February 2023",
      location: "South Pole Station",
      status: "Completed",
      image: "/expedition-hero-2.jpg"
    },
    {
      id: "e3",
      title: "Current Polar Initiative 2024",
      dates: "June 1 - September 15, 2024",
      location: "High Arctic",
      status: "Active",
      image: "/expedition-hero-3.jpg"
    }
  ]

  return (
    <section className="py-24 bg-polaris-navy min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-[20%] w-[600px] h-[600px] bg-polaris-cyan/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-polaris-teal" />
            <span className="text-polaris-teal font-mono text-sm tracking-widest uppercase">Field Missions</span>
          </div>
          <h2 className="text-5xl font-extrabold text-polaris-ice mb-6">
            Expedition Directory
          </h2>
          <p className="text-xl text-polaris-muted max-w-2xl">
            Browse active and historical polar research expeditions across regions and time periods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expeditionsData.map((exp, i) => (
            <div key={exp.id} className="group relative rounded-3xl overflow-hidden glass border-white/5 transition-all duration-500 hover:-translate-y-2 hover:glow-border-hover card-3d cursor-pointer">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-polaris-navy">
                <div className={`absolute inset-0 gradient-placeholder-${(i % 3) + 1}`} />
                <img 
                  src={exp.image} 
                  alt={exp.title} 
                  className="relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100 mix-blend-overlay"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                
                <div className="absolute top-4 right-4 z-20">
                  <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full glass-light border ${
                    exp.status === 'Active' ? 'text-polaris-cyan border-polaris-cyan/50 shadow-[0_0_10px_rgba(56,189,248,0.3)] animate-pulse' : 'text-polaris-muted border-polaris-border'
                  }`}>
                    {exp.status}
                  </span>
                </div>
              </div>
              
              <div className="p-8 relative z-10 bg-polaris-card/90 backdrop-blur-md">
                <h3 className="text-2xl font-bold text-polaris-ice mb-4 group-hover:text-white transition-colors">
                  {exp.title}
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-polaris-muted group-hover:text-polaris-ice/80 transition-colors">
                    <Calendar className="w-4 h-4 text-polaris-cyan" />
                    <span>{exp.dates}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-polaris-muted group-hover:text-polaris-ice/80 transition-colors">
                    <MapPin className="w-4 h-4 text-polaris-teal" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-polaris-cyan font-mono text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                    VIEW DETAILS <span>→</span>
                  </span>
                  <div className="w-10 h-10 rounded-full glass-light flex items-center justify-center text-polaris-muted group-hover:bg-polaris-cyan/20 group-hover:text-polaris-cyan transition-colors">
                    <Compass className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}