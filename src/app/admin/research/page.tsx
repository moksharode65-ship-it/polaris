"use client"

import { useState, useEffect } from "react"
import { Shield, Plus, X, Upload } from "lucide-react"

export default function AdminResearch() {
  const [research, setResearch] = useState<any[]>([])
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  
  const [formData, setFormData] = useState({
    title: "",
    abstract: "",
    year: new Date().getFullYear().toString(),
    thumbnail: "/placeholder-img-1.jpg",
    content: ""
  })

  useEffect(() => {
    fetch('/api/research')
      .then(res => res.json())
      .then(data => {
        setResearch(data)
        setLoading(false)
      })
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch('/api/research', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    
    if (res.ok) {
      const newItem = await res.json()
      setResearch([newItem, ...research])
      setIsFormOpen(false)
      setFormData({ title: "", abstract: "", year: new Date().getFullYear().toString(), thumbnail: "/placeholder-img-1.jpg", content: "" })
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-polaris-navy pt-24 px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-polaris-cyan/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-polaris-cyan" />
              <span className="text-polaris-cyan font-mono text-sm uppercase tracking-widest">Database Manager</span>
            </div>
            <h1 className="text-4xl font-extrabold text-polaris-ice">Research Archives</h1>
          </div>
          
          <button 
            onClick={() => setIsFormOpen(true)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-polaris-cyan text-polaris-navy font-bold hover:bg-white hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all"
          >
            <Plus className="w-5 h-5" />
            PUBLISH RESOURCE
          </button>
        </div>

        {/* Modal Form */}
        {isFormOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-polaris-navy/80 backdrop-blur-sm">
            <div className="w-full max-w-2xl bg-polaris-card/90 border border-polaris-cyan/30 rounded-3xl p-8 shadow-[0_0_50px_rgba(56,189,248,0.1)]">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-polaris-ice">Initialize New Record</h2>
                <button onClick={() => setIsFormOpen(false)} className="text-polaris-muted hover:text-white transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono text-polaris-cyan mb-2">TITLE</label>
                  <input required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-polaris-navy/50 border border-polaris-border text-polaris-ice focus:border-polaris-cyan/50 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-polaris-cyan mb-2">ABSTRACT</label>
                  <textarea required value={formData.abstract} onChange={e => setFormData({...formData, abstract: e.target.value})} rows={3} className="w-full px-4 py-3 rounded-xl bg-polaris-navy/50 border border-polaris-border text-polaris-ice focus:border-polaris-cyan/50 focus:outline-none" />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-polaris-cyan mb-2">YEAR</label>
                    <input required type="number" value={formData.year} onChange={e => setFormData({...formData, year: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-polaris-navy/50 border border-polaris-border text-polaris-ice focus:border-polaris-cyan/50 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-polaris-cyan mb-2">THUMBNAIL URL</label>
                    <input required value={formData.thumbnail} onChange={e => setFormData({...formData, thumbnail: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-polaris-navy/50 border border-polaris-border text-polaris-ice focus:border-polaris-cyan/50 focus:outline-none" />
                  </div>
                </div>
                <button disabled={loading} type="submit" className="w-full mt-6 py-4 rounded-xl glass border-polaris-cyan text-polaris-cyan font-bold hover:bg-polaris-cyan/10 transition-all flex items-center justify-center gap-2">
                  <Upload className="w-5 h-5" />
                  {loading ? 'UPLOADING...' : 'COMMIT TO DATABASE'}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Data Table */}
        <div className="glass rounded-3xl border-white/5 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 bg-white/[0.02]">
                  <th className="p-5 text-xs font-mono text-polaris-muted tracking-widest uppercase">ID</th>
                  <th className="p-5 text-xs font-mono text-polaris-muted tracking-widest uppercase">Title</th>
                  <th className="p-5 text-xs font-mono text-polaris-muted tracking-widest uppercase">Year</th>
                  <th className="p-5 text-xs font-mono text-polaris-muted tracking-widest uppercase text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan={4} className="p-8 text-center text-polaris-muted">Loading archive data...</td></tr>
                ) : research.length === 0 ? (
                  <tr><td colSpan={4} className="p-8 text-center text-polaris-muted">No research records found.</td></tr>
                ) : (
                  research.map((item: any) => (
                    <tr key={item.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="p-5 font-mono text-xs text-polaris-cyan/70">{item.id.substring(0, 8)}</td>
                      <td className="p-5 text-polaris-ice font-medium">{item.title}</td>
                      <td className="p-5 text-polaris-muted">{item.year}</td>
                      <td className="p-5 text-right space-x-3">
                        <button className="text-xs font-mono text-polaris-cyan hover:text-white transition-colors">EDIT</button>
                        <button className="text-xs font-mono text-polaris-crimson hover:text-white transition-colors">DELETE</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
