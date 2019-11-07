import {GraphQLID, GraphQLInputObjectType, GraphQLString} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'team_input',
    fields: () => ({
        id: {type: GraphQLID},
        user_uuid: {type: GraphQLString},
        language_name: {type: GraphQLString},
        name: {type: GraphQLString},
    })
});
