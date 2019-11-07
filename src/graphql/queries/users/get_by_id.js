import UserObject from './../../objects/user';
import User from './../../../models/User';
import {GraphQLID} from "graphql";

/*
`type Query {
    findOne: [UserObject]
}`
*/
export default {
    type: UserObject,
    args: {
        id: {
            type: GraphQLID
        }
    },
    resolve: async (source, args) => {
        const result = await User.findOne({_id: args.id})
        return result;
    }
}
