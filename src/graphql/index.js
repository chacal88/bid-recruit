import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import queries from './queries/index';
import mutations from './mutations/index';

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: queries
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: mutations
    })
});