const Workout = require('../models/Model');
const mongoose = require('mongoose');


//Get all workout
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({creaetAt: -1})

    res.status(200).json(workouts);
}

//Get a single workout
const getworkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const workOut = await Workout.findById(id);
    
    if(!workOut) {
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workOut)
}


//create a workout
const createWorkout = async (req, res) => {
    const { title, reps, load} = req.body

    let emptyFields = []

    if(!title){
        emptyFields.push('title')
    }
    if(!load) {
        emptyFields.push('load')
    }if(!reps) {
        emptyFields.push('reps')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the field', emptyFields})
    }

    try {
        const workout = await Workout.create({ title, reps, load});
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}


//delete a workout
const deleteWorkout = async (req, res) =>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workout"})
    }

    const WorkOut = await Workout.findByIdAndDelete({_id: id})

    if(!WorkOut){
        return res.status(400).json({error: "No such workout"})
    }

    res.status(200).json(WorkOut)
}


//Update a workout
const updateWorkout = async (req, res) =>{
    const { id } = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No souch workout"})
    }

    const workOut = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!Workout){
        return res.status(400).json({error: "No such workout"})
    }

    res.status(200).json(workOut)

}

module.exports = {
    createWorkout, 
    getWorkouts, 
    getworkout,
    updateWorkout,
    deleteWorkout
}