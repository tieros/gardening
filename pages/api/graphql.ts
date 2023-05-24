import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { resolvers } from './Resolvers/Resolvers';
import { typeDefs } from './Schema/Schema';

const server = new ApolloServer({
    resolvers,
    typeDefs,
});

export default startServerAndCreateNextHandler(server);
