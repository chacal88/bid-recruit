import {GraphQLInputObjectType, GraphQLString} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'user_input',
    fields: () => ({
        uuid: { type: GraphQLString },
    })
});
