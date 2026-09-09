"use client"

import { use } from "react"
import { resources } from "@/lib/data"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, FileText, Download, User, Share2, Bookmark } from "lucide-react"

export default function ResearchArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const resource = resources.find(r => r.id === id)
  
  if (!resource) {
    notFound()
  }

  // Basic markdown-to-JSX parser for the content
  const renderContent = (text: string) => {
    return text.split('\n\n').map((block, i) => {
      if (block.startsWith('## ')) {
        return <h2 key={i} className="text-2xl font-bold text-polaris-ice mt-12 mb-6 tracking-tight">{block.replace('## ', '')}</h2>
      }
      return <p key={i} className="text-polaris-muted text-lg leading-relaxed mb-6 font-light">{block}</p>
    })
  }

  return (
    <div className="min-h-screen bg-polaris-navy relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-polaris-cyan/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] left-[-200px] w-[500px] h-[500px] bg-polaris-indigo/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Hero Header */}
      <div className="relative pt-32 pb-16 px-6 lg:px-12 border-b border-white/5 bg-polaris-navy/50 backdrop-blur-3xl">
        <div className="max-w-4xl mx-auto">
          <Link href="/research" className="inline-flex items-center gap-2 text-polaris-cyan hover:text-white transition-colors mb-8 font-mono text-sm tracking-widest uppercase group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Archive
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            {resource.topics?.map(topic => (
              <span key={topic} className="px-3 py-1 text-xs font-semibold rounded-full glass-light text-polaris-ice border border-polaris-cyan/30 shadow-[0_0_10px_rgba(56,189,248,0.1)]">
                {topic}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-polaris-ice mb-6 tracking-tight leading-tight">
            {resource.title}
          </h1>

          <p className="text-xl md:text-2xl text-polaris-muted font-light leading-relaxed mb-8 max-w-3xl border-l-4 border-polaris-teal pl-6">
            {resource.abstract}
          </p>

          <div className="flex flex-wrap items-center gap-8 text-sm font-mono text-polaris-muted pt-8 border-t border-white/10">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-polaris-teal" />
              {resource.year}
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-polaris-cyan" />
              {resource.authors?.join(", ")}
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-polaris-teal animate-pulse" />
              Status: {resource.status?.toUpperCase()}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Article Body */}
        <article className="lg:col-span-8 z-10">
          <div className="prose prose-invert prose-polaris max-w-none">
            {resource.content ? renderContent(resource.content) : (
              <p className="text-polaris-muted text-lg">{resource.description}</p>
            )}
          </div>
        </article>

        {/* Sidebar Actions */}
        <aside className="lg:col-span-4 space-y-6 z-10">
          <div className="glass p-8 rounded-3xl border-polaris-cyan/10 shadow-[0_0_30px_rgba(56,189,248,0.05)] sticky top-32">
            <img 
              src={resource.thumbnail} 
              alt={resource.title} 
              className="w-full aspect-[4/3] object-cover rounded-xl mb-6 opacity-80"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            
            <a href={resource.fileUrl} download className="w-full py-4 rounded-xl bg-polaris-cyan/10 border border-polaris-cyan/30 text-polaris-cyan font-bold hover:bg-polaris-cyan hover:text-polaris-navy transition-all duration-300 flex items-center justify-center gap-3 mb-4 shadow-[0_0_15px_rgba(56,189,248,0.1)] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]">
              <Download className="w-5 h-5" />
              Download Full PDF
            </a>

            <div className="grid grid-cols-2 gap-4">
              <button className="py-3 rounded-xl glass-light text-polaris-muted hover:text-polaris-ice hover:border-polaris-ice/30 transition-all flex items-center justify-center gap-2 text-sm font-medium">
                <Bookmark className="w-4 h-4" />
                Save
              </button>
              <button className="py-3 rounded-xl glass-light text-polaris-muted hover:text-polaris-ice hover:border-polaris-ice/30 transition-all flex items-center justify-center gap-2 text-sm font-medium">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <h4 className="text-polaris-ice font-semibold mb-4 text-sm uppercase tracking-widest font-mono">Linked Expedition</h4>
              <Link href="/expeditions" className="block p-4 rounded-xl glass-light border border-white/5 hover:border-polaris-teal/30 hover:bg-polaris-teal/5 transition-all group">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-polaris-ice text-sm font-medium group-hover:text-white transition-colors">Mission Ref: {resource.expeditionId}</p>
                    <p className="text-polaris-teal text-xs font-mono mt-1">View Logs ↗</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
