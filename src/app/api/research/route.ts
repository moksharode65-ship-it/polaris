import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

export async function GET() {
  try {
    const research = await prisma.research.findMany({
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(research)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch research' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const json = await request.json()
    const { title, abstract, year, thumbnail, content } = json

    const newResearch = await prisma.research.create({
      data: {
        title,
        abstract,
        year: parseInt(year),
        thumbnail,
        content
      }
    })

    return NextResponse.json(newResearch, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create research' }, { status: 500 })
  }
}