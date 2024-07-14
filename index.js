const express = require('express');
const dotenv = require('dotenv');
const workoutRoutes = require('./route/workout.js')
const connectDB = require('./config/db.js')

//express app
const app = express();

//laod envorinmont variable
dotenv.config();

//middleware
app.use(express.json());

//Database connection 
connectDB();

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//route 
app.use('/api/workouts',workoutRoutes);


// listen for requests
app.listen(process.env.PORT, () => {
    console.log("Server is running on port ", process.env.PORT)
})