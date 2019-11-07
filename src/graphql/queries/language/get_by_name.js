import LanguageObject from './../../objects/language';
import Language from './../../../models/Language';
import {GraphQLString} from "graphql";

/*
`type Query {
    findOne: [LanguageObject]
}`
*/
export default {
    type: LanguageObject,
    args: {
        name: {
            type: GraphQLString
        }
    },
    resolve: async (source, args) => {
        const result = await Language.findOne({name: args.name})
        return result;
    }
}
