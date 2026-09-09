import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import AdminClient from "./AdminClient"

export default async function Admin() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  return <AdminClient session={session} />
}