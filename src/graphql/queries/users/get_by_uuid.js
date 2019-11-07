import UserObject from './../../objects/user';
import User from './../../../models/User';
import {GraphQLString} from "graphql";

/*
`type Query {
    findOne: [UserObject]
}`
*/
export default {
    type: UserObject,
    args: {
        uuid: {
            type: GraphQLString
        }
    },
    resolve: async (source, args) => {
        const result = await User.findOne({uuid: args.uuid})
        return result;
    }
}
