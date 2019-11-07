import User from "../models/User";
import UserInput from "../graphql/mutations/user/inputs/user_input";

export default {
    args: {
        user: { type: UserInput }
    },
    create: async (args) => {

        // let language = await Language.findOne({name : 'NODE'})
        //
        // if(!language){
        //     language = await Language.create({name : 'NODE'})
        // }

        let user = await User.findOne({ uuid: args.user.uuid })

        if(!user){
            user = await User.create({ uuid: args.user.uuid });
        }

        // user.languages.push(language);
        // user.save();

        return user;
    },

    remove: (id) => {
        User.findOneAndRemove({ _id: id }, (err)=>{

            if(!err){
                return true;
            }
            throw new Error('User not found')
        })
    },

    find: () => {
        User.find({}, (err, result) => {
            if (!err) {
                return result;
            }

            throw new Error('User not found')
        });
    }
};
