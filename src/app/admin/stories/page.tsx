"use client"

import { useState } from "react"
import { BookOpen, Plus, X, Save, Bold, Italic, Heading, List } from "lucide-react"

export default function AdminStories() {
  const [stories, setStories] = useState([
    { id: "s1", title: "The Physics of Ice Cores", author: "Dr. Elena Rivera", date: "2024-03-15", status: "published", content: "How deep ice core samples reveal Earth's climate history over 800,000 years..." },
    { id: "s2", title: "Arctic Wildlife Today", author: "Prof. James Okoro", date: "2024-02-28", status: "draft", content: "Adapting to a rapidly changing polar environment..." },
    { id: "s3", title: "Mapping the Subglacial Lakes", author: "Dr. Mei Chen", date: "2024-01-10", status: "published", content: "Using advanced radar to uncover a hidden world of liquid water..." },
  ])
  
  const [isEditorOpen, setIsEditorOpen] = useState(false)
  const [editingStory, setEditingStory] = useState<any>(null)
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content: "",
    status: "draft"
  })

  const openEditor = (story?: any) => {
    if (story) {
      setEditingStory(story)
      setFormData({ title: story.title, author: story.author, content: story.content, status: story.status })
    } else {
      setEditingStory(null)
      setFormData({ title: "", author: "", content: "", status: "draft" })
    }
    setIsEditorOpen(true)
  }

  const handleSave = () => {
    if (editingStory) {
      setStories(stories.map(s => s.id === editingStory.id ? { ...s, ...formData } : s))
    } else {
      setStories([{ id: `s${Date.now()}`, date: new Date().toISOString().split('T')[0], ...formData }, ...stories])
    }
    setIsEditorOpen(false)
  }

  const handleDelete = (id: string) => {
    setStories(stories.filter(s => s.id !== id))
  }

  return (
    <div className="min-h-screen bg-polaris-navy relative overflow-hidden">
      <div className="absolute top-[30%] left-[-10%] w-[700px] h-[700px] bg-polaris-indigo/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Full-screen Editor Overlay */}
      {isEditorOpen && (
        <div className="fixed inset-0 z-50 bg-polaris-navy flex flex-col">
          {/* Editor Toolbar */}
          <div className="h-16 border-b border-white/5 flex items-center justify-between px-6 glass-nav">
            <div className="flex items-center gap-4">
              <button onClick={() => setIsEditorOpen(false)} className="text-polaris-muted hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
              <span className="text-xs font-mono text-polaris-cyan uppercase tracking-widest">
                {editingStory ? 'EDITING' : 'NEW STORY'} — {formData.status.toUpperCase()}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <select 
                value={formData.status} 
                onChange={e => setFormData({...formData, status: e.target.value})}
                className="bg-polaris-navy/50 border border-polaris-border rounded-lg px-3 py-1.5 text-xs font-mono text-polaris-ice focus:outline-none focus:border-polaris-cyan/50"
              >
                <option value="draft">DRAFT</option>
                <option value="published">PUBLISHED</option>
              </select>
              <button onClick={handleSave} className="flex items-center gap-2 px-5 py-2 rounded-lg bg-polaris-cyan text-polaris-navy text-sm font-bold hover:bg-white transition-colors">
                <Save className="w-4 h-4" />
                SAVE
              </button>
            </div>
          </div>

          {/* Editor Content */}
          <div className="flex-1 flex overflow-hidden">
            {/* Sidebar */}
            <div className="w-80 border-r border-white/5 p-6 space-y-5 overflow-y-auto bg-white/[0.01]">
              <div>
                <label className="block text-xs font-mono text-polaris-cyan mb-2">TITLE</label>
                <input 
                  value={formData.title} 
                  onChange={e => setFormData({...formData, title: e.target.value})}
                  placeholder="Enter story title..."
                  className="w-full px-4 py-3 rounded-xl bg-polaris-navy/50 border border-polaris-border text-polaris-ice text-lg font-bold focus:border-polaris-cyan/50 focus:outline-none placeholder:text-polaris-muted/30" 
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-polaris-cyan mb-2">AUTHOR</label>
                <input 
                  value={formData.author} 
                  onChange={e => setFormData({...formData, author: e.target.value})}
                  placeholder="Author name..."
                  className="w-full px-4 py-3 rounded-xl bg-polaris-navy/50 border border-polaris-border text-polaris-ice focus:border-polaris-cyan/50 focus:outline-none placeholder:text-polaris-muted/30" 
                />
              </div>
              <div className="pt-4 border-t border-white/5">
                <p className="text-xs font-mono text-polaris-muted mb-3">FORMATTING</p>
                <div className="flex gap-2">
                  <button className="w-9 h-9 rounded-lg glass-light flex items-center justify-center text-polaris-muted hover:text-polaris-ice hover:bg-white/10 transition-colors"><Bold className="w-4 h-4" /></button>
                  <button className="w-9 h-9 rounded-lg glass-light flex items-center justify-center text-polaris-muted hover:text-polaris-ice hover:bg-white/10 transition-colors"><Italic className="w-4 h-4" /></button>
                  <button className="w-9 h-9 rounded-lg glass-light flex items-center justify-center text-polaris-muted hover:text-polaris-ice hover:bg-white/10 transition-colors"><Heading className="w-4 h-4" /></button>
                  <button className="w-9 h-9 rounded-lg glass-light flex items-center justify-center text-polaris-muted hover:text-polaris-ice hover:bg-white/10 transition-colors"><List className="w-4 h-4" /></button>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5">
                <p className="text-xs font-mono text-polaris-muted mb-1">WORD COUNT</p>
                <p className="text-2xl font-bold text-polaris-ice">{formData.content.split(/\s+/).filter(Boolean).length}</p>
              </div>
            </div>

            {/* Main Writing Area */}
            <div className="flex-1 p-12 overflow-y-auto">
              <textarea
                value={formData.content}
                onChange={e => setFormData({...formData, content: e.target.value})}
                placeholder="Start writing your story here...

Use this distraction-free editor to craft compelling polar science narratives. Focus on the research, the environment, and the people behind the science."
                className="w-full h-full bg-transparent text-polaris-ice text-lg leading-relaxed resize-none focus:outline-none placeholder:text-polaris-muted/20"
              />
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="pt-24 px-6 lg:px-12 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-polaris-cyan" />
                <span className="text-polaris-cyan font-mono text-sm uppercase tracking-widest">Editorial CMS</span>
              </div>
              <h1 className="text-4xl font-extrabold text-polaris-ice">Science Stories</h1>
            </div>
            
            <button 
              onClick={() => openEditor()}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-polaris-ice text-polaris-navy font-bold hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
            >
              <Plus className="w-5 h-5" />
              WRITE STORY
            </button>
          </div>

          {/* Stories List */}
          <div className="space-y-4">
            {stories.map((story) => (
              <div key={story.id} className="glass rounded-2xl border-white/5 p-6 flex items-center justify-between group hover:border-polaris-cyan/30 transition-all duration-300">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-xl glass-light flex items-center justify-center text-polaris-cyan">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-polaris-ice group-hover:text-white transition-colors">{story.title}</h3>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-polaris-muted text-sm">{story.author}</span>
                      <span className="text-polaris-muted/50 text-xs">•</span>
                      <span className="text-polaris-muted text-xs font-mono">{story.date}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 text-xs font-mono rounded-full ${
                    story.status === 'published' 
                      ? 'text-polaris-teal border border-polaris-teal/30 bg-polaris-teal/10' 
                      : 'text-polaris-muted border border-polaris-border bg-white/5'
                  }`}>
                    {story.status.toUpperCase()}
                  </span>
                  <button 
                    onClick={() => openEditor(story)}
                    className="text-xs font-mono text-polaris-cyan hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                  >
                    EDIT
                  </button>
                  <button 
                    onClick={() => handleDelete(story.id)}
                    className="text-xs font-mono text-polaris-crimson hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                  >
                    DELETE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
