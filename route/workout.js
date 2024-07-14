const express = require('express');
const Workout = require('../models/Model.JS');
const { createWorkout, getWorkouts, getworkout } = require('../controller/workoutController')


const router = express.Router();

//get all workout
router.get('/posts', getWorkouts)


// GET a single workout
router.get('/posts:id', getworkout)

//Post a new workout 
router.post('/posts', createWorkout)

//Delete a new workout
router.delete('/posts:id', (req, res) => {
    res.json({message: "Delete a new workout"})
})

//Patch a new workout
router.patch('/posts:id', (req, res) => {
    res.json({message: "Patch a new workout"})
})



module.exports = router;