import {GraphQLID, GraphQLList, GraphQLObjectType, GraphQLString} from 'graphql';
import UserObject from "./user";
import LanguageObject from "./language";

/*
`type Language {
    id: ID,
    name: String
}`
*/
export default new GraphQLObjectType({
    name: 'Team',
    description: 'Define a Team Object',
    fields() {
        return {
            id: {
                type: GraphQLID,
                description: 'Unique ID',
                resolve: (team) => team.id
            },
            name: {
                type: GraphQLString,
                description: 'Language name',
                resolve: (team) => team.name
            },
            users: {
                type: new GraphQLList(UserObject),
                description: 'User List',
                resolve: async (team) => {
                    await team
                        .populate('users')
                        .execPopulate();

                    return team.users
                }
            },
            languages: {
                type: new GraphQLList(LanguageObject),
                description: 'Language List',
                resolve: async (team) => {
                    await team
                        .populate('languages')
                        .execPopulate();

                    return team.languages
                }
            }
        }
    }
});
