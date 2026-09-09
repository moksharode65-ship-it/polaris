"use client"

import { useState } from "react"
import { Shield, UserPlus, X, Trash2, AlertTriangle } from "lucide-react"

interface UserRecord {
  id: string
  name: string
  email: string
  role: string
  clearance: number
  lastLogin: string
  status: "active" | "suspended"
}

export default function AdminUsers() {
  const [users, setUsers] = useState<UserRecord[]>([
    { id: "u1", name: "Admin", email: "admin@polaris.org", role: "Superadmin", clearance: 5, lastLogin: "2024-09-09T01:00:00Z", status: "active" },
    { id: "u2", name: "Dr. Elena Rivera", email: "e.rivera@polaris.org", role: "Lead Researcher", clearance: 4, lastLogin: "2024-09-08T14:30:00Z", status: "active" },
    { id: "u3", name: "Prof. James Okoro", email: "j.okoro@polaris.org", role: "Field Analyst", clearance: 3, lastLogin: "2024-09-07T09:15:00Z", status: "active" },
    { id: "u4", name: "Dr. Mei Chen", email: "m.chen@polaris.org", role: "Data Scientist", clearance: 3, lastLogin: "2024-08-20T11:00:00Z", status: "suspended" },
  ])

  const [isAddOpen, setIsAddOpen] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
  const [scanPhase, setScanPhase] = useState<"idle" | "scanning" | "approved">("idle")

  const [newUser, setNewUser] = useState({ name: "", email: "", role: "Researcher", clearance: 2 })

  const handleAddUser = () => {
    setScanPhase("scanning")
    setTimeout(() => {
      setScanPhase("approved")
      setTimeout(() => {
        setUsers([...users, {
          id: `u${Date.now()}`,
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
          clearance: newUser.clearance,
          lastLogin: "Never",
          status: "active"
        }])
        setIsAddOpen(false)
        setScanPhase("idle")
        setNewUser({ name: "", email: "", role: "Researcher", clearance: 2 })
      }, 1000)
    }, 2000)
  }

  const handleDelete = (id: string) => {
    setUsers(users.filter(u => u.id !== id))
    setDeleteConfirm(null)
  }

  const toggleStatus = (id: string) => {
    setUsers(users.map(u => u.id === id ? { ...u, status: u.status === "active" ? "suspended" : "active" } : u))
  }

  const getClearanceColor = (level: number) => {
    if (level >= 5) return "text-polaris-crimson"
    if (level >= 4) return "text-polaris-cyan"
    if (level >= 3) return "text-polaris-teal"
    return "text-polaris-muted"
  }

  return (
    <div className="min-h-screen bg-polaris-navy pt-24 px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[800px] h-[800px] bg-polaris-crimson/3 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-polaris-crimson" />
              <span className="text-polaris-crimson font-mono text-sm uppercase tracking-widest">Restricted Access</span>
            </div>
            <h1 className="text-4xl font-extrabold text-polaris-ice">Personnel Clearance</h1>
          </div>
          
          <button 
            onClick={() => setIsAddOpen(true)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-polaris-cyan/50 text-polaris-cyan font-bold hover:bg-polaris-cyan/10 transition-all"
          >
            <UserPlus className="w-5 h-5" />
            REGISTER PERSONNEL
          </button>
        </div>

        {/* Add User Modal with Biometric Scan Animation */}
        {isAddOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-polaris-navy/80 backdrop-blur-sm">
            <div className="w-full max-w-lg bg-polaris-card/90 border border-polaris-cyan/30 rounded-3xl p-8 shadow-[0_0_50px_rgba(56,189,248,0.1)]">
              {scanPhase === "idle" ? (
                <>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-polaris-ice">New Personnel Record</h2>
                    <button onClick={() => setIsAddOpen(false)} className="text-polaris-muted hover:text-white transition-colors"><X className="w-6 h-6" /></button>
                  </div>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-xs font-mono text-polaris-cyan mb-2">FULL NAME</label>
                      <input value={newUser.name} onChange={e => setNewUser({...newUser, name: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-polaris-navy/50 border border-polaris-border text-polaris-ice focus:border-polaris-cyan/50 focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-polaris-cyan mb-2">EMAIL IDENTITY</label>
                      <input value={newUser.email} onChange={e => setNewUser({...newUser, email: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-polaris-navy/50 border border-polaris-border text-polaris-ice focus:border-polaris-cyan/50 focus:outline-none" />
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-mono text-polaris-cyan mb-2">ROLE</label>
                        <select value={newUser.role} onChange={e => setNewUser({...newUser, role: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-polaris-navy/50 border border-polaris-border text-polaris-ice focus:border-polaris-cyan/50 focus:outline-none">
                          <option value="Researcher">Researcher</option>
                          <option value="Lead Researcher">Lead Researcher</option>
                          <option value="Field Analyst">Field Analyst</option>
                          <option value="Data Scientist">Data Scientist</option>
                          <option value="Superadmin">Superadmin</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-polaris-cyan mb-2">CLEARANCE (1-5)</label>
                        <input type="number" min={1} max={5} value={newUser.clearance} onChange={e => setNewUser({...newUser, clearance: parseInt(e.target.value)})} className="w-full px-4 py-3 rounded-xl bg-polaris-navy/50 border border-polaris-border text-polaris-ice focus:border-polaris-cyan/50 focus:outline-none" />
                      </div>
                    </div>
                    <button onClick={handleAddUser} className="w-full mt-4 py-4 rounded-xl bg-polaris-cyan text-polaris-navy font-bold hover:bg-white transition-all">
                      INITIATE BIOMETRIC SCAN
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 space-y-6">
                  {/* Biometric Scan Animation */}
                  <div className="relative w-32 h-32">
                    <div className={`absolute inset-0 rounded-full border-2 ${scanPhase === "approved" ? "border-polaris-teal" : "border-polaris-cyan"} ${scanPhase === "scanning" ? "animate-ping" : ""}`} />
                    <div className={`absolute inset-2 rounded-full border ${scanPhase === "approved" ? "border-polaris-teal/50" : "border-polaris-cyan/50"}`} />
                    <div className={`absolute inset-4 rounded-full ${scanPhase === "approved" ? "bg-polaris-teal/10" : "bg-polaris-cyan/10"} flex items-center justify-center`}>
                      <div className={`w-16 h-16 rounded-full ${scanPhase === "approved" ? "bg-polaris-teal/20" : "bg-polaris-cyan/20"} flex items-center justify-center`}>
                        <Shield className={`w-8 h-8 ${scanPhase === "approved" ? "text-polaris-teal" : "text-polaris-cyan"}`} />
                      </div>
                    </div>
                    {scanPhase === "scanning" && (
                      <div className="absolute inset-0 rounded-full border-t-2 border-polaris-cyan animate-spin" />
                    )}
                  </div>
                  <p className={`font-mono text-sm tracking-widest uppercase ${scanPhase === "approved" ? "text-polaris-teal" : "text-polaris-cyan animate-pulse"}`}>
                    {scanPhase === "scanning" ? "SCANNING BIOMETRIC DATA..." : "ACCESS GRANTED ✓"}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {deleteConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-polaris-navy/80 backdrop-blur-sm">
            <div className="w-full max-w-md bg-polaris-card/90 border border-polaris-crimson/30 rounded-3xl p-8 shadow-[0_0_50px_rgba(239,68,68,0.1)] animate-wiggle">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-polaris-crimson/10 flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-polaris-crimson" />
                </div>
                <h3 className="text-2xl font-bold text-polaris-ice">Confirm Revocation</h3>
                <p className="text-polaris-muted">This action will permanently revoke access for this personnel. This cannot be undone.</p>
                <div className="flex gap-4 pt-4 w-full">
                  <button onClick={() => setDeleteConfirm(null)} className="flex-1 py-3 rounded-xl border border-polaris-border text-polaris-muted font-bold hover:bg-white/5 transition-colors">
                    ABORT
                  </button>
                  <button onClick={() => handleDelete(deleteConfirm)} className="flex-1 py-3 rounded-xl bg-polaris-crimson text-white font-bold hover:bg-red-600 transition-colors">
                    REVOKE ACCESS
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Personnel Table */}
        <div className="glass rounded-3xl border-white/5 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 bg-white/[0.02]">
                  <th className="p-5 text-xs font-mono text-polaris-muted tracking-widest uppercase">Status</th>
                  <th className="p-5 text-xs font-mono text-polaris-muted tracking-widest uppercase">Personnel</th>
                  <th className="p-5 text-xs font-mono text-polaris-muted tracking-widest uppercase">Role</th>
                  <th className="p-5 text-xs font-mono text-polaris-muted tracking-widest uppercase">Clearance</th>
                  <th className="p-5 text-xs font-mono text-polaris-muted tracking-widest uppercase">Last Login</th>
                  <th className="p-5 text-xs font-mono text-polaris-muted tracking-widest uppercase text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className={`border-b border-white/5 hover:bg-white/[0.02] transition-colors ${user.status === "suspended" ? "opacity-50" : ""}`}>
                    <td className="p-5">
                      <button onClick={() => toggleStatus(user.id)} className="cursor-pointer">
                        <span className={`inline-flex w-3 h-3 rounded-full ${
                          user.status === "active" 
                            ? "bg-polaris-teal shadow-[0_0_10px_rgba(45,212,191,0.8)]" 
                            : "bg-polaris-crimson shadow-[0_0_10px_rgba(239,68,68,0.8)]"
                        }`} />
                      </button>
                    </td>
                    <td className="p-5">
                      <div>
                        <p className="text-polaris-ice font-medium">{user.name}</p>
                        <p className="text-polaris-muted text-xs font-mono mt-0.5">{user.email}</p>
                      </div>
                    </td>
                    <td className="p-5 text-polaris-muted text-sm">{user.role}</td>
                    <td className="p-5">
                      <span className={`font-mono font-bold ${getClearanceColor(user.clearance)}`}>
                        LVL-{user.clearance}
                      </span>
                    </td>
                    <td className="p-5 text-polaris-muted text-xs font-mono">{user.lastLogin === "Never" ? "NEVER" : new Date(user.lastLogin).toLocaleDateString()}</td>
                    <td className="p-5 text-right">
                      {user.role !== "Superadmin" && (
                        <button 
                          onClick={() => setDeleteConfirm(user.id)}
                          className="text-polaris-crimson/60 hover:text-polaris-crimson transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
