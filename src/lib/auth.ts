import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

// Hardcoded admin user - password: admin123
// The password hash: $2a$10$NJZ.iLyW.KjSA9RixfAnfuukejjHqo8T6lRyseZ8w3p5L4sMjyKNS
const ADMIN_HASH = "$2a$10$NJZ.iLyW.KjSA9RixfAnfuukejjHqo8T6lRyseZ8w3p5L4sMjyKNS"

const verifyPassword = (password: string): boolean => {
  return password === "admin123"
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Check if password is provided
        if (!credentials?.password) {
          return null
        }

        // Verify password
        const isValid = verifyPassword(credentials.password)

        if (!isValid) {
          return null
        }

        return {
          id: "1",
          email: "admin@polaris.org",
          name: "Admin"
        }
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/login"
  },
  secret: "polaris-super-secret-key-2030"
}