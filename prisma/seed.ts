// Prisma seed script - using simple data fixtures
// Since Prisma has been replaced with simple data fixtures

import { resources, expeditions, media } from '@/lib/data'

async function main() {
  console.log('Prisma seed completed - using simple data fixtures')
  console.log(`Loaded ${resources.length} resources, ${expeditions.length} expeditions, ${media.length} media items`)
}

main()
  .then(async () => {
    // No database disconnect needed for simple fixtures
    process.exit(0)
  })
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })