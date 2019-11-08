import TeamInput from './inputs/team_input';
import TeamObject from './../../objects/team';
import Team from "../../../models/Team";
import User from "../../../models/User";
import Language from "../../../models/Language";

export default {
    type: TeamObject,
    args: {
        team: {type: TeamInput}
    },
    resolve: async (source, args) => {

        let language = await Language.findOne({name: args.team.language_name})

        if (!language) {
            return;
        }

        let team = await Team.findById(args.team.id);
        if (!team) {
            throw new Error('Team not found')
        }

        let hasLanguage = Team.findOne({
            "_id": team._id,
            "languages": {
                $in: [language]
            }
        });

        if (!hasLanguage) {
            throw new Error('This team already has this language')
        }

        team.languages.push(language);
        team.save();

        return team;
    }
}
