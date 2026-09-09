import { Hero } from "@/components/hero/Hero"
import Link from "next/link"
import { resources } from "@/lib/data"
import { ResourceCard } from "@/components/cards/ResourceCard"

export default function Home() {
  const featuredResources = resources.slice(0, 3)

  return (
    <>
      <Hero />
      <section className="relative py-32 bg-polaris-navy overflow-hidden border-t border-white/5">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-polaris-cyan/50 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-polaris-teal/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
        
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-px bg-polaris-cyan" />
                <span className="text-polaris-cyan font-mono text-sm tracking-widest uppercase">Latest Updates</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-polaris-ice tracking-tight">
                Featured Research
              </h2>
            </div>
            
            <Link
              href="/research"
              className="group inline-flex items-center gap-2 text-sm font-bold text-polaris-cyan hover:text-polaris-ice transition-colors"
            >
              ACCESS REPOSITORY
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}