import {GraphQLString} from 'graphql';
import TeamObject from './../../objects/team';
import Team from "../../../models/Team";

/*
`type Query {
    findOne: [TeamObject]
}`
*/
export default {
    type: TeamObject,
    args: {
        name: {
            type: GraphQLString
        }
    },
    resolve: async (source, args) => {

        const result = await Team.findOne({name: args.name})

        return result;
    }
}
