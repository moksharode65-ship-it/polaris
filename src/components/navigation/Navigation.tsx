"use client"

import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, User } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const { data: session } = useSession()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const links = [
    { href: "/", label: "Home" },
    { href: "/research", label: "Research" },
    { href: "/expeditions", label: "Expeditions" },
    { href: "/media", label: "Media" },
    { href: "/stories", label: "Stories" },
  ]

  const isActive = (href: string) => pathname === href || (href === "/" && pathname === "/")

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-[1400px] mx-auto h-20 flex items-center justify-between px-6 lg:px-12">
        {/* Brand */}
        <Link href="/" className="group flex items-center gap-3 z-50">
          <div className="relative w-8 h-8 flex items-center justify-center">
            {/* Ice Star Symbol */}
            <svg
              className="w-8 h-8 text-polaris-ice transition-transform duration-1000 ease-out group-hover:rotate-180"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" fillOpacity="0.2" />
            </svg>
            <div className="absolute inset-0 rounded-full bg-polaris-cyan/0 group-hover:animate-ripple" />
          </div>
          <span className="text-xl font-bold tracking-widest text-polaris-ice">POLARIS</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2">
          {links.map((link) => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-[2px] ${
                  active ? "text-white" : "text-polaris-muted/80 hover:text-white"
                }`}
              >
                {active && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-polaris-cyan/10 border border-polaris-cyan/30 shadow-[0_0_15px_rgba(56,189,248,0.15)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
                {/* Hover indicator pill */}
                {!active && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-polaris-cyan/50 shadow-[0_0_8px_rgba(56,189,248,0.8)] transition-all duration-300 group-hover:w-1/2 opacity-0 hover:opacity-100 hover:w-3/4" />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            )
          })}
        </div>

        {/* Auth / Profile & Mobile Menu Toggle */}
        <div className="flex items-center gap-4 z-50">
          {session ? (
            <div className="flex items-center gap-3">
              <Link href="/admin" className="hidden md:block text-sm font-medium text-polaris-cyan hover:text-white transition-colors">
                Admin
              </Link>
              <button
                onClick={() => signOut()}
                className="px-4 py-2 rounded-full glass-light text-white text-sm font-medium hover:bg-white/10 transition-colors border border-polaris-border"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="group flex items-center justify-center w-10 h-10 rounded-full glass hover:bg-polaris-cyan/10 hover:border-polaris-cyan/50 transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0)] hover:shadow-[0_0_15px_rgba(56,189,248,0.2)]"
            >
              <User className="h-4 w-4 text-polaris-ice group-hover:text-polaris-cyan transition-colors" />
            </Link>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-polaris-ice hover:text-polaris-cyan transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 right-0 glass-nav border-t border-polaris-border/50 p-6 flex flex-col gap-4 shadow-2xl"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-medium p-3 rounded-xl transition-colors ${
                  isActive(link.href)
                    ? "bg-polaris-cyan/10 text-white border border-polaris-cyan/30"
                    : "text-polaris-muted hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {session && (
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium p-3 rounded-xl text-polaris-cyan hover:bg-white/5 transition-colors"
              >
                Admin Dashboard
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}