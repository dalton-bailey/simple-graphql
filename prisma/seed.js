const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const holidayData = [
  {
    name: "New Year's Day",
    date: '1st',
    month: 'January',
    description: "Receive an ornamental Chinese zodiac animal from Isabelle on the plaza between 6AM and Midnight",
    region: 'All',
  },
  {
    name: 'Fishing Tourney',
    date: 'Third Saturday',
    month: 'January',
    region: 'All',
  },
  {
    name: 'Groundhog Day',
    date: '2nd',
    month: 'February',
    description: "Receive a Resetti Model from Isabelle on the plaza between 6AM and Midnight.",
    region: 'North America',
  },
  {
    name: 'Setsubun',
    date: '3rd',
    month: 'February',
    region: 'Japan',
  },
  {
    name: 'Fishing Tourney',
    date: 'Second Saturday',
    month: 'February',
    region: 'All',
  },
  {
    name: 'Great Full Moon',
    date: '8th',
    month: 'February',
    region: 'Korea',
  },
  {
    name: "Valentine's Day",
    date: '14th',
    month: 'February',
    region: 'All',
  },
  {
    name: 'Leap Day',
    date: '29th',
    month: 'February',
    region: 'All',
  },
  {
    name: 'Nina Matsuri',
    date: '1st',
    month: 'March',
    region: 'Japan',
  },
  {
    name: 'Shamrock Day',
    date: 'March 17th',
    month: 'March',
    description:
      'On this day, the player can speak to Isabelle to receive the Shamrock Hat. Following up to this holiday, whether or not the player has the Beautiful Town Ordinance in play or not, they will find many clovers scattered about their town. The clovers are not considered to be weeds.',
    region: 'Europe & North America',
  },
  {
    name: 'Bunny Day',
    date: '12th',
    month: 'April',
    description:
      "It's gone until next April. It's over. You can breathe again.",
    region: 'All',
  },
  {
    name: 'Cherry Blossoms',
    date: '1st-10th',
    month: 'April',
    region: 'Northern Hemisphere',
  },
  {
    name: 'Arbor Day',
    date: '5th',
    month: 'April',
    region: 'Korea',
  },
  {
    name: 'Plant Color Change',
    date: '6th',
    month: 'April',
    region: 'All',
  },
  {
    name: 'Fishing Tourney',
    date: 'Second Saturday',
    month: 'April',
    region: 'All',
  },
  {
    name: 'Nature Day',
    date: '23rd',
    month: 'April',
    description:
      'Special Nook Miles+ rewards available for doing eco-friendly activities like planting shrubs. Leif will arrive more during this period, so grab the bushes and non-native flowers when you can.',
    region: 'All',
  },
  {
    name: 'May Day',
    date: '1st-7th',
    month: 'May',
    description:
      "Redeem your May Day Ticket at the airport and you'll be whisked away on a special island tour. It'll feature a new challenge, rewards, and a meeting with an old friend...",
    region: 'All',
  },
  {
    name: 'Internaional Museum Day',
    date: '18th-31st',
    month: 'May',
    description:
      "Blathers will hold 'stamp rallies', where you'll need to collect three stamps from each museum exhibit to win a prize.",
    region: 'All',
  },
  {
    name: 'Fishing Tourney',
    date: 'Third Saturday',
    month: 'May',
    region: 'All',
  },
  {
    name: 'Wedding Season',
    date: '1st-30th',
    month: 'June',
    region: 'All',
  },
  {
    name: 'Bug Off',
    date: 'Third Saturday',
    month: 'June',
    region: 'All',
  },
  {
    name: 'Summer Solstice',
    date: '20th',
    month: 'June',
    region: 'All',
  },
  {
    name: 'Tanabata',
    date: '7th',
    month: 'July',
    region: 'All',
  },
  {
    name: 'Bug Off',
    date: 'Third Saturday',
    month: 'July',
    region: 'All',
  },
  {
    name: 'Big Cloud Season',
    date: "Whole month",
    month: 'August',
    region: 'All',
  },
  {
    name: 'Fireworks Display',
    date: 'Every Sunday',
    month: 'August',
    region: 'All',
  },
  {
    name: 'Shaved Ice',
    date: '8th',
    month: 'August',
    region: 'All',
  },
  {
    name: 'Bug Off',
    date: 'Third Saturday',
    month: 'August',
    region: 'All',
  },
  {
    name: 'Weeding Day',
    date: '3rd',
    month: 'September',
    region: 'Japan',
  },
  {
    name: 'Labor Day',
    date: '7th',
    month: 'September',
    region: 'North America',
  },
  {
    name: 'Bug Off',
    date: 'Third Saturday',
    month: 'September',
    region: 'Southern Hemisphere',
  },
  {
    name: 'Cherry Blossoms',
    date: '1st-10th',
    month: 'October',
    region: 'Southern Hemisphere',
  },
  {
    name: 'Halloween Items',
    date: "Whole month",
    month: 'October',
    region: 'All',
  },
  {
    name: 'Otsukimi',
    date: '1st',
    month: 'October',
    region: 'Japan',
  },
  {
    name: 'Chuseok',
    date: '1st',
    month: 'October',
    region: 'Korea',
  },
  {
    name: 'Autumn Moon',
    date: '1st',
    month: 'October',
    region: 'Europe & North America',
  },
  {
    name: "Explorer's Day",
    date: 'Second Monday',
    month: 'October',
    region: 'North America',
  },
  {
    name: 'Fishing Tourney',
    date: 'Second Saturday',
    month: 'October',
    region: 'All',
  },
  {
    name: 'Halloween',
    date: '31st',
    month: 'October',
    region: 'All',
  },
  {
    name: 'Mushroom Season',
    month: 'November',
    region: 'All',
  },
  {
    name: 'Winter',
    date: '6th or 7th',
    month: 'November',
    region: 'All',
  },
  {
    name: 'Fishing Tourney',
    date: 'Third Saturday',
    month: 'November',
    region: 'All',
  },
  {
    name: 'Harvest Festival',
    date: 'Fourth Thursday',
    month: 'November',
    region: 'All',
  },
  {
    name: 'Gift Hint Season',
    date: '1st-23rd',
    month: 'December',
    region: 'All',
  },
  {
    name: 'Santa Clothing Season',
    date: '1st-24th',
    month: 'December',
    region: 'All',
  },
  {
    name: 'Festive Accessories Season',
    date: "Whole month",
    month: 'December',
    region: 'All',
  },
  {
    name: 'Naughty-or-Nice Day',
    date: '6th',
    month: 'December',
    region: 'Europe',
  },
  {
    name: 'Fishing Tourney',
    date: 'Second Saturday',
    month: 'December',
    region: 'Europe',
  },
  {
    name: 'Blizzard',
    date: '10th',
    month: 'December',
    region: 'Japan',
  },
  {
    name: 'Snowball Season',
    date: '11th-30th',
    month: 'December',
    region: 'All',
  },
  {
    name: 'Winter Solstice',
    date: '21st',
    month: 'December',
    region: 'All',
  },
  {
    name: 'Toy Day',
    date: '24th',
    month: 'December',
    region: 'All',
  },
  {
    name: "New Year's Countdown",
    date: '31st',
    month: 'December',
    region: 'All',
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
