"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { LogIn } from "lucide-react"

export function AuthForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [shake, setShake] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      })

      if (res?.error) {
        setError("Invalid credentials. Access denied.")
        setShake(true)
        setTimeout(() => setShake(false), 500)
      } else {
        router.push("/")
        router.refresh()
      }
    } catch (err) {
      setError("System failure. Try again.")
      setShake(true)
      setTimeout(() => setShake(false), 500)
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full max-w-md p-8 rounded-3xl glass transition-all duration-300 ${shake ? 'animate-wiggle border-polaris-crimson/50 shadow-[0_0_20px_rgba(239,68,68,0.2)]' : 'border-polaris-cyan/10 shadow-[0_0_30px_rgba(56,189,248,0.05)]'}`}
    >
      <div className="flex flex-col items-center mb-8">
        <div className="w-12 h-12 rounded-full glass-light flex items-center justify-center mb-4 text-polaris-cyan border-polaris-cyan/30">
          <LogIn className="h-6 w-6" />
        </div>
        <h2 className="text-3xl font-extrabold text-polaris-ice text-center tracking-tight">
          System Access
        </h2>
      </div>

      <AnimatePresence>
        {error && (
          <motion.div 
            initial={{ opacity: 0, height: 0, marginBottom: 0 }}
            animate={{ opacity: 1, height: 'auto', marginBottom: 16 }}
            exit={{ opacity: 0, height: 0, marginBottom: 0 }}
            className="overflow-hidden"
          >
            <div className="p-3 rounded-xl glass-light border-polaris-crimson/50 text-polaris-crimson text-sm text-center flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-polaris-crimson animate-pulse" />
              {error}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-xs font-mono text-polaris-cyan mb-2 uppercase tracking-widest opacity-80">
            Identity / Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-polaris-navy/50 border border-polaris-border text-polaris-ice focus:outline-none focus:border-polaris-cyan/50 focus:shadow-[0_0_15px_rgba(56,189,248,0.15)] transition-all placeholder:text-polaris-muted/50"
            placeholder="admin@polaris.org"
          />
        </div>
        <div>
          <label className="block text-xs font-mono text-polaris-cyan mb-2 uppercase tracking-widest opacity-80">
            Passkey / Token
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-polaris-navy/50 border border-polaris-border text-polaris-ice focus:outline-none focus:border-polaris-cyan/50 focus:shadow-[0_0_15px_rgba(56,189,248,0.15)] transition-all placeholder:text-polaris-muted/50"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-8 py-3.5 px-4 bg-polaris-ice text-polaris-navy font-bold rounded-xl hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed group flex items-center justify-center gap-2"
        >
          {loading ? (
            "Authenticating..."
          ) : (
            <>
              Initialize Session
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </>
          )}
        </button>
      </form>
    </motion.div>
  )
}
