import LanguageObject from './../../objects/language';
import Language from './../../../models/Language';
import {GraphQLID} from "graphql";

/*
`type Query {
    findOne: [LanguageObject]
}`
*/
export default {
    type: LanguageObject,
    args: {
        id:{
            type: GraphQLID
        }
    },
    resolve: async (source, args) => {

        const result = await Language.findOne({_id: args.id})

        return result;
    }
}
