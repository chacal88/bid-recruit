import {GraphQLID, GraphQLList, GraphQLObjectType, GraphQLString} from 'graphql';
import UserObject from "./user";
import TeamObject from "./team";

/*
`type Language {
    id: ID,
    name: String
}`
*/
export default new GraphQLObjectType({
    name: 'Language',
    description: 'Define a Language Object',
    fields() {
        return {
            id: {
                type: GraphQLID,
                description: 'Unique ID',
                resolve: (language) => language.id
            },
            name: {
                type: GraphQLString,
                description: 'Language name',
                resolve: (language) => language.name
            },
            users: {
                type: new GraphQLList(UserObject),
                description: 'User List',
                resolve: async (language) => {
                    await language
                        .populate('users')
                        .execPopulate();

                    return language.users
                }
            },
            teams: {
                type: new GraphQLList(TeamObject),
                description: 'Team List',
                resolve: async (language) => {
                    await language
                        .populate('teams')
                        .execPopulate();

                    return language.teams
                }
            }
        }
    }
});
