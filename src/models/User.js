import mongoose, {Schema} from 'mongoose';

const User = new Schema({
    uuid: String,
    name: String,
    languages: [{type: mongoose.Schema.ObjectId, ref: 'Language'}],
    teams: [{type: mongoose.Schema.ObjectId, ref: 'Team'}],
    login: String,
    node_id: String,
    avatar_url: String,
    gravatar_id: String,
    url: String,
    html_url: String,
    followers_url: String,
    following_url: String,
    gists_url: String,
    starred_url: String,
    subscriptions_url: String,
    organizations_url: String,
    repos_url: String,
    events_url: String,
    received_events_url: String,
    type: String,
    site_admin: Boolean,
    company: String,
    blog: String,
    location: String,
    hireable: Boolean,
    bio: String,
    public_repos: Intl,
    public_gists: Intl,
    followers: Intl,
    following: Intl
});

export default mongoose.model('User', User);
