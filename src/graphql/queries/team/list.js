import {GraphQLList} from 'graphql';
import TeamObject from './../../objects/team';
import Team from "../../../models/Team";

/*
`type Query {
    find: [TeamObject]
}`
*/
export default {
    type: new GraphQLList(TeamObject),
    resolve: async () => {

        const result = await Team.find({});

        return result;
    }
}
