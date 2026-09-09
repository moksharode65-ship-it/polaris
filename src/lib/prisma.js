const prisma = {
  // Mock user data
  user: {
    findUnique: async (where) => {
      if (where.email === 'admin@polaris.org') {
        return Promise.resolve({
          id: '1',
          email: 'admin@polaris.org',
          name: 'Admin'
        })
      }
      return Promise.resolve(null)
    }
  },

  // Mock research data
  research: {
    findMany: async () => [
      {
        id: 'r1',
        title: 'Antarctic Ice Core Study 2023',
        abstract: 'Analysis of ice core samples revealing 800,000 years of climate data',
        year: 2023,
        thumbnail: '/placeholder-img-1.jpg',
        status: 'published'
      },
      {
        id: 'r2',
        title: 'Arctic Ocean Current Patterns',
        abstract: 'Mapping of thermohaline circulation in the Arctic region',
        year: 2022,
        thumbnail: '/placeholder-img-2.jpg',
        status: 'approved'
      },
      {
        id: 'r3',
        title: 'Glacier Retreat Quantification',
        abstract: 'Quantifying glacier mass loss across polar regions',
        year: 2024,
        thumbnail: '/placeholder-img-3.jpg',
        status: 'pending'
      }
    ],
    findUnique: async (where) => {
      const id = where.id
      const all = await prisma.research.findMany()
      return Promise.resolve(all.find(r => r.id === id) || null)
    },
    create: async (data) => {
      const newId = 'r' + Date.now()
      const item = { id: newId, ...data }
      return Promise.resolve(newItem)
    }
  },

  // Mock expedition data
  expedition: {
    findMany: async () => [
      {
        id: 'e1',
        name: 'Polaris 2023 Arctic Expedition',
        year: 2023,
        region: 'Arctic',
        status: 'completed'
      },
      {
        id: 'e2',
        name: 'Antarctic Research 2022-2023',
        year: 2022,
        region: 'Antarctic',
        status: 'completed'
      },
      {
        id: 'e3',
        name: 'Current Polar Initiative 2024',
        year: 2024,
        region: 'High Arctic',
        status: 'active'
      }
    ],
    findUnique: async (where) => {
      const id = where.id
      const all = await prisma.expedition.findMany()
      return Promise.resolve(all.find(e => e.id === id) || null)
    },
    create: async (data) => {
      const newId = 'e' + Date.now()
      const newItem = { id: newId, ...data }
      return Promise.resolve(newItem)
    }
  },

  // Mock media data
  media: {
    findMany: async () => [
      {
        id: 'm1',
        title: 'Aurora Borealis Time-lapse',
        type: 'video',
        year: 2023
      },
      {
        id: 'm2',
        title: 'Glacier Calving Event',
        type: 'image',
        year: 2022
      },
      {
        id: 'm3',
        title: 'Polar Research Team',
        type: 'image',
        year: 2024
      }
    ],
    findUnique: async (where) => {
      const id = where.id
      const all = await prisma.media.findMany()
      return Promise.resolve(all.find(m => m.id === id) || null)
    },
    create: async (data) => {
      const newId = 'm' + Date.now()
      const newItem = { id: newId, ...data }
      return Promise.resolve(newItem)
    }
  },

  // Session methods
  $session: {
    set: async (session) => {},
    get: async () => null
  },

  // No-op methods for disconnect/connect
  $disconnect: async () => {},
  $connect: async () => {}
}

module.exports = prisma