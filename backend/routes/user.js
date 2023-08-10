// const express = require('express');
// const router = express.Router();

// const User = require('../models/User'); // import the User model

// // Registration route
// router.post('/signup', async (req, res) => {
//     console.log(req.body);
//     const { username, email, password } = req.body;

//     // Check if user already exists
//     let userExists;
//     try {
//         userExists = await User.findOne({$or: [{username}, {email}]});
//     } catch(err) {
//         return res.status(500).json({ error: err.message });
//     }
    
//     if (userExists) {
//         return res.status(400).json({ error: 'User already exists' });
//     }

//     // Create a new user
//     const user = new User({ username, email, password });

//     // Save the user to the database
//     user.save()
//         .then((user) => {
//             res.json({ message: 'User registered successfully', user });
//         })
//         .catch((err) => {
//             res.status(500).json({ error: err.message });
//         });
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const User = require('../models/User'); // import the User model

// Registration route
router.post('/signup', async (req, res) => {
    // console.log(req.body);
    const { username, email, password } = req.body;

    // Check if user already exists
    let userExists;
    try {
        userExists = await User.findOne({$or: [{username}, {email}]});
    } catch(err) {
        return res.status(500).json({ error: err.message });
    }
    
    if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
    }

    // Create a new user
    const user = new User({ username, email, password });

    // Save the user to the database
    user.save()
        .then((user) => {
            res.json({ message: 'User registered successfully', user });
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'User with this email does not exist' });
        }

        // Check if password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Invalid password' });
        }

        // Successful login
        res.json({ message: 'Login successful', user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
