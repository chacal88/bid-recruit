import express from 'express';
import bodyParser from 'body-parser';
import expressGraphQL from 'express-graphql';
import mongoose from 'mongoose';


import routes from './routes/index';
import interceptor from './infrastructure/interceptor';
import Schema from './graphql/index';

require('dotenv').config()
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use((req, res, next) => {
    interceptor.intercept(req);
    next();
});

app.use('/graphql', expressGraphQL({
    schema: Schema,
    graphiql: true,
    pretty: true
}));


routes(app);

mongoose.connect('mongodb://db:27017/bid_recruit', { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);
app.listen(3000, () => console.log('Express has been started'));
