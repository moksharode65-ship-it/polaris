export interface Resource {
  id: string
  title: string
  type: string
  abstract: string
  description: string
  authors: string[]
  year: number
  topics: string[]
  expeditionId?: string
  thumbnail: string
  fileUrl: string
  status: string
}

export interface Expedition {
  id: string
  name: string
  year: number
  region: string
  dates: string
  lead: string
  summary: string
  status: string
  heroImage: string
}

export interface Media {
  id: string
  title: string
  type: string
  year: number
  expeditionId: string
  thumbnail: string
  caption: string
  credit: string
}

export type PolarEntity = Resource | Expedition | Media