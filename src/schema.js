const {
  intArg,
  makeSchema,
  nonNull,
  objectType,
  stringArg,
  inputObjectType,
  arg,
  asNexusMethod,
  enumType,
} = require('nexus')
const { DateTimeResolver } = require('graphql-scalars')

const DateTime = asNexusMethod(DateTimeResolver, 'date')

const Query = objectType({
  name: 'Query',
  definition(t) {

    t.nonNull.list.nonNull.field('allHolidays', {
      type: 'Holiday',
      resolve: (_parent, _args, context) => {
        return context.prisma.holiday.findMany()
      },
    })

    t.list.field('holidayByMonth', {
      type: 'Holiday',
      args: {
        month: stringArg()
      },
      resolve: (_parent, args, context) => {
        return context.prisma.holiday.findMany({
          where: { month: args.month },
        })
      },
    })

    t.nullable.field('holidayById', {
      type: 'Holiday',
      args: {
        id: intArg(),
      },
      resolve: (_parent, args, context) => {
        return context.prisma.holiday.findUnique({
          where: { id: args.id || undefined },
        })
      },
    })

    

    // t.nonNull.list.nonNull.field('allRegions', {
    //   type: 'Region',
    //   resolve: (_parent, _args, context) => {
    //     return context.prisma.region.findMany()
    //   }
    // })

    // t.nonNull.list.nonNull.field('feed', {
    //   type: 'Post',
    //   args: {
    //     searchString: stringArg(),
    //     skip: intArg(),
    //     take: intArg(),
    //     orderBy: arg({
    //       type: 'PostOrderByUpdatedAtInput',
    //     }),
    //   },
    //   resolve: (_parent, args, context) => {
    //     const or = args.searchString
    //       ? {
    //         OR: [
    //           { title: { contains: args.searchString } },
    //           { content: { contains: args.searchString } },
    //         ],
    //       }
    //       : {}

    //     return context.prisma.post.findMany({
    //       where: {
    //         published: true,
    //         ...or,
    //       },
    //       take: args.take || undefined,
    //       skip: args.skip || undefined,
    //       orderBy: args.orderBy || undefined,
    //     })
    //   },
    // })

    // t.list.field('draftsByUser', {
    //   type: 'Post',
    //   args: {
    //     userUniqueInput: nonNull(
    //       arg({
    //         type: 'UserUniqueInput',
    //       }),
    //     ),
    //   },
    //   resolve: (_parent, args, context) => {
    //     return context.prisma.user
    //       .findUnique({
    //         where: {
    //           id: args.userUniqueInput.id || undefined,
    //           email: args.userUniqueInput.email || undefined,
    //         },
    //       })
    //       .posts({
    //         where: {
    //           published: false,
    //         },
    //       })
    //   },
    // })
  },
})

const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    
    t.nonNull.field('createHoliday', {
      type: 'Holiday',
      args: {
        data: nonNull(
          arg({
            type: 'HolidayCreateInput',
          }),
        ),
      },
      resolve: (_, args, context) => {
        return context.prisma.holiday.create({
          data: {
            name: args.data.name,
            date: args.data.date,
            month: args.data.month,
            description: args.data.description,
            region: args.data.region,
          },
        })
      },
    })

    t.field('updateHoliday', {
      type: 'Holiday',
      args: {
        id: nonNull(intArg()),
        data: nonNull(
          arg({
            type: 'HolidayCreateInput'
          })
        )
      },
      resolve: (_, args, context) => {
        return context.prisma.holiday.update({
          where: { id: args.id || undefined },
          data: {
            name: args.data.name,
            date: args.data.date,
            month: args.data.month,
            region: args.data.region,
            description: args.data.description,
          },
        })
      },
    })

    t.field('deleteHoliday', {
      type: 'Holiday',
      args: {
        id: nonNull(intArg()),
      },
      resolve: (_, args, context) => {
        return context.prisma.holiday.delete({
          where: { id: args.id },
        })
      },
    })
  },
})

const Holiday = objectType({
  name: 'Holiday',
  definition(t) {
    t.nonNull.int('id')
    t.nonNull.string('name')
    t.string('date')
    t.nonNull.string('month')
    t.string('description')
    t.string('region')
  },
})

// const Region = objectType({
//   name: 'Region',
//   definition(t) {
//     t.nonNull.int('id')
//     t.nonNull.field('createdAt', { type: 'DateTime' })
//     t.nonNull.field('updatedAt', { type: 'DateTime' })
//     t.nonNull.string('name')
//     // t.field('author', {
//     //   type: 'User',
//     //   resolve: (parent, _, context) => {
//     //     return context.prisma.region
//     //       .findUnique({
//     //         where: { id: parent.id || undefined },
//     //       })
//     //       .author()
//     //   },
//     // })
//   },
// })

// const SortOrder = enumType({
//   name: 'SortOrder',
//   members: ['asc', 'desc'],
// })

// const PostOrderByUpdatedAtInput = inputObjectType({
//   name: 'PostOrderByUpdatedAtInput',
//   definition(t) {
//     t.nonNull.field('updatedAt', { type: 'SortOrder' })
//   },
// })

// const UserUniqueInput = inputObjectType({
//   name: 'UserUniqueInput',
//   definition(t) {
//     t.int('id')
//     t.string('email')
//   },
// })

// const RegionCreateInput = inputObjectType({
//   name: 'RegionCreateInput',
//   definition(t) {
//     t.nonNull.string('title')
//     t.string('content')
//   },
// })

const HolidayCreateInput = inputObjectType({
  name: 'HolidayCreateInput',
  definition(t) {
    t.nonNull.string('name')
    t.string('date')
    t.nonNull.string('month')
    t.string('description')
    t.string('region')
  },
})

const schema = makeSchema({
  types: [
    Query,
    Mutation,
    Holiday,
    // Region,
    // UserUniqueInput,
    HolidayCreateInput,
    // RegionCreateInput,
    // SortOrder,
    // PostOrderByUpdatedAtInput,
    DateTime,
  ],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
})

module.exports = {
  schema: schema,
}
