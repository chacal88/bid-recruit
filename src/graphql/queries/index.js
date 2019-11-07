import user_list from './users/list'
import user_by_team from "./users/get_by_team";
import user_by_uuid from "./users/get_by_uuid";
import user_by_id from "./users/get_by_id";
import language_list from './language/list'
import language_by_id from './language/get_by_id'
import language_by_name from './language/get_by_name'
import team_list from './team/list'
import team_by_id from './team/get_by_id'
import team_by_name from './team/get_by_name'
import team_by_language from './team/get_by_language'

export default {
    user_list,
    user_by_id,
    user_by_uuid,
    user_by_team,
    language_list,
    language_by_id,
    language_by_name,
    team_list,
    team_by_id,
    team_by_name,
    team_by_language
}
