import {GraphQLID} from 'graphql';
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
        id:{
            type: GraphQLID
        }
    },
    resolve: async (source, args) => {

        const result = await Team.findOne({_id: args.id})

        return result;
    }
}
