import mongoose, {Schema} from 'mongoose';

const Team = new Schema({
    name: String,
    users: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
    languages: [{type: mongoose.Schema.ObjectId, ref: 'Language'}]
});

export default mongoose.model('Team', Team);
