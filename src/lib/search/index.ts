import type { Resource, Expedition, Media } from "../types"
import { resources, expeditions, media as mediaData } from "../data"

export function searchResources(
  query: string,
  resourceList: Resource[] = resources
): Resource[] {
  const lowercaseQuery = query.toLowerCase()
  return resourceList.filter(
    (resource) =>
      resource.title.toLowerCase().includes(lowercaseQuery) ||
      resource.abstract.toLowerCase().includes(lowercaseQuery) ||
      resource.topics.some((topic) => topic.toLowerCase().includes(lowercaseQuery)) ||
      resource.authors.some((author) => author.toLowerCase().includes(lowercaseQuery))
  )
}

export function searchExpeditions(
  query: string,
  expeditionList: Expedition[] = expeditions
): Expedition[] {
  const lowercaseQuery = query.toLowerCase()
  return expeditionList.filter(
    (expedition) =>
      expedition.name.toLowerCase().includes(lowercaseQuery) ||
      expedition.region.toLowerCase().includes(lowercaseQuery) ||
      expedition.summary.toLowerCase().includes(lowercaseQuery)
  )
}

export function searchMedia(
  query: string,
  mediaList: Media[] = mediaData
): Media[] {
  const lowercaseQuery = query.toLowerCase()
  return mediaList.filter(
    (item) =>
      item.title.toLowerCase().includes(lowercaseQuery) ||
      item.caption.toLowerCase().includes(lowercaseQuery) ||
      item.credit.toLowerCase().includes(lowercaseQuery)
  )
}

export function searchAll(query: string) {
  return {
    resources: searchResources(query),
    expeditions: searchExpeditions(query),
    media: searchMedia(query),
  }
}