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
            return;
        }

        let team = await Team.findById(args.team.id)
        if (!team) {
            return;
        }

        team.users.push(user);
        team.save();

        return team;
    }
}
