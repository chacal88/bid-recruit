import TeamInput from './inputs/team_input';
import TeamObject from './../../objects/team';
import Team from "../../../models/Team";
import User from "../../../models/User";

export default {
    type: TeamObject,
    args: {
        team: {type: TeamInput}
    },
    resolve: async (source, args) => {

        let user = await User.findOne({uuid: args.team.user_uuid})
        if (!user) {
            throw new Error('User not found')
        }

        let team = await Team.findById(args.team.id)
        if (!team) {
            throw new Error('Team not found')
        }

        let hasUser = Team.findOne({
            "_id": team._id,
            "users": {
                $in: [user]
            }
        });

        if (!hasUser) {
            throw new Error('This team already has this user')
        }

        team.users.push(user);
        team.save();

        return team;
    }
}
