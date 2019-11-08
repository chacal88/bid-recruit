import UserInput from './inputs/user_input';
import UserObject from './../../objects/user';
import UserService from './../../../services/user_service';

export default {
    type: UserObject,
    args: {
        user: {type: UserInput}
    },
    resolve: async (source, args) => {

        let user = await UserService.create(args)

        return user;
    }
}
