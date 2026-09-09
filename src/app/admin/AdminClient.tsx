"use client"

import Link from "next/link"
import { Search, Compass, Eye, Shield, Activity, FileText } from "lucide-react"

export default function AdminClient({ session }: { session: any }) {
  return (
    <section className="min-h-screen bg-polaris-navy relative overflow-hidden pt-20">
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-polaris-indigo/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 py-12 z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6 glass p-8 rounded-3xl border-polaris-cyan/20 shadow-[0_0_30px_rgba(56,189,248,0.05)]">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-5 h-5 text-polaris-cyan" />
              <span className="text-polaris-cyan font-mono text-sm tracking-widest uppercase">Admin Security Level</span>
            </div>
            <h2 className="text-4xl font-extrabold text-polaris-ice">
              Command Center
            </h2>
            <p className="text-polaris-muted mt-2">
              Welcome back, {session.user?.name || "Admin"}. Manage content for the POLARIS repository.
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="px-4 py-1.5 rounded-full glass-light border-polaris-teal/30 text-polaris-teal text-sm font-mono flex items-center gap-2 shadow-[0_0_15px_rgba(45,212,191,0.15)]">
              <span className="w-2 h-2 rounded-full bg-polaris-teal animate-pulse" />
              SYSTEM ONLINE
            </span>
            <span className="text-polaris-muted text-xs font-mono">
              ID: {session.user?.email || "admin"}
            </span>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-polaris-ice mb-8 flex items-center gap-3">
          <Activity className="w-6 h-6 text-polaris-cyan" />
          Quick Actions
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Link href="/admin/research" className="group glass p-8 rounded-3xl border-white/5 hover:border-polaris-cyan/50 transition-all duration-300 card-3d hover:-translate-y-2 hover:glow-border-hover cursor-pointer flex flex-col">
            <div className="w-14 h-14 rounded-2xl glass-light flex items-center justify-center mb-6 text-polaris-cyan group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(56,189,248,0.1)] group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]">
              <FileText className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold text-polaris-ice mb-3 group-hover:text-white transition-colors">Research Archives</h3>
            <p className="text-polaris-muted text-sm mb-8 flex-1">Upload new peer-reviewed research papers and datasets to the global repository.</p>
            <div className="w-full text-center rounded-xl bg-polaris-ice/10 text-polaris-ice py-3 font-bold group-hover:bg-polaris-ice group-hover:text-polaris-navy transition-all">
              Initialize Upload
            </div>
          </Link>

          <Link href="/admin/expeditions" className="group glass p-8 rounded-3xl border-white/5 hover:border-polaris-teal/50 transition-all duration-300 card-3d hover:-translate-y-2 hover:glow-border-hover cursor-pointer flex flex-col">
            <div className="w-14 h-14 rounded-2xl glass-light flex items-center justify-center mb-6 text-polaris-teal group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(45,212,191,0.1)] group-hover:shadow-[0_0_20px_rgba(45,212,191,0.3)]">
              <Compass className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold text-polaris-ice mb-3 group-hover:text-white transition-colors">Mission Manager</h3>
            <p className="text-polaris-muted text-sm mb-8 flex-1">Create, update, or archive field expedition records and team logs.</p>
            <div className="w-full text-center rounded-xl border border-polaris-teal/30 text-polaris-teal py-3 font-bold group-hover:bg-polaris-teal/10 transition-all">
              Access Logs
            </div>
          </Link>

          <Link href="/admin/stories" className="group glass p-8 rounded-3xl border-white/5 hover:border-polaris-ice/50 transition-all duration-300 card-3d hover:-translate-y-2 hover:glow-border-hover cursor-pointer flex flex-col">
            <div className="w-14 h-14 rounded-2xl glass-light flex items-center justify-center mb-6 text-polaris-ice group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              <Activity className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold text-polaris-ice mb-3 group-hover:text-white transition-colors">Editorial CMS</h3>
            <p className="text-polaris-muted text-sm mb-8 flex-1">Draft, format, and publish narrative science stories from the field.</p>
            <div className="w-full text-center rounded-xl border border-polaris-ice/30 text-polaris-ice py-3 font-bold group-hover:bg-polaris-ice/10 transition-all">
              Open Editor
            </div>
          </Link>

          <Link href="/admin/users" className="group glass p-8 rounded-3xl border-white/5 hover:border-polaris-crimson/50 transition-all duration-300 card-3d hover:-translate-y-2 hover:glow-border-hover cursor-pointer flex flex-col">
            <div className="w-14 h-14 rounded-2xl glass-light flex items-center justify-center mb-6 text-polaris-crimson group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(239,68,68,0.1)] group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]">
              <Shield className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold text-polaris-ice mb-3 group-hover:text-white transition-colors">Personnel</h3>
            <p className="text-polaris-muted text-sm mb-8 flex-1">Manage high-security access clearances and perform biometric registration.</p>
            <div className="w-full text-center rounded-xl border border-polaris-crimson/30 text-polaris-crimson py-3 font-bold group-hover:bg-polaris-crimson/10 transition-all">
              Access Vault
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-12 border-t border-white/5">
          {/* Live Telemetry Feed */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-polaris-ice flex items-center gap-3">
                Live Telemetry Feed
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-polaris-cyan opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-polaris-cyan"></span>
                </span>
              </h3>
              <span className="text-xs font-mono text-polaris-cyan/70 tracking-widest uppercase">Syncing...</span>
            </div>
            
            <div className="space-y-4">
              <div className="p-5 glass border-l-2 border-l-polaris-teal border-white/5 rounded-2xl flex items-center justify-between group hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full glass-light flex items-center justify-center text-polaris-teal">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-polaris-ice font-medium group-hover:text-white transition-colors">Data stream active: McMurdo Station</p>
                    <p className="text-polaris-muted text-xs mt-1 font-mono">Receiving 2.4 GB/s • Ice core spectroscopy</p>
                  </div>
                </div>
                <div className="text-polaris-teal text-xs font-mono">JUST NOW</div>
              </div>
              
              <div className="p-5 glass border-l-2 border-l-polaris-cyan border-white/5 rounded-2xl flex items-center justify-between group hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full glass-light flex items-center justify-center text-polaris-cyan">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-polaris-ice font-medium group-hover:text-white transition-colors">Admin login detected</p>
                    <p className="text-polaris-muted text-xs mt-1 font-mono">IP: 192.168.1.12 • Clearance Level 5</p>
                  </div>
                </div>
                <div className="text-polaris-cyan text-xs font-mono">T-MINUS 02:45</div>
              </div>
              
              <div className="p-5 glass border-l-2 border-l-polaris-muted border-white/5 rounded-2xl flex items-center justify-between group hover:bg-white/5 transition-colors opacity-70">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full glass-light flex items-center justify-center text-polaris-muted">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-polaris-ice font-medium group-hover:text-white transition-colors">Resource auto-archived</p>
                    <p className="text-polaris-muted text-xs mt-1 font-mono">ID: RES-8901 • Status: Indexed</p>
                  </div>
                </div>
                <div className="text-polaris-muted text-xs font-mono">T-MINUS 12:00</div>
              </div>
            </div>
          </div>

          {/* System Diagnostics */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-polaris-ice mb-4">System Diagnostics</h3>
            <div className="glass p-6 rounded-3xl border-polaris-cyan/10 space-y-6">
              
              <div>
                <div className="flex justify-between text-xs font-mono text-polaris-muted mb-2">
                  <span>SATELLITE UPLINK</span>
                  <span className="text-polaris-cyan">98% STABLE</span>
                </div>
                <div className="h-1.5 w-full bg-polaris-navy/50 rounded-full overflow-hidden">
                  <div className="h-full bg-polaris-cyan w-[98%] shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono text-polaris-muted mb-2">
                  <span>VAULT STORAGE (800 TB)</span>
                  <span className="text-polaris-teal">64% FULL</span>
                </div>
                <div className="h-1.5 w-full bg-polaris-navy/50 rounded-full overflow-hidden">
                  <div className="h-full bg-polaris-teal w-[64%] shadow-[0_0_10px_rgba(45,212,191,0.5)]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono text-polaris-muted mb-2">
                  <span>AI PROCESSING NODE</span>
                  <span className="text-polaris-crimson animate-pulse">OVERLOADED</span>
                </div>
                <div className="h-1.5 w-full bg-polaris-navy/50 rounded-full overflow-hidden">
                  <div className="h-full bg-polaris-crimson w-[89%] shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col gap-3">
                <button className="w-full py-2 rounded-lg border border-polaris-cyan/20 text-polaris-cyan text-xs font-mono hover:bg-polaris-cyan/10 transition-colors">
                  RUN FULL DIAGNOSTIC
                </button>
                <button className="w-full py-2 rounded-lg border border-polaris-crimson/20 text-polaris-crimson text-xs font-mono hover:bg-polaris-crimson/10 transition-colors">
                  EMERGENCY SHUTDOWN
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
