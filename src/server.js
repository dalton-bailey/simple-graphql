const { ApolloServer } = require('apollo-server')
const { schema } = require('./schema')
const { context } = require('./context')


const server = new ApolloServer({
  cors: {
		origin: '*',			
		credentials: true},
  schema: schema,
  context: context,

})


server.listen({ port: process.env.PORT || 8000 }).then( ({ url }) => {
  console.log(`\
🚀 Server ready at: ${url}
⭐️ See sample queries: http://pris.ly/e/js/graphql#using-the-graphql-api
  `)
})
