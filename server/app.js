require('dotenv').config();
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

//connnect to db
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('Connected to database');
});

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

const port = 4000;

app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
});
