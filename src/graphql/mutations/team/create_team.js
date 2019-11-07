import TeamInput from './inputs/team_input';
import TeamObject from './../../objects/team';
import Team from "../../../models/Team";

export default {
    type: TeamObject,
    args: {
        team: {type: TeamInput}
    },
    resolve: async (source, args) => {

        let team = await Team.findOne({name: args.team.name})
        if (!team) {
            team = await Team.create({name: args.team.name});
        }

        return team;
    }
}
