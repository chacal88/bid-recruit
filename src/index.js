import express from 'express';
import bodyParser from 'body-parser';
import expressGraphQL from 'express-graphql';
import mongoose from 'mongoose';

import routes from './routes/index';
import Schema from './graphql/index';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/graphql', expressGraphQL({
    schema: Schema,
    graphiql: true,
    pretty: true
}));


routes(app);

mongoose.connect('mongodb://localhost:27017/bid_recruit', { useNewUrlParser: true });

app.listen(3000, () => console.log('Express has been started'));
