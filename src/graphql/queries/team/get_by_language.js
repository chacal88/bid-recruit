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

        let language = await Language.findOne({
            name: args.language_name
        });

        return Team.find({
            "languages": {
                _id: language._id
            }
        });
    }
}
