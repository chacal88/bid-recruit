import mongoose, {Schema} from 'mongoose';

const Language = new Schema({
    name: String,
    users: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
    Teams: [{type: mongoose.Schema.ObjectId, ref: 'Team'}]
});

export default mongoose.model('Language', Language);
