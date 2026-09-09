import "./globals.css"
import { Navigation } from "@/components/navigation/Navigation"
import { NextAuthProvider } from "@/components/auth/Provider"
import { Inter, Space_Grotesk } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })

export const metadata: Metadata = {
  title: "POLARIS — Polar Science Knowledge Repository",
  description: "Premier polar science knowledge platform for research, expeditions, and media",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "POLARIS — Polar Science Knowledge Repository",
    description: "The living archive of polar science. Browse published research resources, climate data, and expeditions.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen antialiased bg-polaris-navy text-polaris-ice font-sans">
        <NextAuthProvider>
          <Navigation />
          <main className="pt-20">
            {children}
          </main>
        </NextAuthProvider>
      </body>
    </html>
  )
}