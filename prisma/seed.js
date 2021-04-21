const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const holidayData = [
  {
    name: 'Fishing Tourney',
    date: 'Third Saturday in January',
    description: 'Fish your heart out.',
    regions: {
      create: [
        {
          name: 'All',
        },
      ],
    },
  },
  {
    name: 'Shamrock Day',
    date: 'March 17th',
    description: 'On this day, the player can speak to Isabelle to receive the Shamrock Hat. Following up to this holiday, whether or not the player has the Beautiful Town Ordinance in play or not, they will find many clovers scattered about their town. The clovers are not considered to be weeds.',
    regions: {
      create: [
        {
          name: 'Europe'
        },
        {
          name: 'North America'
        }
      ],
    },
  },
  {
    name: 'Bunny Day',
    date: 'April 12th',
    description: "It's gone until next April. It's over. You can breathe again.",
    regions: {
      create: [
        {
          name: 'All'
        }
      ],
    },
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const i of holidayData) {
    const holiday = await prisma.holiday.create({
      data: i,
    })
    console.log(`Created holiday with id: ${holiday.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
