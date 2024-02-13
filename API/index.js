import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.DB_CONNECTION_URI).then(() => {
    console.log('Connected to DB');
}).catch((err) => {
    console.log(err);
});

const app = express();

app.listen(process.env.PORT,() => {
    console.log('Server is running on port 3000!');
});