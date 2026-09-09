"use client"

import { motion } from "framer-motion"
import { Search, Compass, Eye, ArrowDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen bg-polaris-navy overflow-hidden flex flex-col justify-center">
      {/* 3D Depth Layers & Abstract background */}
      <div className="absolute top-[-20%] left-[-10%] w-[140%] h-[140%] bg-polaris-deep/40 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute top-[10%] left-[20%] w-[80%] h-[80%] bg-polaris-indigo/10 rounded-full blur-[120px] pointer-events-none animate-breathe mix-blend-screen" />
      <div className="absolute bottom-[-15%] right-[-15%] w-[100%] h-[100%] bg-polaris-cyan/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
          transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) scale(3)',
          transformOrigin: 'top center'
        }}
      />

      <div className="relative max-w-[1400px] mx-auto w-full px-6 lg:px-12 z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1 }}
          className="max-w-5xl"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-light border-polaris-cyan/30 text-polaris-cyan text-sm font-medium mb-8 shadow-[0_0_20px_rgba(56,189,248,0.15)]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-polaris-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-polaris-cyan"></span>
            </span>
            <span>Discover the secrets of Earth's polar regions</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl lg:text-[7rem] font-extrabold tracking-tighter text-white leading-[1.05] mb-6 glow-text"
          >
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-polaris-ice via-polaris-cyan to-polaris-teal animate-shimmer bg-[length:200%_auto]">living archive</span> <br/>
            of polar science
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-polaris-muted leading-relaxed mb-10 max-w-2xl font-light"
          >
            Deep climate data, expedition narratives, and glacier research from Earth's most extreme environments. 
            <span className="block mt-2 font-mono text-sm text-polaris-cyan opacity-80 tracking-wide">
              &gt; RECORD_FOUND: 800,000 YEARS OF CLIMATE HISTORY PRESERVED IN ICE
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-5 mb-12"
          >
            <Link
              href="/research"
              className="group relative inline-flex items-center justify-center rounded-full bg-polaris-ice px-8 py-4 text-sm font-bold text-polaris-navy hover:scale-105 transition-all duration-300 glow-button focus:outline-none overflow-hidden"
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
              <Search className="relative z-10 mr-3 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              <span className="relative z-10">Explore Research</span>
            </Link>
            
            <Link
              href="/expeditions"
              className="group inline-flex items-center justify-center rounded-full glass px-8 py-4 text-sm font-bold text-white hover:bg-polaris-cyan/10 hover:border-polaris-cyan/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] focus:outline-none"
            >
              <Compass className="mr-3 h-5 w-5 text-polaris-muted group-hover:text-polaris-cyan transition-colors group-hover:rotate-45 duration-500" />
              View Expeditions
            </Link>
            
            <Link
              href="/media"
              className="group inline-flex items-center justify-center rounded-full glass px-8 py-4 text-sm font-bold text-white hover:bg-polaris-teal/10 hover:border-polaris-teal/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.2)] focus:outline-none"
            >
              <Eye className="mr-3 h-5 w-5 text-polaris-muted group-hover:text-polaris-teal transition-colors group-hover:scale-110 duration-300" />
              Media Gallery
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator positioned absolutely at the bottom */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-polaris-muted/50"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-float opacity-70" />
      </motion.div>
    </section>
  )
}