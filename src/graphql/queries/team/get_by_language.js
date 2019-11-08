import {GraphQLList, GraphQLString} from 'graphql';
import TeamObject from './../../objects/team';
import Team from "../../../models/Team";
import Language from "../../../models/Language";

/*
`type Query {
    find: [TeamObject]
}`
*/
export default {
    type: new GraphQLList(TeamObject),
    args: {
        language_name: {
            type: GraphQLString
        }
    },
    resolve: async (source, args) => {

        const language = await Language.findOne({
            name: args.language_name
        });

        const team = Team.find({
            "languages": {
                _id: language._id
            }
        });

        return team;
    }
}
