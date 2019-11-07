import {GraphQLList} from 'graphql';
import UserObject from './../../objects/user';
import User from './../../../models/User';

/*
`type Query {
    find: [UserObject]
}`
*/
export default {
    type: new GraphQLList(UserObject),
    resolve: async () => {
        const result = await User.find({});
        return result;
    }
}
