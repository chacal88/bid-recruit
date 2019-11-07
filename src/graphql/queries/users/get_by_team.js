import {GraphQLList, GraphQLString} from 'graphql';
import UserObject from './../../objects/user';
import Team from "../../../models/Team";
import Language from "../../../models/Language";
import User from "../../../models/User";

/*
`type Query {
    find: [UserObject]
}`
*/
export default {
    type: new GraphQLList(UserObject),
    args: {
        team_name: {
            type: GraphQLString
        }
    },
    resolve: async (source, args) => {

        let team = await Team.findOne({
            name: args.team_name
        }).populate('languages');

        return User.find({
            "languages": {
                $in: team.languages
            }
        });
    }
}
