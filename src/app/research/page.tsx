"use client"

import { ResourceCard } from "@/components/cards/ResourceCard"
import { searchResources } from "@/lib/search"
import { resources } from "@/lib/data"
import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X, Filter } from "lucide-react"

export default function Research() {
  const [query, setQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState<string>("All")
  
  const filters = ["All", "Climate", "Glaciers", "Oceans", "Wildlife", "Expeditions"]

  const foundResources = useMemo(() => {
    let results = query ? searchResources(query, resources) : resources
    if (activeFilter !== "All") {
      results = results.filter(r => r.topics.some(t => t.toLowerCase().includes(activeFilter.toLowerCase())))
    }
    return results
  }, [query, activeFilter])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section className="min-h-screen bg-polaris-navy pt-12 pb-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-polaris-indigo/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-polaris-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 z-10">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-polaris-cyan" />
            <span className="text-polaris-cyan font-mono text-sm tracking-widest uppercase">Archive</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-polaris-ice mb-6 tracking-tight">
            Research Repository
          </h2>
          <p className="text-xl text-polaris-muted font-light leading-relaxed">
            Browse published research resources, peer-reviewed publications, and raw dataset archives from our polar expeditions.
          </p>
        </div>

        {/* Search & Filter Section */}
        <div className="mb-12 space-y-6">
          <div className="relative group max-w-4xl">
            <div className="absolute inset-0 bg-polaris-cyan/5 blur-xl group-focus-within:bg-polaris-cyan/15 transition-all duration-500 rounded-full" />
            <div className="relative flex items-center glass rounded-full overflow-hidden p-1 border-polaris-border/50 group-focus-within:border-polaris-cyan/50 group-focus-within:shadow-[0_0_20px_rgba(56,189,248,0.1)] transition-all duration-300">
              <div className="pl-6 text-polaris-muted group-focus-within:text-polaris-cyan transition-colors">
                <Search className="w-6 h-6" />
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title, abstract, topics, or authors..."
                className="flex-1 bg-transparent px-6 py-4 text-lg text-polaris-ice placeholder:text-polaris-muted/50 focus:outline-none"
                autoComplete="off"
              />
              <AnimatePresence>
                {query && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
                    onClick={() => setQuery("")}
                    className="mr-3 p-2 rounded-full hover:bg-polaris-crimson/20 text-polaris-muted hover:text-polaris-crimson transition-colors focus:outline-none"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-polaris-muted mr-4">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-mono uppercase tracking-wider">Filters</span>
            </div>
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeFilter === filter 
                    ? 'bg-polaris-cyan/20 border-polaris-cyan text-polaris-ice shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                    : 'glass-light border-transparent text-polaris-muted hover:text-polaris-ice hover:border-polaris-border'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="pt-4 flex items-center justify-between text-sm font-mono text-polaris-muted border-t border-white/5">
            <span>Showing {foundResources.length} results</span>
            {query && <span>Search: "{query}"</span>}
          </div>
        </div>

        {/* Results Grid */}
        {foundResources.length > 0 ? (
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {foundResources.map((resource) => (
              <motion.div key={resource.id} variants={item}>
                <ResourceCard resource={resource} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="py-32 flex flex-col items-center justify-center text-center glass rounded-3xl border-dashed border-white/10"
          >
            <div className="w-16 h-16 rounded-full glass-light flex items-center justify-center text-polaris-muted mb-6">
              <Search className="w-8 h-8 opacity-50" />
            </div>
            <h3 className="text-2xl font-bold text-polaris-ice mb-3">No matches found</h3>
            <p className="text-polaris-muted max-w-md">
              We couldn't find any resources matching your current search and filter criteria.
            </p>
            <button 
              onClick={() => { setQuery(""); setActiveFilter("All"); }}
              className="mt-8 px-6 py-3 rounded-full bg-polaris-ice text-polaris-navy font-bold hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}