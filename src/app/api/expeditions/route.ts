import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

export async function GET() {
  try {
    const expeditions = await prisma.expedition.findMany({
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(expeditions)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch expeditions' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const json = await request.json()
    const { title, location, year, image, description } = json

    const newExpedition = await prisma.expedition.create({
      data: {
        title,
        location,
        year: parseInt(year),
        image,
        description
      }
    })

    return NextResponse.json(newExpedition, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create expedition' }, { status: 500 })
  }
}