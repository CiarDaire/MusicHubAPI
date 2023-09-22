require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes/route');
const authentication = require('./routes/authentication');
const crypto = require('crypto');

// Connect API to MongoDB Database
const mongoose = require('mongoose');
const mongodatabase = process.env.MONGO_URL;
mongoose.connect(mongodatabase);
const database = mongoose.connection;

// Generates secret key
const secretKey = crypto.randomBytes(32).toString('hex');
process.env.token_key = secretKey;
console.log('Secret Key Generated:', secretKey);
console.log('Stored Token Key:', process.env.token_key);

app.use(express.json());
app.use('/api', routes);
app.use('/auth', authentication);

// Start the server
app.listen(3000, () => {
    console.log(`Server is running!`);
});

database.on('error', (error) => {
    console.log('ERROR: Database not Connected')
})

database.once('connected', () => {
    console.log('Database Connected')
})

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, Ciar!');
});
