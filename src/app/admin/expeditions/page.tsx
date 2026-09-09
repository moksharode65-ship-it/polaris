"use client"

import { useState, useEffect } from "react"
import { Compass, Plus, X, Upload } from "lucide-react"

export default function AdminExpeditions() {
  const [expeditions, setExpeditions] = useState<any[]>([])
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    year: new Date().getFullYear().toString(),
    image: "/expedition-hero-1.jpg",
    description: ""
  })

  useEffect(() => {
    fetch('/api/expeditions')
      .then(res => res.json())
      .then(data => {
        setExpeditions(data)
        setLoading(false)
      })
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch('/api/expeditions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    
    if (res.ok) {
      const newItem = await res.json()
      setExpeditions([newItem, ...expeditions])
      setIsFormOpen(false)
      setFormData({ title: "", location: "", year: new Date().getFullYear().toString(), image: "/expedition-hero-1.jpg", description: "" })
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-polaris-navy pt-24 px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-polaris-teal/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Compass className="w-4 h-4 text-polaris-teal" />
              <span className="text-polaris-teal font-mono text-sm uppercase tracking-widest">Mission Manager</span>
            </div>
            <h1 className="text-4xl font-extrabold text-polaris-ice">Expedition Logs</h1>
          </div>
          
          <button 
            onClick={() => setIsFormOpen(true)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-polaris-teal/50 text-polaris-teal font-bold hover:bg-polaris-teal/10 hover:shadow-[0_0_20px_rgba(45,212,191,0.2)] transition-all"
          >
            <Plus className="w-5 h-5" />
            ACTIVATE MISSION
          </button>
        </div>

        {/* Modal Form */}
        {isFormOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-polaris-navy/80 backdrop-blur-sm">
            <div className="w-full max-w-2xl bg-polaris-card/90 border border-polaris-teal/30 rounded-3xl p-8 shadow-[0_0_50px_rgba(45,212,191,0.1)]">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-polaris-ice">New Expedition Record</h2>
                <button onClick={() => setIsFormOpen(false)} className="text-polaris-muted hover:text-white transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-polaris-teal mb-2">MISSION NAME</label>
                    <input required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-polaris-navy/50 border border-polaris-border text-polaris-ice focus:border-polaris-teal/50 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-polaris-teal mb-2">LOCATION</label>
                    <input required value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-polaris-navy/50 border border-polaris-border text-polaris-ice focus:border-polaris-teal/50 focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono text-polaris-teal mb-2">MISSION BRIEFING</label>
                  <textarea required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} rows={3} className="w-full px-4 py-3 rounded-xl bg-polaris-navy/50 border border-polaris-border text-polaris-ice focus:border-polaris-teal/50 focus:outline-none" />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-polaris-teal mb-2">YEAR</label>
                    <input required type="number" value={formData.year} onChange={e => setFormData({...formData, year: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-polaris-navy/50 border border-polaris-border text-polaris-ice focus:border-polaris-teal/50 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-polaris-teal mb-2">HERO IMAGE URL</label>
                    <input required value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-polaris-navy/50 border border-polaris-border text-polaris-ice focus:border-polaris-teal/50 focus:outline-none" />
                  </div>
                </div>
                <button disabled={loading} type="submit" className="w-full mt-6 py-4 rounded-xl glass border-polaris-teal text-polaris-teal font-bold hover:bg-polaris-teal/10 transition-all flex items-center justify-center gap-2">
                  <Upload className="w-5 h-5" />
                  {loading ? 'INITIALIZING...' : 'ACTIVATE MISSION'}
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
                  <th className="p-5 text-xs font-mono text-polaris-muted tracking-widest uppercase">Mission Name</th>
                  <th className="p-5 text-xs font-mono text-polaris-muted tracking-widest uppercase">Location</th>
                  <th className="p-5 text-xs font-mono text-polaris-muted tracking-widest uppercase text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan={4} className="p-8 text-center text-polaris-muted">Loading expedition logs...</td></tr>
                ) : expeditions.length === 0 ? (
                  <tr><td colSpan={4} className="p-8 text-center text-polaris-muted">No expedition logs found.</td></tr>
                ) : (
                  expeditions.map((item: any) => (
                    <tr key={item.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="p-5 font-mono text-xs text-polaris-teal/70">{item.id.substring(0, 8)}</td>
                      <td className="p-5 text-polaris-ice font-medium flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-polaris-teal shadow-[0_0_8px_rgba(45,212,191,0.8)]"></span>
                        {item.title}
                      </td>
                      <td className="p-5 text-polaris-muted">{item.location}</td>
                      <td className="p-5 text-right space-x-3">
                        <button className="text-xs font-mono text-polaris-teal hover:text-white transition-colors">EDIT</button>
                        <button className="text-xs font-mono text-polaris-crimson hover:text-white transition-colors">ABORT</button>
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
