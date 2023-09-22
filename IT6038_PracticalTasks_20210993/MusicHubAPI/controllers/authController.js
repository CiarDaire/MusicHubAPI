require('dotenv').config();
const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    try {
        const {email, password} = req.body;
        
        if (!(email || password)) {
            res.status(400).send('Please input your email and password.')
        };

        const existingUser = await User.findOne({ email });

        if (existingUser){
            return res.status(409).send("User account already exists. Please login instead.")
        };

        encryptPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            email: email.toLowerCase(),
            password: encryptPassword
        });

        const token = jwt.sign(
            {user_id: newUser.id, email},
            process.env.token_key
        );

        newUser.token = token;

        res.status(201).json(newUser);

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send('Please input your email and password.');
        }

        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                { user_id: user.id, email },
                process.env.token_key,
                {
                    expiresIn: "2hr"
                },
            );

            return res.status(200).json({ message: 'Login successful- please paste token below to x-access-control header.', token });
        } else {
            return res.status(401).send('Invalid login.');
        }
    } catch (error) {
        return res.status(400).send('Invalid login.');
    }
};

module.exports = { signup, login };