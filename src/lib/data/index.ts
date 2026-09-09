import type { Resource, Expedition, Media } from "../types"

export const resources: Resource[] = [
  {
    id: "r1",
    title: "Antarctic Ice Core Study 2023",
    type: "research",
    abstract: "Analysis of ice core samples revealing 800,000 years of climate data",
    description: "Comprehensive study of Antarctic ice cores drilled during the 2023 expedition, providing unprecedented insights into historical climate patterns and atmospheric composition.",
    authors: ["Dr. Elena Rivera", "Prof. Marcus Thorne"],
    year: 2023,
    topics: ["climate", "ice cores", "paleontology"],
    expeditionId: "e1",
    thumbnail: "/placeholder-img-1.jpg",
    fileUrl: "/docs/ice-core-study.pdf",
    status: "published"
  },
  {
    id: "r2",
    title: "Arctic Ocean Current Patterns",
    type: "research",
    abstract: "Mapping of thermohaline circulation in the Arctic region",
    description: "Detailed mapping of ocean current patterns and temperature gradients across the Arctic Ocean during the summer 2022 expedition.",
    authors: ["Dr. Sarah Jenkins", "Dr. Wei Zhang"],
    year: 2022,
    topics: ["oceans", "currents", "thermohaline"],
    expeditionId: "e2",
    thumbnail: "/placeholder-img-2.jpg",
    fileUrl: "/docs/arctic-currents.pdf",
    status: "approved"
  },
  {
    id: "r3",
    title: "Glacier Retreat Quantification",
    type: "research",
    abstract: "Quantifying glacier mass loss across polar regions",
    description: " comparative analysis of glacier mass balance data from Arctic and Antarctic regions over the past decade.",
    authors: ["Prof. Carlos Mendes"],
    year: 2024,
    topics: ["glaciers", "mass balance", "sea level"],
    expeditionId: "e1",
    thumbnail: "/placeholder-img-3.jpg",
    fileUrl: "/docs/glacier-retreat.pdf",
    status: "pending"
  }
]

export const expeditions: Expedition[] = [
  {
    id: "e1",
    name: "Polaris 2023 Arctic Expedition",
    year: 2023,
    region: "Arctic",
    dates: "June 15 - August 30, 2023",
    lead: "Dr. Elena Rivera",
    summary: " Comprehensive study of Arctic ice dynamics, wildlife, and climate indicators across the polar cap.",
    status: "completed",
    heroImage: "/expedition-hero-1.jpg"
  },
  {
    id: "e2",
    name: "Antarctic Research 2022-2023",
    year: 2022,
    region: "Antarctic",
    dates: "November 2022 - February 2023",
    lead: "Prof. Marcus Thorne",
    summary: "Multi-disciplinary research including geology, biology, and atmospheric science at the South Pole station.",
    status: "completed",
    heroImage: "/expedition-hero-2.jpg"
  },
  {
    id: "e3",
    name: "Current Polar Initiative 2024",
    year: 2024,
    region: "High Arctic",
    dates: "June 1 - September 15, 2024",
    lead: "Dr. Sarah Jenkins",
    summary: "Real-time monitoring of ocean temperatures, ice thickness, and ecosystem changes in the High Arctic region.",
    status: "active",
    heroImage: "/expedition-hero-3.jpg"
  }
]

export const media: Media[] = [
  {
    id: "m1",
    title: "Aurora Borealis Time-lapse",
    type: "video",
    year: 2023,
    expeditionId: "e1",
    thumbnail: "/aurora-thumb.jpg",
    caption: "Northern lights over the Arctic research station",
    credit: "Photo by Dr. Elena Rivera"
  },
  {
    id: "m2",
    title: "Glacier Calving Event",
    type: "image",
    year: 2022,
    expeditionId: "e2",
    thumbnail: "/glacier-calving.jpg",
    caption: "Major glacier calving event captured from safe distance",
    credit: "Photo by Prof. Marcus Thorne"
  },
  {
    id: "m3",
    title: "Polar Research Team",
    type: "image",
    year: 2024,
    expeditionId: "e3",
    thumbnail: "/research-team.jpg",
    caption: "Team conducting ice core sampling at High Arctic camp",
    credit: "Photo by Dr. Sarah Jenkins"
  }
]