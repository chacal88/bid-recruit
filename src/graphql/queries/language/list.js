import {GraphQLList} from 'graphql';
import LanguageObject from './../../objects/language';
import Language from "../../../models/Language";

/*
`type Query {
    find: [LanguageObject]
}`
*/
export default {
    type: new GraphQLList(LanguageObject),
    resolve: async () => {
        const result = await Language.find({});
        return result;
    }
}
