import {GraphQLID, GraphQLList, GraphQLObjectType, GraphQLString} from 'graphql';
import LanguageObject from "./language";
import TeamObject from "./team";
export default new GraphQLObjectType({
    name: 'User',
    description: 'Define a User Object',
    fields() {
        return {
            id: {
                type: GraphQLID,
                description: 'Unique ID',
                resolve: (user) => user.id
            },
            uuid: {
                type: GraphQLString,
                description: 'Uuid name',
                resolve: (user) => user.uuid
            },
            name: {
                type: GraphQLString,
                description: 'User name',
                resolve: (user) => user.name
            },
            languages: {
                type: new GraphQLList(LanguageObject),
                description: 'Language List',
                resolve: async (user) => {
                    await user
                        .populate('languages')
                        .execPopulate();

                    return user.languages
                }
            },
            teams: {
                type: new GraphQLList(TeamObject),
                description: 'Team List',
                resolve: async (user) => {
                    await user
                        .populate('teams')
                        .execPopulate();

                    return user.teams
                }
            }
        }
    }
});
