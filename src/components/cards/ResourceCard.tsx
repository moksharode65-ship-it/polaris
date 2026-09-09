"use client"

import Image from "next/image"
import Link from "next/link"
import { Bookmark, Calendar, FileText } from "lucide-react"

export interface ResourceCardProps {
  resource: {
    id: string
    title: string
    year: number
    abstract: string
    thumbnail: string
    topics: string[]
    type?: string
    description?: string
    authors?: string[]
    fileUrl?: string
    status?: string
  }
}

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <Link
      href={`/research/${resource.id}`}
      className="group block relative rounded-2xl overflow-hidden glass border border-white/5 transition-all duration-300 cursor-pointer card-3d hover:translate-y-[-6px] hover:glow-border-hover active:scale-[0.98]"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-polaris-navy">
        <div className={`absolute inset-0 gradient-placeholder-${(parseInt(resource.id.replace(/\D/g, '')) % 3) + 1 || 1}`} />
        <img
          src={resource.thumbnail}
          alt={resource.title}
          className="relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 mix-blend-overlay opacity-80 group-hover:opacity-100"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        
        {/* Top Left Badges */}
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          {resource.topics[0] && (
            <span className="px-3 py-1 text-xs font-semibold rounded-full glass-light text-polaris-ice border border-polaris-cyan/30 shadow-[0_0_10px_rgba(56,189,248,0.2)]">
              {resource.topics[0]}
            </span>
          )}
          <span className="px-3 py-1 text-xs font-mono rounded-full glass-light text-polaris-teal border border-polaris-teal/30">
            {resource.year}
          </span>
        </div>

        {/* Top Right Bookmark */}
        <button 
          className="absolute top-4 right-4 z-20 p-2 rounded-full glass-light text-polaris-muted hover:text-polaris-cyan hover:border-polaris-cyan/50 hover:bg-polaris-cyan/10 transition-colors focus:outline-none"
          onClick={(e) => {
            e.preventDefault();
            // Handle save
          }}
        >
          <Bookmark className="h-4 w-4" />
        </button>
      </div>
      
      <div className="p-6 relative z-10 bg-polaris-card/80 backdrop-blur-md">
        <h3 className="text-xl font-semibold text-polaris-ice line-clamp-2 mb-3 group-hover:text-white transition-colors">{resource.title}</h3>
        <p className="text-sm text-polaris-muted line-clamp-2 leading-relaxed mb-4">{resource.abstract}</p>
        
        <div className="flex items-center justify-between text-xs text-polaris-muted pt-4 border-t border-polaris-border/50">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-polaris-cyan" />
              {resource.year}
            </span>
            <span className="flex items-center gap-1.5">
              <FileText className="h-3.5 w-3.5 text-polaris-teal" />
              PDF
            </span>
          </div>
          <span className="font-mono opacity-0 group-hover:opacity-100 transition-opacity text-polaris-cyan flex items-center gap-1">
            VIEW <span className="text-[10px]">↗</span>
          </span>
        </div>
      </div>

      {/* Hover Sheen Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out z-30 pointer-events-none" />
    </Link>
  )
}