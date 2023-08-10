const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/user'); // import user routes

const app = express();

// replace the string with your own connection string from MongoDB Atlas
const dbURI = 'mongodb+srv://paurab21ug:nit11july@cluster0.lgpbguv.mongodb.net/signup?retryWrites=true&w=majority';

mongoose.connect(dbURI)
    .then(() => console.log('MongoDB connected...'))
    .catch((err) => console.error(`MongoDB connection error: ${err}`));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// User routes
app.use('/api/user', userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));
